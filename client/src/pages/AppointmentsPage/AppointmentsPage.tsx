import React, { useEffect, useState } from 'react';
import axios from "axios";
import { AllAppointments, OneAppointment } from '../../components/Appointments/index'
import { AppStateType, OneAppStateType } from '../../components/Appointments/types'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../models/iUser'
import { initStateApp } from '../../components/Appointments/initStateApp'

import { DocCalendar } from '../../components/Calendar/DocCalendar'

import styles from '../../components/Appointments/appoint.module.css'

export const AppointmentsPage: React.FC = () => {
  const user: IUser = useTypedSelector(state => state.user.user)
  const [appointments, setAppointments] = useState<AppStateType[]>([]);
  const [oneApp, setOneApp] = useState<OneAppStateType>(initStateApp);

  useEffect(() => {
    if (!user.isDoctor) {
      axios.get(`http://localhost:4000/api/appointments/${user.id}`).then((resFromServer) => {
      const data = resFromServer.data;
      setAppointments(data);
    });
    } else {
      axios.get(`http://localhost:4000/api/doc/appointments/${user.id}`).then((resFromServer) => {
        const data = resFromServer.data;
        setAppointments(data);
      });
    }
    
  }, [user]);

  console.log('appointments', appointments);
  console.log('user', user);
  
  return (
    <div className={styles.content_container}>
      <AllAppointments appointments={appointments} setOneApp={setOneApp} />
      {oneApp.isVisible && <OneAppointment oneApp={oneApp} setOneApp={setOneApp} />}
      {appointments.length  === 0 && <div>Записей не найдено</div>}
    </div>
  )
}