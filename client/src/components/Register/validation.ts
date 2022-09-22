const REQUIRED_FIELD = 'Необходимо заполнить';

export const emailValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => { 

    if (value.match(/[а-яА-Я]/)) {
      return 'Email должен содержать только латинские буквы'
    }
    if (!value.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
      return 'Email должен быть формата "abc@def.gh"'
    }
    return true;
  }
}

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Пароль должен быть не короче 6-ти символов'
    }
    return true;
  }
}

export const updateValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 1) {
      return 'Поле должно быть заполнено'
    }
    return true;
  }
}

export const telephoneValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 10) {
      return 'Номер телефона должен содержать не менее 10 цифр'
    }
    if (!value.match(/^\d+$/)) {
      return 'Номер должен содержать только цифры'
    }
    return true;
  }
}

export const otherFields = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    return true;
  }
}

export const sex = {
  required: 'Выберите пол',
  validate: (value: string) => {
    return true;
  }
}
