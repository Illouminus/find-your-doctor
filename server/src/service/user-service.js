const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const { User } = require('../../db/models');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
  async registration(email, password, first_name, last_name, patronymic, telephone, photo, sex) {
    const candidate = await User.findOne({
      where: {
        email,
      },
    });
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const activationLink = uuid.v4();
    const user = await User.create({
      email, password: hashPassword, first_name, last_name, patronymic, telephone, photo, sex, activation_link: activationLink,
    });
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
    const isDoctor = false;
    const userDto = new UserDto(user, isDoctor); // id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async activate(activationLink) {
    const user = await User.findOne({ where: { activation_link: activationLink } });
    if (!user) {
      throw ApiError.BadRequest('Неккоректная ссылка активацции');
    }
    user.is_activated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await User.findOne({
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
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnathorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const findToken = await tokenService.findToken(refreshToken);
    if (!userData || !findToken) {
      throw ApiError.UnathorizedError();
    }
    const user = await User.findByPk(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserService();
