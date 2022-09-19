const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const { Doctor } = require('../../db/models');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class DocService {
  async registration(email, password, sex, firstName, lastName, patronymic, telephone, experience, education, speciality, photo, adress) {
    const candidate = await Doctor.findOne({
      where: {
        email,
      },
    });
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const activationLink = uuid.v4();
    try {
      const user = await Doctor.create({
        email, password: hashPassword, first_name: firstName, last_name: lastName, patronymic, telephone, experience, education, speciality, photo, sex, adress, activationLink,
      });
      const isDoctor = true;
      const userDto = new UserDto(user, isDoctor); // id, email, isActivated
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveTokenDoc(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
    } catch (error) {
      console.log(error);
    }

    // await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
  }

  async activate(activationLink) {
    const user = await Doctor.findOne({ where: { activation_link: activationLink } });
    if (!user) {
      throw ApiError.BadRequest('Неккоректная ссылка активацции');
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await Doctor.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw ApiError.BadRequest('Пользователь не был найден');
    }
    const isPassChech = await bcrypt.compare(password, user.password);
    if (!isPassChech) {
      throw ApiError.BadRequest('Вы ввели неправильный пароль');
    }
    const isDoctor = false;
    const userDto = new UserDto(user, isDoctor);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveTokenDoc(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeTokenDoc(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnathorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const findToken = await tokenService.findTokenDoc(refreshToken);
    if (!userData || !findToken) {
      throw ApiError.UnathorizedError();
    }
    const user = await Doctor.findByPk(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveTokenDoc(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    try {
      const users = await Doctor.findAll();
      return users;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new DocService();
