import React, {useState} from "react";
import {makeMonthCalendar} from './library'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {Box, Button, Card, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Collapse} from '@mui/material';
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModalAppointment from "../ModalAppointment/ModalAppointment";
const workingHours = ['9','10','11','12','13','14','15','16','17','18','19']

export default function DocCalendar(props:any) {
    const {id, first_name, Appointments, Timetables, last_name, speciality, patronymic} = props.props.el
    console.log(props.props.el)
    const [fourDaysNumb, setFourDaysNumb] = useState('0')
    const [newAppointmentTime, setNewAppointmentTime] = useState({date:'', time:''})
    const handleFourDaysNumb = (event: React.SyntheticEvent, newValue: string) => {
        setFourDaysNumb(newValue);
    };

    const calendar = makeMonthCalendar(Timetables)
    interface ExpandMoreProps extends IconButtonProps {
        expand: boolean;
    }
    const ExpandMore = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    /// ModalWindow logic
    const [openModal, setOpenModal] = React.useState(false);

    const handleClickOpen = (hour:string, day:string) => {
        setNewAppointmentTime({date:day, time:hour})
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Box>
                <Card sx={{display: 'flex', minWidth: 250, maxWidth: 450, border: "none", boxShadow: "none",}}>
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
                            <Collapse in={expanded} timeout="auto" unmountOnExit>

                            {calendar.map(( fourDays:any, index:number) =>
                            <TabPanel key={index} value={String(index)} >
                                <Table>
                                    <TableHead>
                                        <TableCell>{fourDays[0].label}</TableCell>
                                        {fourDays[1] && <TableCell>{fourDays[1].label}</TableCell>}
                                        {fourDays[2] && <TableCell>{fourDays[2].label}</TableCell>}
                                        {fourDays[3] && <TableCell>{fourDays[3].label}</TableCell>}

                                    </TableHead>
                                    <TableBody>
                                        {workingHours.map((hour:string) =>
                                            <TableRow>
                                                {fourDays[0] && <TableCell>{fourDays[0].timetable[hour] == true? <Button onClick={()=>handleClickOpen(hour, fourDays[0].day)}>{hour}:00</Button>:<Button disabled>{hour}:00</Button>}</TableCell>}
                                                {fourDays[1] && <TableCell>{fourDays[1].timetable[hour] == true? <Button onClick={()=>handleClickOpen(hour, fourDays[1].day)}>{hour}:00</Button>:<Button disabled>{hour}:00</Button>}</TableCell>}
                                                {fourDays[2] && <TableCell>{fourDays[2].timetable[hour] == true? <Button onClick={()=>handleClickOpen(hour, fourDays[2].day)}>{hour}:00</Button>:<Button disabled>{hour}:00</Button>}</TableCell>}
                                                {fourDays[3] && <TableCell>{fourDays[3].timetable[hour] == true? <Button onClick={()=>handleClickOpen(hour, fourDays[3].day)}>{hour}:00</Button>:<Button disabled>{hour}:00</Button>}</TableCell>}
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                        )}
                            </Collapse>
                        </Box>
                        </TabContext>
                </Card>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ width: '100%' }}
                >
                    {expanded? (
                        <><p>Свернуть</p><ExpandMoreIcon sx ={{transform: 'rotate(180deg)'}} fontSize='large'/>
                        </>
                    ):(
                        <><p>Открыть расписание</p><ExpandMoreIcon fontSize='large'/></>)}
                </ExpandMore>
            </Box>
            <ModalAppointment props={[handleClickOpen,handleClose, openModal, id, first_name, last_name, newAppointmentTime, speciality, patronymic]}></ModalAppointment>
        </>
    );
}