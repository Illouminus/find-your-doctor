const {Doctor, Tag, Raiting, Appointment, Timetable} = require('../../db/models')
const {Op} = require('sequelize')

async function getDoctors (req, res)  {
    try{
        let inputspecialist = req.params['inputspecialist']
        let inputplace = req.params['inputplace']
        if(!inputplace || inputplace==undefined) {
            const theDoctors = await Doctor.findAll({
                include: [{model: Tag}, {model: Raiting}, {model: Appointment}, {model:Timetable}],
                where: {speciality: {[Op.substring]: inputspecialist}}
            })
            return res.json(theDoctors)

        }else{
            const theDoctors = await Doctor.findAll({
                include:[{model:Tag}, {model:Raiting}, {model:Appointment}, {model:Timetable}],
                where:{[Op.and]:[{speciality:{[Op.substring]: inputspecialist }},{adress:{[Op.substring]: inputplace }}]}})
            return res.json(theDoctors)

        }
    }catch(e){
        console.log(e)
    }
}

module.exports = { getDoctors };
