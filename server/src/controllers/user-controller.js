const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const userService = require('../service/user-service');
const { Appointment, User } = require('../../db/models');

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
      console.log(email, password);
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
      const response = await Appointment.findAll({ where: { id } });
      console.log(response);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getUserLk(req, res) {
    try {
      // const data = req.body;
      const { id } = req.params;
      console.log("id", id);
      const user = await User.findOne({ where: { id } });
      console.log('user', user);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
