import moment from "moment/moment";



const makeMonthCalendar = (timetables:any) => {
    const month:any = []

    let day = moment().local()
    let obj:any = {day:day.format()}
    obj.label = `${obj.day.slice(8,10)}.${obj.day.slice(5,7)}`
    // obj.timetable = { 9:moment().hour() < 9, 10:moment().hour() < 10, 11:moment().hour() < 11, 12:moment().hour() < 12,13:moment().hour() < 13, 14:moment().hour() < 14,
    //     15:moment().hour() < 15, 16:moment().hour() < 16, 17:moment().hour() < 17, 18:moment().hour() < 18,19:moment().hour() < 19}
    obj.timetable = { 9:null, 10:null, 11:null, 12:null,13:null, 14:null,
        15:null, 16:null, 17:null, 18:null,19:null}
    for (let y = 0; y < timetables.length; y++) {
        if (timetables[y].date.slice(0, 10) == obj.day.slice(0, 10)) {
            obj.timetable = timetables[y]
        }
        }
    obj.timetable =
        {
            9:moment().hour() < 9? obj.timetable[9]:false,
            10:moment().hour() < 10? obj.timetable[10]:false,
            11:moment().hour() < 11? obj.timetable[11]:false,
            12:moment().hour() < 12? obj.timetable[12]:false,
            13:moment().hour() < 13? obj.timetable[13]:false,
            14:moment().hour() < 14? obj.timetable[14]:false,
            15:moment().hour() < 15? obj.timetable[15]:false,
            16:moment().hour() < 16? obj.timetable[16]:false,
            17:moment().hour() < 17? obj.timetable[17]:false,
            18:moment().hour() < 18? obj.timetable[18]:false,
            19:moment().hour() < 19? obj.timetable[19]:false,
        }
            month.push(obj)
    for (let i =0; i < 59; i++) {
        let obj:any = {day:day.add(1, 'days').format()}
            obj.label = `${obj.day.slice(8,10)}.${obj.day.slice(5,7)}`
            obj.timetable = {8:false, 9:false, 10:false, 11:false, 12:false,13:false, 14:false,15:false, 16:false, 17:false, 18:false,19:false}
        for (let y = 0; y < timetables.length; y++) {
            if (timetables[y].date.slice(0, 10) == obj.day.slice(0, 10)) {
                obj.timetable = timetables[y]
            }

        }
        month.push(obj)

    }
    let size = 4

    let subarray = []
    for (let i=0; i < Math.ceil(month.length/size); i++){
        subarray[i] = month.slice((i*size), (i*size) + size);
    }
    subarray.map(arr => arr.push({label:`${arr[0].label} - ${arr[arr.length-1].label}`}))

    return subarray
}

export { makeMonthCalendar };
