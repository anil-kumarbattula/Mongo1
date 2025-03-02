class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const userOne = new User("Anil", "qwerty@qwe.com", "123")

console.log(userOne.encryptPassword());