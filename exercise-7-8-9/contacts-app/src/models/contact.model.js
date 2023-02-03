export class Contact {
  name;
  email;
  status = false;

  constructor(name, email, status) {
    this.name = name;
    this.email = email;
    this.status = status;
  }
}
