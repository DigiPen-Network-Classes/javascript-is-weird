class User {
  // must declare private variables in context:
  #username;

  constructor(username, password, avatar) {
    this.#username = username;
    this.password = password;
    this.avatar = avatar;
  }

  // readonly property with private instance var:
  get username() { return this.#username; }
  // no setter, can't change username

  logAvatar() {
    console.log(`${this.username} avatar is ${this.avatar}`);
  }
}  

let u = new User("tony", "password1", "initial");
u.age = 2;
// this user has an age:
console.log(`user ${JSON.stringify(u)}`);

let other = new User("other", "password1", "initial");
// this user does not:
console.log(`user ${JSON.stringify(other)} has no age`);

// what if we apply a property to the class?
User.age = 5;
console.log(`class age is ${User.age}, how weird is that?`);