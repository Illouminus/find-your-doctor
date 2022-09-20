import axios from "axios";
import React, { useEffect } from 'react';

export const DocCalendar: React.FC = () => {
  useEffect(() => {
    axios.get(`http://localhost:4000/api/calendar/${6}`).then((resFromServer) => {
      const data = resFromServer.data;
      console.log(data);
      
    });
  }, []);
  
  return (
    <p>calendar</p>
  )
}