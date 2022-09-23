import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import { DocState } from "../../pages/DoctorPage/DoctorPage";

export default function RatingDoc({ el }: { el: DocState }) {
  console.log(el);

  const [rating, setRating] = useState<number>(0)
  
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/doctor/${el.id}/stars`)
        if (res.data) {
          setRating(res.data)
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Rating name="half-rating-read" defaultValue={0} value={rating} precision={0.5} readOnly />
  );
}
