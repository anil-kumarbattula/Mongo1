const promiseone = new Promise(function(resolve, reject){  //Promise is created
    //Do a asyn task
    setTimeout(()=> {
        console.log('Asyn task is done');
        resolve() //connected to then
    },1000)
})

//Promise Consumed
promiseone.then(()=> {  //then is connection with resolve
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Asyn Task 2");
        resolve({user: "Anil", email: "zxcvbnm@zxc.com"})
    },1000)
}).then(function(user){
    console.log(user);
    
})

const promiseTwo = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        let error = true
        if(!error) {
            resolve({username: "AnilKumar", password: "zxcv"})
        } else {
            reject('ERROR: Something went Wrong')
        }
    }, 1000)
})

promiseTwo
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=> {
    console.log(username);
})
.catch((error)=> {
    console.log(error);
})
.finally(()=> {
    console.log("Promise is either resolved or rejected")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: 'Anil', password: 'qwerty'})
        } else {
            reject('ERROR from PromiseThree')
        }
    },1000)
})

async function consumepromiseThree(){
    try {
        const response = await promiseThree
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseThree()