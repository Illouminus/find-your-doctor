import React, { useState } from 'react';
import { PatientRegForm, PatientSecondRegForm } from './index'
import { PatientAllFields } from './types'
import styles from '../../components/Register/regform.module.css'

type RegFormType = {
  setWhoReg: React.Dispatch<React.SetStateAction<boolean>>
  whoReg: boolean
}

export const PatientReg: React.FC<RegFormType> = ({ setWhoReg, whoReg }) => {
  const [secondForm, setSecondForm] = useState<boolean>(true);
  const [harvester, setHarvester] = useState<PatientAllFields | {}>({});

  console.log(harvester);

  return (
    <div className={styles.regPagePatient}>
      {secondForm ? (
        <PatientRegForm setSecondForm={setSecondForm} setHarvester={setHarvester} setWhoReg={setWhoReg} whoReg={whoReg} />
      ) : (
          <PatientSecondRegForm setHarvester={setHarvester} setWhoReg={setWhoReg} whoReg={whoReg} />
      )}
    </div>
)
}