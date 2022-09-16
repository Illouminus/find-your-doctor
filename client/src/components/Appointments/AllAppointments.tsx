import React from 'react'
import cn from 'classnames'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './appoint.module.css'

const arr = [
  { id: 1, first_name: 'John', last_name: 'Smith', speciality: 'уролог', date: new Date('2022-09-25T12:00').toLocaleDateString(), time: new Date('2022-09-25T12:00').toLocaleTimeString().slice(0, 5) },
  { id: 2, first_name: 'Mary', last_name: 'Pirth', speciality: 'уролог', date: new Date('2022-09-05T14:00').toLocaleDateString(), time: new Date('2022-09-05T14:00').toLocaleTimeString().slice(0, 5) }
]

console.log(arr);

export const AllAppointments: React.FC = () => {

  return (
    <div className={styles.cards_box}>
      <p>эдик писюн</p>
      {arr.map((item) => (
        <div className={styles.card_box}>
          <div className={cn([styles.card_header, (new Date(item.date) < new Date()) ? styles.card_header_gray : styles.card_header_red])}>
            <Typography sx={{ mb: 1.5 }} color="text.primary" gutterBottom>
              <p><span className={styles.card_header_text}>{item.date}</span> <span className={styles.card_header_text}>{item.time}</span></p>
            </Typography>
          </div>
          <div className={styles.card_doc_desc}>
            <div className={styles.card_avatar_box}>
              <div className={styles.card_avatar}>
                <p className={styles.card_avatar_name}>
                  {item.last_name.slice(0, 1) + item.first_name.slice(0, 1)}
                </p>
              </div>
            </div>
            <div>
              <Typography variant="h5" component="div">
                {item.last_name} {item.first_name}
              </Typography>
              <Typography variant="body2">
                {item.speciality}
              </Typography>
            </div>
          </div>
          <div className={styles.card_button_box}>
            <Button size="small">Подробнее</Button>
          </div>
        </div>
      ))}
    </div>
  )
}