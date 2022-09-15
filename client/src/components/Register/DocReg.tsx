import React, { useState } from 'react';
import { DocRegForm, DocSecondRegForm } from './index'
import { IAllFields } from './types'
import styles from '../../components/Register/regform.module.css'

type RegFormType = {
  setWhoReg: React.Dispatch<React.SetStateAction<boolean>>
  whoReg: boolean
}

export const DocReg: React.FC<RegFormType> = ({ setWhoReg, whoReg }) => {
  const [secondForm, setSecondForm] = useState<boolean>(true);
  const [harvester, setHarvester] = useState<IAllFields | {}>({});

  console.log(harvester);
  return (
    <div className={styles.regPage}>
      {secondForm ? (
        <DocRegForm setSecondForm={setSecondForm} setHarvester={setHarvester} setWhoReg={setWhoReg} whoReg={whoReg} />
      ) : (
          <DocSecondRegForm setHarvester={setHarvester} setWhoReg={setWhoReg} whoReg={whoReg} />
      )}
    </div>
  )
}