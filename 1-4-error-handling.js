const {errorHandler, two} = require('./1-5-errorHandler') 
//default export when export one thing at a time
// name export when export multiple items  at a time. 

async function getData(){
    try{
        // undefined.find();

        const emailError = new Error("Email already exists!");
        throw emailError //creating custom error!!
    }
    catch (error){
        errorHandler(error); //making global error
    }
}

getData();
two()
