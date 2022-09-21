/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const userService = require('../service/user-service');
const {
  Appointment, User, Doctor, Timetable,
} = require('../../db/models');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
      }
      const sex = req.body.sex.value;
      const {
        email, password, firstName, lastName, patronymic, telephone, photo,
      } = req.body;

      const userData = await userService.registration(email, password, firstName, lastName, patronymic, telephone, photo, sex);
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
      const userData = await userService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (error) {
      next(error);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async getUsers(req, res, next) {
    console.log('CONTROLLER ===== >');
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async getAppointments(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Appointment.findAll({ where: { user_id: id }, include: { model: Doctor }, order: [['date_time']] });
      const result = response.map((el) => ({
        id: el.id,
        comments_patient: el.comments_patient,
        comments_doctor: el.comments_doctor,
        date_time: el.date_time,
        first_time: el.first_time,
        status: el.status,
        doctor: {
          id: el.Doctor.id,
          first_name: el.Doctor.first_name,
          last_name: el.Doctor.last_name,
          patronymic: el.Doctor.patronymic,
          experience: el.Doctor.experience,
          education: el.Doctor.education,
          speciality: el.Doctor.speciality,
          sex: el.Doctor.sex,
          adress: el.Doctor.adress,
        },
      }));
      // console.log(result);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getUserLk(req, res) {
    try {
      const { id } = req.params;
      console.log('id', id);
      const user = await User.findOne({ where: { id } });
      console.log('user', user);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(req, res) {
    try {
      console.log('!!!!', req.body);
      const { id } = req.params;
      const { first_name, last_name, email, telephone } = req.body;
      // const { id } = req.params;
      console.log('PARAMS', req.params);
      const newUser = await User.update({
        first_name, last_name, email, telephone,
      }, { where: { id } });
      // const data = 'Данные изменены';
      const user = await User.findOne({ where: { id } });
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  }

  // async calendar(req, res, next) {
  //   const { id } = req.params;
  //   const dayNum = new Date().getDay();
  //   // console.log(dayNum);
  //   const timetable = await Timetable.findAll({ where: { doctor_id: id } });
  //   // console.log(+new Date(timetable[0].date), (Date.now()));
  //   const delRows = timetable.filter((el) => +new Date(el.date) < (Date.now() - 86400000));
  //   console.log(delRows);
  //   for (let i = 0; i < delRows.length; i++) {
  //     await Timetable.destroy({ where: { id: delRows[i].id } });
  //   }

  //   const date = new Date();
  //   // console.log(new Date(date.setDate(date.getDate() + 1)).getDay());
  //   if (!timetable.length) {
  //     if (dayNum) {
  //       await Timetable.create({ doctor_id: id, date: new Date() });
  //     }
  //     for (let i = 0; i < (24 - dayNum); i++) {
  //       let dayCheck = new Date(date.setDate(date.getDate())).getDay();
  //       if (!dayCheck) {
  //         dayCheck = new Date(date.setDate(date.getDate() + 1)).getDay();
  //       }
  //       if (dayCheck) {
  //         // console.log('daycheck', dayCheck);
  //         // console.log(new Date(date.setDate(date.getDate() + 1)).getDay());
  //         // console.log(new Date(date.setDate(date.getDate())));
  //         await Timetable.create({ doctor_id: id, date: new Date(date.setDate(date.getDate() + 1)) });
  //       }
  //     }
  //   } else {

  //   }
  //   try {
  //     console.log('date ==========', new Date());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

module.exports = new UserController();
