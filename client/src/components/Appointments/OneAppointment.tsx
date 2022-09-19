import React from 'react';
import { OneAppStateType } from '../../components/Appointments/types'
import cn from 'classnames'
import Button from '@mui/material/Button';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../models/iUser'

import styles from './appoint.module.css'

type appType = {
  oneApp: OneAppStateType
}

export const OneAppointment: React.FC<appType> = ({ oneApp }) => {
  const user: IUser = useTypedSelector(state => state.user.user)
  const isDoctor = user.isDoctor
  console.log('USER', user);
  
  console.log(oneApp.appointment);
  const item = oneApp.appointment;
  return (
    <div className={styles.onecard_content_container}>
      <div className={styles.onecard_firstcard_container}>
        <div className={cn([
          styles.card_header,
          (new Date(item.date_time) < new Date()) ?
            styles.card_header_gray : styles.card_header_red])}>
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
        </div>
        <div className={styles.onecard_first_desc}>
          <div className={styles.card_avatar_box}>
            <div className={styles.card_avatar}>
              <p className={styles.card_avatar_name}>
                {!isDoctor ? (
                  item.doctor.last_name?.slice(0, 1) + item.doctor.first_name?.slice(0, 1)
                ) : (
                  item.patient.last_name?.slice(0, 1) + item.patient.first_name?.slice(0, 1)
                )}
              </p>
            </div>
          </div>
          <div>
            {!isDoctor ? (
              <>
                <p>{`${item.doctor.last_name} ${item.doctor.first_name} ${item.doctor.patronymic}`}</p>
                <p>{`${item.doctor.speciality}`}</p>
              </>
            ): (
              <>
                  <p>{`${item.patient.last_name} ${item.patient.first_name} ${item.patient.patronymic}`}</p>
                  <p>{`${item.patient.telephone}`}</p>
                  <p>{`${item.patient.email}`}</p>
              </>
            )}
            
          </div>
        </div>
        <div className={styles.card_button_box}>
          <Button size="small">Отменить запись</Button>
        </div>
      </div>
      <div className={styles.onecard_secondcard_container}>
        <div className={styles.onecard_second_desc}>
          <div className={styles.first_time_container}>
            <p>{`Прием: ${item.first_time ? ('первичный') : ('повторный')}`}</p>
          </div>
          {!isDoctor &&
          <div className={styles.doctor_adress}>
            <p>{`Адрес: ${item.doctor.adress}`}</p>
          </div>
          }
          <div className={styles.comments_container}>
            {!isDoctor ? (
              <p>{`Ваш комментарий: ${item.comments_patient}`}</p>
            ) : (
              <>
                <p>{`Комментарий пациента: ${item.comments_doctor}`}</p>
                <p>{`Ваш комментарий: ${item.comments_doctor}`}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}