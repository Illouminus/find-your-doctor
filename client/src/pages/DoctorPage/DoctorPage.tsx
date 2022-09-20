import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import DoctorPage1 from "./DoctorPage1";
import DoctorPage2 from "./DoctorPage2";
import DoctorPage3 from "./DoctorPage3";
import DoctorPage4 from "./DoctorPage4";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IUser } from "../../models/iUser";

export interface DocState {
  id: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  telephone: string;
  experience: string;
  education: string;
  sex: string;
  speciality: string;
  photo: string;
  adress: string;
  Tags: [{ id: string; name: string }];
}

function DoctorPage() {
  const user : IUser = useTypedSelector(state => state.user.user);

  const [docState, setDocState] = useState<DocState[]>();

  useEffect(() => {
    axios.get(`http://localhost:4000/doctor/${user.id}`).then((resFromServer) => {
      const data = resFromServer.data;
      // console.log(data);
      setDocState(data);
    });
  }, []);

  return (
    <div className={styles.conteiner}>
      <div className={styles.content}>
        
        {docState?.map((el) => (
          <div key={el.id} className={styles.mainInfo}>
            <DoctorPage1 el={el} />
            <DoctorPage2 el={el} />
            <DoctorPage3 el={el} />
            <DoctorPage4 el={el} />
            {/* <div className={styles.mainInfo}>
              <div>
                {el?.first_name} {el?.last_name} {el?.patronymic}{" "}
              </div>
              <div>
                {el?.sex} {el?.speciality}
              </div>
              </div>
            {el?.Tags?.map((e) => (
              <div key={e.id} className={styles.tags} >
                <Chip label={e?.name} variant="outlined" />
              </div>
            ))}
            <div>{el.experience}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorPage;
