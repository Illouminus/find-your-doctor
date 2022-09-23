import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cn from 'classnames'
import { deepOrange, deepPurple, indigo, blue, teal, green, lime, orange, yellow, blueGrey } from '@mui/material/colors';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { OneAppStateType } from '../../components/Appointments/types'
import { IUser } from '../../models/iUser'
import { pickRandomColor } from './AllAppointments'

import styles from './appoint.module.css'

type appType = {
  oneApp: OneAppStateType
  setOneApp: React.Dispatch<React.SetStateAction<OneAppStateType>>
}

export const OneAppointment: React.FC<appType> = ({ oneApp, setOneApp }) => {
  const user: IUser = useTypedSelector(state => state.user.user)
  const isDoctor = user.isDoctor
  const item = oneApp.appointment;
  console.log('appointment', oneApp.appointment);
  console.log('oneApp', oneApp);

  const [input, setInput] = useState<boolean>(false);

  const [stars, setStars] = useState<number | null>(0);

  useEffect(() => {
    (async () => {
      try {
        if (item.status && (new Date(item.date_time) < new Date())) {
          const response = await axios.post('/api/rating/getstars', { user_id: user.id, doctor_id: item.doctor.id})
          console.log(response.data);
          if (response.data) {
            setStars(response.data.stars);
          } else {
            setStars(0);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [item]);

  const addRating = async (user_id: number | null, doctor_id: number | null, stars: number | null) => {
    console.log('stars:', stars, 'user_id:', user_id, 'doctor_id:', doctor_id);
    try {
      const response = await axios.post(`/api/rating/setstars`, {user_id, doctor_id, stars })
      console.log(response.data);
        // setOneApp((prev) => {
        //   const obj = { ...prev }
        //   obj.appointment.status = false
        //   return obj;
        // })
    } catch (error) {
      console.log(error);
    }
  }

  const appCancel = (id: number) => {
    try {
      axios.post(`/appointment/undo`, { id: item.id, doctor_id: item.doctor.id, date_time: item.date_time }).then((resFromServer) => {
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

  const updateComment = (e: any, isDoctor: boolean) => {
    e.preventDefault();
    const value = e.target.comment.value;
    // const user_id = (!isDoctor ? item?.doctor?.id : item?.patient?.id);
    console.log(item.id, value, isDoctor);
    try {
      axios.post('/appointment/updcomment', { id: item.id, value, isDoctor }).then((resFromServer) => {
        const data = resFromServer.data;
        console.log(data);
        setOneApp((prev) => {
          const obj = { ...prev }
          if (isDoctor) {
            obj.appointment.comments_doctor = value;
          } else {
            obj.appointment.comments_patient = value;
          }
          return obj;
        })
        setInput(false)
      })
    } catch (error) {
      console.log(error);
    }
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
            {isDoctor ? (
              item?.patient?.photo ? (
                <Avatar src={`/img/${item?.patient?.photo}`} sx={{ width: 60, height: 60 }} />
              ) : (
                <Avatar
                  sx={{ width: 60, height: 60, bgcolor: pickRandomColor()[500] }}
                >
                  {item?.patient?.last_name[0]}
                  {item?.patient?.first_name[0]}
                </Avatar>
              )
            ) : (
              item?.doctor?.photo ? (
                <Avatar src={`/img/${item?.doctor?.photo}`} sx={{ width: 60, height: 60 }} />
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
              <div className={styles.button_box}>
                <Button onClick={() => appCancel(item.id)} size="small">Отменить запись</Button>
                <Button size="small">перенести запись</Button>
              </div>
            ))
          ) : (
              <p className={styles.app_cancel_p}>запись отменена</p>
          )}
          {!isDoctor && item.status ? ((new Date(item.date_time) < new Date() ?
            (
              <>
                {/* <Button size="small">Оценить врача</Button> */}
                <Rating className={styles.rating}
                  name="simple-controlled"
                  value={stars}
                  onChange={(event, newValue) => {
                    setStars(newValue);
                    addRating(user.id, item.doctor.id, newValue);
                  }}
                />
              </>
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
                {input ? (
                  <form onSubmit={(e) => updateComment(e, false)}>
                    <textarea name='comment' className={styles.textarea} defaultValue={item.comments_patient ? `${item.comments_patient}` : ''} />
                    <button type='submit' className={styles.pen_button}><SaveAsIcon fontSize='small' /></button>
                    <button onClick={() => setInput(false)} className={styles.close_button}><CloseIcon fontSize='small' /></button>
                  </form>
                ) : (
                  <>
                    <p>{item.comments_patient ? `${item.comments_patient}` : 'нет комментария'}</p>
                    <button onClick={() => setInput(true)} className={styles.pen_button}><BorderColorIcon fontSize='small' /></button>
                  </>
                  )}
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
                      <form onSubmit={(e) => updateComment(e, true)}>
                        <textarea name='comment' className={styles.textarea} defaultValue={item.comments_doctor ? `${item.comments_doctor}` : ''}/>
                        <button type='submit' className={styles.pen_button}><SaveAsIcon fontSize='small' /></button>
                        <button onClick={() => setInput(false)} className={styles.close_button}><CloseIcon fontSize='small' /></button>
                      </form>
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
      <div className={styles.onecard_secondcard_container}>
        <div className={styles.onecard_second_desc}></div>
      </div>
    </div>
  )
}