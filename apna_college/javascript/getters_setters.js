class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get password(){  //by using getters password proprty becomes function
        return this._password.toUpperCase() //gives encrypted value if any user trys to get value
    }

    set password(value){
        this._password = value //sets the original value in DB
    }
}

const userOne = new User("Anil", "abc")
console.log(userOne.password);