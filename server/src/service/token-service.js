const jwt = require('jsonwebtoken');
const { User_token, Doctor_token } = require('../../db/models');
const ApiError = require('../exceptions/api-error');

class TokenService {
  generateTokens(payload) {
    const accesToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
    return {
      accesToken,
      refreshToken,
    };
  }

  validateAccesToken(token) {
    console.log(token);
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await User_token.findOne({
      where: {
        user_id: userId,
      },
    });
    if (tokenData) {
      tokenData.refresh_token = refreshToken;
      return tokenData.save();
    }
    try {
      const token = await User_token.create({ user_id: userId, refresh_token: refreshToken });
      return token;
    } catch (error) {
      console.log(error);
    }
  }

  async saveTokenDoc(userId, refreshToken) {
    const tokenData = await Doctor_token.findOne({
      where: {
        doctor_id: userId,
      },
    });
    if (tokenData) {
      tokenData.refresh_token = refreshToken;
      return tokenData.save();
    }
    const token = await Doctor_token.create({ doctor_id: userId, refresh_token: refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    try {
      const tokenData = await User_token.destroy({ where: { refresh_token: refreshToken } });
      return tokenData;
    } catch (error) {
      console.log(error);
    }
  }

  async removeTokenDoc(refreshToken) {
    try {
      const tokenData = await Doctor_token.destroy({ where: { refresh_token: refreshToken } });
      return tokenData;
    } catch (error) {
      console.log(error);
    }
  }

  async findToken(refreshToken) {
    try {
      const tokenData = await User_token.findOne({ where: { refresh_token: refreshToken } });
      return tokenData;
    } catch (error) {
      console.log(error);
    }
  }

  async findTokenDoc(refreshToken) {
    try {
      const tokenData = await Doctor_token.findOne({ where: { refresh_token: refreshToken } });
      return tokenData;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TokenService();
