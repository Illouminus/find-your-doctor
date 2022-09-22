module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Doctors', [{
      email: 'david6572@rambler.ru',
      password: 'qwerty',
      first_name: 'Давид',
      last_name: 'Дудкин',
      patronymic: 'Юлианович',
      telephone: '79998867458',
      experience: '25 лет',
      education: 'Высшая категория, кандидат наук',
      speciality: 'уролог',
      photo: 'male1.jpeg',
      sex: 'male',
      adress: 'Россия, г. Москва, Молодежная ул., д. 9',
      is_activated: false,
      activation_link: 'cewcewcw',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'timofey4023@yandex.ru',
      password: 'qwerty',
      first_name: 'Тимофей',
      last_name: 'Кузьмов',
      patronymic: '',
      telephone: '79997547237',
      experience: '10 лет',
      education: '1 категория',
      speciality: 'уролог',
      photo: 'male2.jpeg',
      sex: 'male',
      adress: 'Россия, г. Москва, Железнодорожная ул., д. 3',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'lavrentiy.ishutin@rambler.ru',
      password: 'qwerty',
      first_name: 'Евгений',
      last_name: 'Синицын',
      patronymic: 'Филимонович',
      telephone: '79990885317',
      experience: '12 лет',
      education: '1 категория',
      speciality: 'уролог',
      photo: 'male11.jpeg',
      sex: 'male',
      adress: 'Россия, г. Омск, Победы ул., д. 12',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'alena68@ya.ru',
      password: 'qwerty',
      first_name: 'Александра',
      last_name: 'Серова',
      patronymic: 'Кирилловна',
      telephone: '79992419049',
      experience: '14 лет',
      education: 'Высшая категория',
      speciality: 'уролог',
      photo: 'female11.jpeg',
      sex: 'female',
      adress: 'Россия, г. Казань, Первомайский пер., д. 4',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'yuliana6313@yandex.ru',
      password: 'qwerty',
      first_name: 'Милана',
      last_name: 'Халифова',
      patronymic: 'Эдуардовна',
      telephone: '79993567042',
      experience: '10 лет',
      education: 'Высшая категория, кандидат наук',
      speciality: 'проктолог',
      photo: 'female12.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, 17 Сентября ул., д. 19',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'grigoriy1995@outlook.com',
      password: 'qwerty',
      first_name: 'Петр',
      last_name: 'Вудов',
      patronymic: '',
      telephone: '79999662936',
      experience: '11 лет',
      education: 'Высшая категория',
      speciality: 'проктолог',
      photo: 'male12.jpeg',
      sex: 'male',
      adress: 'Россия, г. Казань, Дружная ул., д. 18',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'anna1978@yandex.ru',
      password: 'qwerty',
      first_name: 'Раиса',
      last_name: 'Ридягина',
      patronymic: 'Радионовна',
      telephone: '79991554633',
      experience: '7 лет',
      education: '2 категория',
      speciality: 'терапевт',
      photo: 'female13.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Гагарина ул., д. 5',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'mila05071960@gmail.com',
      password: 'qwerty',
      first_name: 'Светлана',
      last_name: 'Родимова',
      patronymic: 'Ивановна',
      telephone: '79997577066',
      experience: '14 лет',
      education: '1 категория',
      speciality: 'терапевт',
      photo: 'female14.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Школьный пер., д. 5',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'valentin1989@gmail.com',
      password: 'qwerty',
      first_name: 'Валентин',
      last_name: 'Балинский',
      patronymic: 'Валентинович',
      telephone: '79992213631',
      experience: '20 лет',
      education: 'Высшая категория',
      speciality: 'терапевт',
      photo: 'male5.jpeg',
      sex: 'male',
      adress: 'Россия, г. Омск, Песчаная ул., д. 19',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'mila05071960@gmail.com',
      password: 'qwerty',
      first_name: 'Виктория',
      last_name: 'Снегирева',
      patronymic: 'Игоревна',
      telephone: '79997577066',
      experience: '14 лет',
      education: '1 категория',
      speciality: 'терапевт',
      photo: 'female1.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Школьный пер., д. 5',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'mila05071960@gmail.com',
      password: 'qwerty',
      first_name: 'Анастасия',
      last_name: 'Чернышевская',
      patronymic: 'Викторовна',
      telephone: '79997577066',
      experience: '11 лет',
      education: '2 категория',
      speciality: 'терапевт',
      photo: 'female2.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Школьный пер., д. 5',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'mila05071960@gmail.com',
      password: 'qwerty',
      first_name: 'Марина',
      last_name: 'Солонова',
      patronymic: 'Артемовна',
      telephone: '79997577066',
      experience: '20 лет',
      education: 'Высшая категория',
      speciality: 'терапевт',
      photo: 'female3.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Школьный пер., д. 5',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'mila05071960@gmail.com',
      password: 'qwerty',
      first_name: 'Василина',
      last_name: 'Болонская',
      patronymic: 'Дмитриевна',
      telephone: '79997577066',
      experience: '15 лет',
      education: 'Высшая категория',
      speciality: 'терапевт',
      photo: 'female4.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Школьный пер., д. 5',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'valentin1989@gmail.com',
      password: 'qwerty',
      first_name: 'Павел',
      last_name: 'Зуб',
      patronymic: 'Семенович',
      telephone: '79999899159',
      experience: '7 лет',
      education: '2 категория',
      speciality: 'психиатр',
      photo: 'male6.jpeg',
      sex: 'male',
      adress: 'Россия, г. Москва, Сельская ул., д. 24',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'mila05071960@gmail.com',
      password: 'qwerty',
      first_name: 'Юлия',
      last_name: 'Дегтярева',
      patronymic: 'Игоревна',
      telephone: '79997577066',
      experience: '13 лет',
      education: '1 категория',
      speciality: 'психиатр',
      photo: 'female5.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Школьный пер., д. 5',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'achtung@gmail.com',
      password: '$2b$10$zmXSXny8UyqISe4yH70KgeP5AtABnmrQ9ylI9sDRhWLE5JeWaeVJu',
      first_name: 'Иван',
      last_name: 'Петров',
      patronymic: 'Александрович',
      telephone: '79999899159',
      experience: '14 лет',
      education: 'Высшая категория, кандидат наук',
      speciality: 'психиатр',
      photo: 'male7.jpeg',
      sex: 'male',
      adress: 'Россия, г. Москва, Ленина ул., д. 1',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: '2132131@gmail.com',
      password: '$2b$10$zmXSXny8UyqISe4yH70KgeP5AtABnmrQ9ylI9sDRhWLE5JeWaeVJu',
      first_name: 'Евгения',
      last_name: 'Лисова',
      patronymic: 'Владимировна',
      telephone: '79999899159',
      experience: '8 лет',
      education: 'Высшая категория',
      speciality: 'дерматолог',
      photo: 'female15.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Ленина ул., д. 1',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'dsgsdsdg@gmail.com',
      password: '$2b$10$zmXSXny8UyqISe4yH70KgeP5AtABnmrQ9ylI9sDRhWLE5JeWaeVJu',
      first_name: 'Ева',
      last_name: 'Эльфинова',
      patronymic: 'Антоновна',
      telephone: '79999899159',
      experience: '8 лет',
      education: '1 категория',
      speciality: 'дерматолог',
      photo: 'female16.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Ленина ул., д. 1',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'regerger@gmail.com',
      password: '$2b$10$zmXSXny8UyqISe4yH70KgeP5AtABnmrQ9ylI9sDRhWLE5JeWaeVJu',
      first_name: 'Алексей',
      last_name: 'Ефремов',
      patronymic: 'Генадьевич',
      telephone: '79999899159',
      experience: '19 лет',
      education: 'Высшая категория',
      speciality: 'дерматолог',
      photo: 'male9.jpeg',
      sex: 'male',
      adress: 'Россия, г. Москва, Ленина ул., д. 1',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'regerger@gmail.com',
      password: '$2b$10$zmXSXny8UyqISe4yH70KgeP5AtABnmrQ9ylI9sDRhWLE5JeWaeVJu',
      first_name: 'Иван',
      last_name: 'Коротков',
      patronymic: 'Иванович',
      telephone: '79999899159',
      experience: '14 лет',
      education: '1 категория',
      speciality: 'дерматолог',
      photo: 'male10.jpeg',
      sex: 'male',
      adress: 'Россия, г. Москва, Ленина ул., д. 1',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'regerger@gmail.com',
      password: '$2b$10$zmXSXny8UyqISe4yH70KgeP5AtABnmrQ9ylI9sDRhWLE5JeWaeVJu',
      first_name: 'Василий',
      last_name: 'Шаврин',
      patronymic: 'Александрович',
      telephone: '79999899159',
      experience: '14 лет',
      education: 'Высшая категория',
      speciality: 'хирург',
      photo: 'male3.jpeg',
      sex: 'male',
      adress: 'Россия, г. Москва, Ленина ул., д. 1',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'regerger@gmail.com',
      password: '$2b$10$zmXSXny8UyqISe4yH70KgeP5AtABnmrQ9ylI9sDRhWLE5JeWaeVJu',
      first_name: 'Алексей',
      last_name: 'Ковров',
      patronymic: 'Васильевич',
      telephone: '79999899159',
      experience: '18 лет',
      education: 'Высшая категория',
      speciality: 'хирург',
      photo: 'male4.jpeg',
      sex: 'male',
      adress: 'Россия, г. Москва, Ленина ул., д. 1',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'regerger@gmail.com',
      password: '$2b$10$zmXSXny8UyqISe4yH70KgeP5AtABnmrQ9ylI9sDRhWLE5JeWaeVJu',
      first_name: 'Владимир',
      last_name: 'Покровский',
      patronymic: 'Олегович',
      telephone: '79999899159',
      experience: '14 лет',
      education: '1 категория',
      speciality: 'хирург',
      photo: 'male8.jpeg',
      sex: 'male',
      adress: 'Россия, г. Москва, Ленина ул., д. 1',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'mila05071960@gmail.com',
      password: 'qwerty',
      first_name: 'Анна',
      last_name: 'Светлицкая',
      patronymic: 'Эдуардовна',
      telephone: '79997577066',
      experience: '10 лет',
      education: '2 категория',
      speciality: 'хирург',
      photo: 'female6.jpeg',
      sex: 'female',
      adress: 'Россия, г. Москва, Школьный пер., д. 5',
      is_activated: true,
      activation_link: 'cewvaerwvrvrwe',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doctors', null, {});
  },
};
