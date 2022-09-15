import React from 'react';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { emailValidation, passwordValidation, telephoneValidation } from './validation';
import { IRegForm, IAllFields } from './types';

import styles from './regform.module.css';

type RegFormType = {
  setSecondForm: React.Dispatch<React.SetStateAction<boolean>>
  setWhoReg: React.Dispatch<React.SetStateAction<boolean>>
  setHarvester: React.Dispatch<React.SetStateAction<IAllFields | {}>>
  whoReg: boolean
  // prev: boolean;
}

export const DocRegForm: React.FC<RegFormType> = ({ setSecondForm, setHarvester, setWhoReg, whoReg }) => {
  const { handleSubmit, control } = useForm<IRegForm>();
  const { errors } = useFormState({control});

  const onSubmit: SubmitHandler<IRegForm> = (data) => {
    console.log(data);
    setHarvester(() => data)
    setSecondForm((prev) => !prev)
  }

  // console.log(errors);
  
  return (
    <div className={styles.regForm}>
      <Typography variant="h5" gutterBottom={true}>
        Зарегистрироваться как: {whoReg ? 'Пациент' : 'Доктор'} / <span
          className={styles.another_user}
          onClick={() => setWhoReg(prev => !prev)}>
          {whoReg ? 'Доктор' : 'Пациент'}
        </span>
      </Typography>
      <form className={styles.regForm__form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={emailValidation}
          render={({ field }) => (
            <TextField
              label="Email"
              size="small"
              margin="normal"
              className={styles.regForm__inputEmail}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="telephone"
          rules={telephoneValidation}
          render={({ field }) => (
            <TextField
              label="Телефон"
              size="small"
              margin="normal"
              className={styles.regForm__inputPhone}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.telephone?.message}
              helperText={errors.telephone?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Пароль"
              type="password"
              size="small"
              margin="normal"
              className={styles.regForm__inputPassword}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              autoComplete="off"
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          // disableElevation={true}
          sx={{
            marginTop: 2
          }}
        >
          Продолжить
        </Button>
      </form>
    </div>
  )
} 