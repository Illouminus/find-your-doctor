import React from 'react';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import ReactSelect from 'react-select';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { otherFields } from './validation';
import { IRegForm2, IAllFields } from './types'
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
  setHarvester: React.Dispatch<React.SetStateAction<IAllFields | {}>>
  whoReg: boolean,
  harvester: IAllFields | {}
}

const getValue = (value: string) =>
  value ? options.find((option) => option.value === value) : ''

export const DocSecondRegForm: React.FC<RegFormType> = ({harvester, setHarvester, setWhoReg, whoReg }) => {
  const { handleSubmit, control } = useForm<IRegForm2>();
  const { errors } = useFormState({ control });
  const {registerDoc} = useActions()
  const onSubmit: SubmitHandler<IRegForm2> = (data) => {
    // console.log(data);
    setHarvester((prev) => {return {...prev, ...data}} )
    // setSecondForm((prev) => !prev)
    
    registerDoc({...data, ...harvester})

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
        <Controller
          control={control}
          name="adress"
          rules={otherFields}
          render={({ field }) => (
            <TextField
              label="Рабочий адрес*"
              size="small"
              margin="normal"
              className={styles.regForm__inputAdress}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value || ''}
              error={!!errors.adress?.message}
              helperText={errors.adress?.message}
            />
          )}
        />
        <div>
          <Controller
            control={control}
            name="speciality"
            rules={otherFields}
            render={({ field }) => (
              <TextField
                label="Специальность*"
                size="small"
                margin="normal"
                className={styles.regForm__inputSpeciality}
                fullWidth={true}
                onChange={(e) => field.onChange(e)}
                value={field.value || ''}
                error={!!errors.speciality?.message}
                helperText={errors.speciality?.message}
              />
            )}
          />
            </div>
            <Controller
              control={control}
              name="education"
              render={({ field }) => (
                <TextField
                  label="Образование"
                  size="small"
                  margin="normal"
                  className={styles.regForm__inputSpeciality}
                  fullWidth={true}
                  onChange={(e) => field.onChange(e)}
                  value={field.value || ''}
                />
              )}
            />
            <Controller
              control={control}
              name="experience"
              render={({ field }) => (
                <TextField
                  label="Опыт"
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
              rules={{required: 'Выберите пол!'}}
              render={({ field: {onChange, value}, fieldState: {error} }) => (
                <>
                  <ReactSelect
                    placeholder='Пол'
                    options={options}
                    defaultValue={{label: 'POL', value: 'none'}}
                    value={getValue(value)}
                    onChange={(newValue) => onChange(newValue)}
                  />
                  {error && <div className={styles.error_reg}>{ error.message }</div>}
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