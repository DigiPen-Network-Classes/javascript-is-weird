"use strict";
// user class with avatarUrl as an extra, unneeded, property
export class User {
  
  // keyword: constructor
  constructor(name, password, avatar) {
    this.username = name;
    this.password = password;
    this.avatar = avatar;
    this.id = User.calculateId(name);
  }

  // property getter and setter (avoid empty setters if possible)
  get avatar_url() { return this.avatar; }
  set avatar_url(a) { this.avatar = a; }

  // an instance function
  logAvatar() {
    console.log(`${this.username} avatar is ${this.avatar}`);
  }

  // a static function of the class:
  static calculateId(username) {
    let id = Math.floor(Math.random() * 100);
    return `${username}-${id}`;
  }
}  

let u = new User("tony", "password1", "initial");
u.logAvatar();
u.avatar_url = "different";
u.logAvatar();

console.log(`user id is ${User.calculateId("tony")}`);