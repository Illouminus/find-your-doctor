import React from 'react';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import ReactSelect, { SingleValue, ActionMeta } from 'react-select';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { otherFields } from './validation';
import { IAllFields, IRegForm3, PatientAllFields } from './types'
import { useActions } from '../../hooks/useActions'
import styles from './regform.module.css';

interface IOption {
  value: string;
  label: string;
}

const options: IOption[] = [{
  value: 'male',
  label: 'Мужской',
}, {
  value: 'female',
  label: 'Женский'
}
]

type RegFormType = {
  setWhoReg: React.Dispatch<React.SetStateAction<boolean>>
  setHarvester: React.Dispatch<React.SetStateAction<PatientAllFields | {}>>
  whoReg: boolean,
  harvester: IAllFields | {}
}

const getValue = (value: string) =>
  value ? options.find((option) => option.value === value) : ''

export const PatientSecondRegForm: React.FC<RegFormType> = ({harvester, setHarvester, setWhoReg, whoReg }) => {
  const { handleSubmit, control } = useForm<IRegForm3>();
  const { errors } = useFormState({ control });
  const {registerUser} = useActions()
  const onSubmit: SubmitHandler<IRegForm3> = (data) => {
    // console.log(data);
    setHarvester((prev) => { return { ...prev, ...data } })
    // setSecondForm((prev) => !prev)
    registerUser({...data, ...harvester})
  }

  return (
    <div className={styles.secondRegForm}>
      <Typography variant="h5" >
        Зарегистрироваться как: {whoReg ? 'Пациент' : 'Доктор'} / <span
          className={styles.another_user}
          onClick={() => setWhoReg(prev => !prev)}>
          {whoReg ? 'Доктор' : 'Пациент'}
        </span>
      </Typography>
      <Typography variant="subtitle2" gutterBottom={true}>
        Введите дополнительную информацию о себе
      </Typography>
      <form className={styles.secondRegForm__form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="lastName"
          rules={otherFields}
          render={({ field }) => (
            <TextField
              label="Фамилия*"
              size="small"
              margin="normal"
              className={styles.regForm__inputLastname}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.lastName?.message}
              helperText={errors.lastName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="firstName"
          rules={otherFields}
          render={({ field }) => (
            <TextField
              label="Имя*"
              size="small"
              margin="normal"
              className={styles.regForm__inputFirstname}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.firstName?.message}
              helperText={errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="patronymic"
          render={({ field }) => (
            <TextField
              label="Отчество"
              size="small"
              margin="normal"
              className={styles.regForm__inputPatronymic}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
            // error={!!errors.patronymic?.message}
            // helperText={errors.patronymic?.message}
            />
          )}
        />
          <div className={styles.select_input_reg}>
            <Controller
              control={control}
              name="sex"
              rules={{ required: 'Выберите пол!' }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
                  <ReactSelect
                    // placeholder='пол'
                    options={options}
                    defaultValue={{ label: 'POL', value: 'none' }}
                    value={getValue(value)}
                    onChange={(newValue: SingleValue<string | IOption>, actionMeta: ActionMeta<string | IOption>) => onChange(newValue)}
                  />
                  {error && <div className={styles.error_reg}>{error.message}</div>}
                </>
                // style={{ color: '#d32f2f', fontSize: '0.75rem', fontFamily: 'Roboto' }}
                // <Select
                //   label="Пол"
                //   onChange={(e) => field.onChange(e)}
                //   // defaultValue={'пол'}
                //   value={field.value || ''}
                //   error={!!errors.sex?.message}
                //   helperText={errors.sex?.message}
                // >
                //   <MenuItem value={'male'}>male</MenuItem>
                //   <MenuItem value={'female'}>female</MenuItem>
                // </Select>
              )}
            />
          </div>
        
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          // disableElevation={true}
          sx={{
            marginTop: 2
          }}
        >
          Регистрация
        </Button>
      </form>
    </div>
  )
}