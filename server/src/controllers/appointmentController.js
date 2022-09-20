const { Appointment, Timetable } = require("../../db/models");
const {Op} = require("sequelize");

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
        console.log( doctor_id,
            user_id,
            time,
            date,
            comment,
            firstTime)
        console.log(date.slice(0,10))
        const newAppointment = await Appointment.create({doctor_id,user_id,date_time:date, first_time:firstTime,comments_patient: comment})

            const startDate = new Date (`${date.slice(0,10)}`)

            time = '' + time

                const t = await Timetable.update({[time]:false},  {
                where: {

                    doctor_id,
                    date: { [Op.between]: [startDate, `${date.slice(0,10)} 23:59:59.000`]}
                }} )
                console.log(t)

                const data = 'Вы успешно записались на приём '
        res.json(data);
    } catch (error) {
        const data = 'Что-то пошло не так. Обновите траницу и попробуйте снова'
        console.log(error);
        res.json(data)
    }
}

module.exports = { setAppointment };
