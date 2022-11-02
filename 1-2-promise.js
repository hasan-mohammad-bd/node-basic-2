// promise has 3 state as:
// promise is an asynchronous action 
/* 
1. pending 
2. resolve
3. rejected

*/

//example of an promise
const myPromise = new Promise((resolve, reject) => {
    const user = 1
    if(!user){
        reject('Something went wrong');
    }
    else {
        setTimeout(() => {
            resolve('successfully get the data')
        }, 2000); 
    }

})



//to get the promise result (consume)

//promise has 3 method: 
// catch (if there is an error)
// then(if the data is successfully come)
// finally


//to solve promise with synchronies work. promise.all is used. 

myPromise
    .then(res => console.log("found in then",res))
    .catch(err => console.log("found in catch",err))


    //this is the test from what the hell is going on