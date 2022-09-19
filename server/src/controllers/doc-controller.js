/* eslint-disable max-len */
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const DocService = require('../service/doctor-service');
const { Appointment, User } = require('../../db/models');

class DocController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
      }
      const sex = req.body.sex.value;
      const {
        email, password, firstName, lastName, patronymic, telephone, experience, education, speciality, photo, adress,
      } = req.body;

      const userData = await DocService.registration(email, password, sex, firstName, lastName, patronymic, telephone, experience, education, speciality, photo, sex, adress);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      const userData = await DocService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      console.log(refreshToken);
      const token = await DocService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await DocService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await DocService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async getUsers(req, res, next) {
    console.log('CONTROLLER ===== >');
    try {
      const users = await DocService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async getAppointments(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Appointment.findAll({ where: { doctor_id: id }, include: { model: User }, order: [['date_time']] });
      const result = response.map((el) => ({
        id: el.id,
        comments_patient: el.comments_patient,
        comments_doctor: el.comments_doctor,
        date_time: el.date_time,
        first_time: el.first_time,
        patient: {
          id: el.User.id,
          first_name: el.User.first_name,
          last_name: el.User.last_name,
          patronymic: el.User.patronymic,
          sex: el.User.sex,
          email: el.User.email,
          telephone: el.User.telephone,
        },
      }));
      console.log(result);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DocController();
