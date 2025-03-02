const user = {
    username: "Anil Kumar",
    loginCount: 7,
    signedTrue: true,

    getUserDetails: function() {
        console.log("Got details from DB");
    }
}

console.log(user.getUserDetails());
console.log(user.constructor); 