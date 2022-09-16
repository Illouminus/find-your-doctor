import React, { useEffect } from 'react';
import axios from "axios";
import { AllAppointments, OneAppointment } from '../../components/Appointments/index'

import styles from '../../components/Appointments/appoint.module.css'

export const AppointmentsPage: React.FC = () => {

  useEffect(() => {
    axios.get(`http://localhost:4000/doctor/${1}`).then((resFromServer) => {
      const data = resFromServer.data;
      console.log('data', data);
      // setDocState(data);
    });
  }, []);

  return (
    <div className={styles.content_container}>
      <AllAppointments />
      <OneAppointment />
    </div>
  )
}