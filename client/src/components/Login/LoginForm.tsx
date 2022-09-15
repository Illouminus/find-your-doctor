import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { emailValidation, passwordValidation } from '../Register/validation';
import { LoginFormType } from '../Register/types';
import styles from '../Register/regform.module.css'

export const LoginForm: React.FC = () => {
  const [userSwitch, setUserSwitch] = useState<boolean>(false);

  const { handleSubmit, control } = useForm<LoginFormType>();
  const { errors } = useFormState({ control });

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
    // setHarvester(() => data)
  }
  return (
    <div className={userSwitch ? (styles.regPagePatient) : (styles.regPage)}>
      <div className={styles.regForm}>
        <Typography variant="h5" gutterBottom={true}>
          Войти как: {userSwitch ? 'Пациент' : 'Доктор'} / <span
            className={styles.another_user}
            onClick={() => setUserSwitch(prev => !prev)}>
            {userSwitch ? 'Доктор' : 'Пациент'}
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
            sx={{
              marginTop: 2
            }}
          >
            Войти
          </Button>
        </form>
      </div>
    </div>
  )
}
