class UserAdaptor {
  static getUsers() {
    return fetch("http://localhost:3000/api/v1/users")
    .then(res => res.json())
  }
}
