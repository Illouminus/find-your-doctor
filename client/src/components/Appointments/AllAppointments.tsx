import React from 'react'
import cn from 'classnames'
import { deepOrange, deepPurple, indigo, blue, teal, green, lime, orange, yellow, blueGrey } from '@mui/material/colors';
import { Avatar } from '@mui/material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppStateType, OneAppStateType } from './types'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../models/iUser'

import styles from './appoint.module.css'

export function pickRandomColor() {
  const colors: any[] = [deepOrange, deepPurple, indigo, blue, teal, green, lime, orange, yellow, blueGrey]
  return colors[Math.floor((Math.random() * colors.length))]
}

type appsType = {
  appointments: AppStateType[]
  setOneApp: React.Dispatch<React.SetStateAction<OneAppStateType>>
}

export const AllAppointments: React.FC<appsType> = ({ appointments, setOneApp }) => {
  const user: IUser = useTypedSelector(state => state.user.user)
  const isDoctor = user.isDoctor
  console.log('appointments', appointments);
  
  return (
    <div className={styles.cards_box}>
      {appointments.map((item) => (
        <div key={item.id} className={styles.card_box}>
          <div className={cn([
            styles.card_header,
            item.status ? ((new Date(item.date_time) < new Date()) ?
              styles.card_header_blue : styles.card_header_red) : styles.card_header_gray])}>
            <Typography sx={{ mb: 1.5 }} color="text.primary" gutterBottom>
              <p className={styles.p_head}>
                <span className={styles.icon}><CalendarMonthIcon fontSize='small' /></span>
                <span className={styles.card_header_text}>
                  {new Date(item.date_time).toLocaleDateString()}
                </span>
                <span className={styles.icon_time}><AccessTimeRoundedIcon fontSize='small' /></span>
                <span className={styles.card_header_text}>
                  {new Date(item.date_time).toLocaleTimeString().slice(0, 5)}
                </span>
              </p>
            </Typography>
          </div>
          <div className={styles.card_doc_desc}>
            <div className={styles.card_avatar_box}>
              {isDoctor ? (
                item?.patient?.photo ? (
                  <Avatar src={`http://localhost:4000/img/${item?.patient?.photo}`} sx={{ width: 60, height: 60 }} />
                ) : (
                  <Avatar
                    sx={{ width: 60, height: 60, bgcolor: pickRandomColor()[500] }}
                  >
                      {item?.patient?.last_name[0]}
                      {item?.patient?.first_name[0]}
                  </Avatar>
                )
              ): (
                  item?.doctor?.photo ? (
                    <Avatar src={`http://localhost:4000/img/${item?.doctor?.photo}`} sx={{ width: 60, height: 60 }} />
                  ) : (
                    <Avatar
                      sx={{ width: 60, height: 60, bgcolor: pickRandomColor()[500] }}
                    >
                        {item?.doctor?.last_name[0]}
                        {item?.doctor?.first_name[0]}
                    </Avatar>
                  )
              )}
            </div>
            <div>
              <Typography variant="h6" component="div">
                {!isDoctor ? (
                  `${item.doctor.last_name} ${item.doctor.first_name} ${item.doctor.patronymic}`
                ): (
                    `${item.patient.last_name} ${item.patient.first_name} ${item.patient.patronymic}`
                )}
              </Typography>
              <Typography variant="body2">
                {!isDoctor ? (
                  `${item.doctor.speciality}`
                ) : (
                    `${item.patient.telephone}`
                )}
                
              </Typography>
            </div>
          </div>
          <div className={styles.card_button_box}>
            <Button onClick={() => setOneApp({isVisible: true, appointment: item})} size="small">Подробнее</Button>
          </div>
        </div>
      ))}
    </div>
  )
}