import React, { useState } from 'react';
import axios from 'axios';
import cn from 'classnames'
import Button from '@mui/material/Button';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CloseIcon from '@mui/icons-material/Close';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { OneAppStateType } from '../../components/Appointments/types'
import { IUser } from '../../models/iUser'

import styles from './appoint.module.css'

type appType = {
  oneApp: OneAppStateType
  setOneApp: React.Dispatch<React.SetStateAction<OneAppStateType>>
}

export const OneAppointment: React.FC<appType> = ({ oneApp, setOneApp }) => {
  const user: IUser = useTypedSelector(state => state.user.user)
  const isDoctor = user.isDoctor

  const [input, setInput] = useState<boolean>(false);

  console.log('appointment', oneApp.appointment);
  console.log('oneApp', oneApp);
  const item = oneApp.appointment;

  const appCancel = (id: number) => {
    try {
      axios.post(`http://localhost:4000/appointment/undo`, { id: item.id, doctor_id: item.doctor.id, date_time: item.date_time }).then((resFromServer) => {
        const data = resFromServer.data;
        console.log(data);
        setOneApp((prev) => {
          const obj = { ...prev }
          obj.appointment.status = false
          return obj;
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  const updateComment = () => {
    console.log('update comment');
    
  }

  return (
    <div className={styles.onecard_content_container}>
      <div className={styles.onecard_firstcard_container}>
        <div className={cn([
          styles.card_header,
          item.status ? ((new Date(item.date_time) < new Date()) ?
            styles.card_header_blue : styles.card_header_red) : styles.card_header_gray])}>
          <p className={styles.p_head}>
            <span className={styles.icon}><CalendarMonthIcon fontSize='small' /></span>
            <span className={styles.onecard_header_text}>
              {new Date(item.date_time).toLocaleDateString()}
            </span>
            <span className={styles.icon_time}><AccessTimeRoundedIcon fontSize='small' /></span>
            <span className={styles.onecard_header_text}>
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
              <div >
                <div className={styles.onecard_name}>
                  <p>{`${item.doctor.last_name} ${item.doctor.first_name} ${item.doctor.patronymic}`}</p>
                </div>
                <p>{`${item.doctor.speciality}`}</p>
              </div>
            ) : (
                <>
                  <div className={styles.onecard_name}>
                    <p>{`${item.patient.last_name} ${item.patient.first_name} ${item.patient.patronymic}`}</p>
                  </div>
                  <div>
                    <p>{`телефон: ${item.patient.telephone}`}</p>
                    <p>{`email: ${item.patient.email}`}</p>
                </div>
                </>
            )}
            
          </div>
        </div>
        <div className={styles.card_button_box}>
          {item.status ? ((new Date(item.date_time) < new Date() ?
            ('') : (
              <>
                <Button onClick={() => appCancel(item.id)} size="small">Отменить запись</Button>
                <Button size="small">перенести запись</Button>
              </>
            ))
          ) : (
              <p className={styles.app_cancel_p}>запись отменена</p>
          )}
          {!isDoctor && item.status ? ((new Date(item.date_time) < new Date() ?
            (
              <Button size="small">Оценить врача</Button>
            ) : (''))) : ('')}
        </div>
      </div>
      <div className={styles.onecard_secondcard_container}>
        <div className={styles.onecard_second_desc}>
          <div className={styles.first_time_container}>
            <p>{`Прием: ${item.first_time ? ('первичный') : ('повторный')}`}</p>
          </div>
          {!isDoctor &&
          <div className={styles.doctor_adress}>
              <p>Адрес:</p>
              <p>{`${item.doctor.adress}`}</p>
          </div>
          }
            {!isDoctor ? (
              <div className={styles.comments_container}>
                <p>Ваш комментарий:</p>
                <div className={styles.comment_box}>
                  <p>{item.comments_patient ? `${item.comments_patient}` : 'нет комментария'}</p>
                  <button className={styles.pen_button}><BorderColorIcon fontSize='small' /></button>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.comments_container}>
                    <p>Комментарий пациента:</p>
                  <p>{item.comments_patient ? `${item.comments_patient}` : 'нет комментария'}</p>
                </div>
                <div className={styles.comments_container}>
                      <p>Ваш комментарий:</p>
                  <div className={styles.comment_box}>
                    {input ? (
                      <>
                        <textarea className={styles.textarea} defaultValue={item.comments_doctor ? `${item.comments_doctor}` : ''}/>
                        <button onClick={() => updateComment()} className={styles.pen_button}><SaveAsIcon fontSize='small' /></button>
                        <button onClick={() => setInput(false)} className={styles.close_button}><CloseIcon fontSize='small' /></button>
                      </>
                    ): (
                      <>
                        <p>{item.comments_doctor ? `${item.comments_doctor}` : 'нет комментария'}</p>
                        <button onClick={() => setInput(true)} className={styles.pen_button}><BorderColorIcon fontSize='small' /></button>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  )
}