import React, {useEffect, useState} from "react";
import {makeMonthCalendar} from './library'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
    Box,
    Button,
    Card,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Collapse,
    Checkbox,
    Typography,
} from '@mui/material';
import {IUser} from "../../models/iUser";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import axios from "axios";

import Modal from './Modal'

const workingHours = ['9','10','11','12','13','14','15','16','17','18','19']
const sevendays = [0,1,2,3,4,5,6]
export default function Timetable() {

    const user : IUser = useTypedSelector(state => state.user.user)
    useEffect(()=> {
        const fetchTimetables = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/timetable/${user.id}`);
                await setCalendar(makeMonthCalendar(response.data.theTimetables, response.data.theAppointments))
            } catch (error) {
                console.error(error);
            }
        }
        fetchTimetables()
    }, [])
    const [fourDaysNumb, setFourDaysNumb] = useState('0')
    const [calendar, setCalendar] = useState<any>([])
    const [firstStatus, setFirstStatus] = useState(true)
    const handleFourDaysNumb = (event: React.SyntheticEvent, newValue: string) => {
        setFourDaysNumb(newValue);
    };
    const hourHandler = (numb:number, hour:string, index:number, e:any) => {
        const newCalendar = calendar
        newCalendar[index][numb].timetable[hour] = !calendar[index][numb].timetable[hour]
        setCalendar([...newCalendar])
    }
    const hourOnDragStartHandler = async (numb:number, hour:string, index:number, e:any) => {

        e.target.children[0].style.opacity = '10%'
        e.target.children[1].style.color = 'rgba(0, 0, 0, 0.01)'
            const newCalendar = calendar
            let status = calendar[index][numb].timetable[hour]
            setFirstStatus(status)
            newCalendar[index][numb].timetable[hour] = firstStatus
            setCalendar([...newCalendar])
    }
    const hourOnDragEndHandler = (numb:number, hour:string, index:number, e:any) => {
        e.preventDefault()
        e.target.children[0].style.opacity = '100%'
        e.target.children[1].style.color = 'rgba(0, 0, 0, 1)'

    }
    const hourDragOverHandler = (numb:number, hour:string, index:number, e:any) => {
        e.preventDefault()
        const newCalendar = calendar
        newCalendar[index][numb].timetable[hour] = firstStatus
        setCalendar([...newCalendar])
    }
    const allDayHandler = (numb:number, index:number, e:any) => {
        let status = e.target.checked
        const newCalendar = calendar
        newCalendar[index][numb].timetable = {
            9: status,
            10: status,
            11: status,
            12: status,
            13: status,
            14: status,
            15: status,
            16: status,
            17: status,
            18: status,
            19: status
        }
        setCalendar([...newCalendar])
        }

        const fetchTimetables = async () => {
        let calendarToSend = []

        for (let i of calendar){
            calendarToSend.push(...i)
        }
        calendarToSend = calendarToSend.filter((el:any)=> el.day )
            try {
                const response = await axios.post(`http://localhost:4000/api/timetable`, {
                    calendar:calendarToSend,
                    user_id: user.id,
                });
                console.log(response.data)

            } catch (error) {
                console.error(error);
            }
        }
    const [openModal, setOpenModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };
    return (
        <Box sx={{ml:'auto', mr:'auto'}}>
            <Modal props={[handleClickOpen,handleClose, openModal]}></Modal>
            <Box display='flex' justifyContent="center" alignItems="center">
                <Button  onClick={fetchTimetables}>Сохранить</Button>
                <Button  onClick={()=>handleClickOpen()}>Как пользоваться расписанием</Button>
            </Box>

            <Box sx={{ml:'auto', mr:'auto'}}>

                <Card sx={{display: 'flex', minWidth: 250, maxWidth: 700, border: "none", boxShadow: "none",ml:'auto', mr:'auto'}}>
                    <TabContext value={fourDaysNumb}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabList
                                onChange={handleFourDaysNumb}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >

                                {calendar.map(( fourDays:any, index:number) =>
                                    <Tab key={index} value={String(index)} label = {fourDays[fourDays.length-1].label} ></Tab>
                                )}
                            </TabList>
                                {calendar.map(( fourDays:any, index:number) =>
                                    <TabPanel key={index} value={String(index)} >
                                        <Table>
                                            <TableHead>
                                                {sevendays.map((numb:number)=>
                                                    <>
                                                    {fourDays[numb] &&
                                                        <TableCell>
                                                        <Checkbox

                                                            color="success"
                                                            onClick={(e)=>allDayHandler(numb, index, e)}
                                                        />
                                                        <p>{fourDays[numb].weekDay} {fourDays[numb].label}</p>
                                                    </TableCell>}
                                                    </>
                                                 )}
                                            </TableHead>

                                            <TableBody>

                                                {workingHours.map((hour:string) =>
                                                    <TableRow>

                                                        {
                                                            sevendays.map((numb:number) =>
                                                                <>
                                                            {fourDays[numb].appointments.includes(Number(hour))
                                                                ?
                                                                <TableCell sx = {{backgroundColor: '#757ce8', width: 12.5,height: 4}}><Typography gutterBottom variant="caption" >Запись {hour}:00</Typography></TableCell>
                                                                :
                                                                <TableCell
                                                                    draggable="true"
                                                                    onDragOver={(e)=>hourDragOverHandler(numb, hour, index, e)}
                                                                    onDragStart={(e)=>hourOnDragStartHandler(numb, hour, index, e)}
                                                                    onDragEnd={(e)=>hourOnDragEndHandler(numb, hour, index, e)}
                                                                    sx = {{backgroundColor:fourDays[numb].timetable[hour]? '#81c784' : '#ffca28', width: 12.5, height: 4}}>
                                                                    <Checkbox
                                                                        onClick={(e)=>hourHandler(numb, hour, index, e)}
                                                                        color="success"
                                                                        checked = {fourDays[numb].timetable[hour] && true}/>
                                                                    <p>
                                                                    {hour}:00
                                                                    </p>
                                                                </TableCell>
                                                            }
                                                                </>
                                                            )
                                                        }

                                                    </TableRow>

                                                )}
                                            </TableBody>
                                        </Table>
                                    </TabPanel>
                                )}
                        </Box>
                    </TabContext>
                </Card>

            </Box>

        </Box>
    );
}