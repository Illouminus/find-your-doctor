/* eslint-disable camelcase */
const { Op } = require('sequelize');
const { Appointment, Timetable } = require('../../db/models');

async function setAppointment(req, res) {
  try {
    let {
      doctor_id,
      user_id,
      time,
      date,
      comment,
      firstTime,
    } = req.body;
    console.log(
      doctor_id,
      user_id,
      time,
      date,
      comment,
      firstTime,
    );
    const newDate = `${date.slice(0, 10)} ${time}:00:00`;
    console.log(newDate);
    console.log(date.slice(0, 10));
    const newAppointment = await Appointment.create({
      doctor_id, user_id, date_time: newDate, first_time: firstTime, comments_patient: comment, status: true,
    });

    const startDate = new Date(`${date.slice(0, 10)}`);

    time = `${time}`;

    const t = await Timetable.update({ [time]: false }, {
      where: {

        doctor_id,
        date: { [Op.between]: [startDate, `${date.slice(0, 10)} 23:59:59.000`] },
      },
    });
    console.log(t);

    const data = 'Вы успешно записались на приём ';
    res.json(data);
  } catch (error) {
    const data = 'Что-то пошло не так. Обновите страницу и попробуйте снова';
    console.log(error);
    res.json(data);
  }
}

async function cancelAppointment(req, res) {
  // console.log('reqbody', req.body);
  try {
    const { id, date_time, doctor_id } = req.body;
    const time = new Date(date_time).getHours();
    const startDate = new Date(`${date_time.slice(0, 10)}`);
    await Appointment.update({ status: false }, { where: { id } });
    await Timetable.update({ [time]: true }, {
      where: {
        doctor_id,
        date: { [Op.between]: [startDate, `${date_time.slice(0, 10)} 23:59:59.000`] },
      },
    });
    const message = 'Запись отменена';
    res.json(message);
    // console.log(id, date_time, doctor_id, time);
  } catch (error) {
    const message = 'Что-то пошло не так. Обновите страницу и попробуйте снова';
    console.log(error);
    res.json(message);
  }
}

module.exports = { setAppointment, cancelAppointment };
