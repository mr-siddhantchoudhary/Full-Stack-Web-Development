class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, "*");
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /[0-9]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Invalid password. Password should be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  

const user = new User("Mithun", "Password1");
console.log(user.password);


user.password = "newPassword1";
console.log(user.password);