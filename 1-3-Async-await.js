// const { resolve } = require("node:path/win32")

const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve('success')
    }, 1000)
})

//async function

async function getData(){
    // const res = []
   const res = await promise;
   console.log(res);
}

getData()

//***********then vs async await***************

//getting data with .then
fetch('this is the data')
.then((res) => res.json())
.then((data) => console.log(data))
.catch(err => console.log(err))


//with async await 
async function getUser(){
    const res = await fetch('this the data from async await method')
    const user = await res.json();
    const res2 = await fetch(`https;//www.example.com/${user.id}`)
    const products = res2.json();
    console.log(products);

}