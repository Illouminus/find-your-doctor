module.exports = class UserDto {
  email;

  id;

  isActivated;

  first_name;

  last_name;

  isDoctor;

  constructor(model, isDoctor) {
    this.isDoctor = isDoctor;
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.is_activated;
    this.first_name = model.first_name;
    this.last_name = model.last_name;
  }
};
