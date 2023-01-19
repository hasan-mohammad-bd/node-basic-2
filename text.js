let arr = [ 3, 26, 1, 2, 3, 44, 57, 87, 1 ];

const fixArray = (array) =>{
    let uniqueArray = [];

    
    for(let value of array){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }

    uniqueArray.sort(function(a, b){return a-b})


    return uniqueArray
}

let fixedArr = fixArray(arr);

console.log(fixedArr);