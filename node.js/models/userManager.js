module.exports = class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getAllUsers() {
    return this.users;
  }
};
