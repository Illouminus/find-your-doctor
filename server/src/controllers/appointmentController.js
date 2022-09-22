/* eslint-disable camelcase */
const { Op } = require('sequelize');
const {
  Appointment, Timetable, Document, App_docs,
} = require('../../db/models');

async function setAppointment(req, res) {
  // console.log(req.body);
  console.log(req.files);
  const path = req.files.map((el) => el.path).map((el) => el.slice(18));
  console.log(path);
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
    for (let i = 0; i < path.length; i++) {
      const response = await Document.create({ user_id, link: path[i] });
      const writeApp = await App_docs.create({ doc_id: response.id, app_id: newAppointment.id });
      console.log('==============>', response);
      console.log('==============>', writeApp);
    }

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

async function updCommentAppointment(req, res) {
  try {
    console.log(req.body);
    const { id, value, isDoctor } = req.body;
    if (isDoctor) {
      await Appointment.update({ comments_doctor: value }, { where: { id } });
    } else {
      await Appointment.update({ comments_patient: value }, { where: { id } });
    }
    const message = 'Комментарий сохранен';
    res.json(message);
  } catch (error) {
    const message = 'Что-то пошло не так. Обновите страницу и попробуйте снова';
    console.log(error);
    res.json(message);
  }
}

async function getDocuments(req, res) {
  const { id } = req.body;
  console.log(req.body.id);
  const response = await Document.findAll({ where: { user_id: id } });
  console.log(response);
  return res.send(response);
}

async function deleteDocuments(req, res) {
  const { id, idDoc } = req.body;
  console.log(id, idDoc);
  const responseApp = await App_docs.destroy({ where: { doc_id: idDoc } });
  const response = await Document.destroy({ where: { user_id: id.id, id: idDoc } });
  console.log(response);
}

module.exports = {
  setAppointment, cancelAppointment, updCommentAppointment, getDocuments, deleteDocuments,
};
