
// function liferemaining(age){
//     var years = 70-age;
//     var days = years * 365;
//     var weeks = years *52;
//     var months = years *12;
//     console.log ("You have "+days+"days"+weeks+"weeks"+months+"months"+years+"years remaining");

// }
// liferemaining(28);

// let button = document.querySelector('#btn');

// button.addEventListener('click', calculateBMI); 
// function calculateBMI(){
//     let height = document.querySelector('#height').value;
//     let weight = document.querySelector('#weight').value;
//     let result = (weight / ((height * height)/ 10000)).toFixed(2);
//     document.querySelector('#result').value = result;

// }
    
let button = document.querySelector('#btn');
button.addEventListener('click', calculateBMI);
function calculateBMI () {
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    // valid number
    if (height === "" || isNaN(height) || height<= 0){
        alert ("Please provide a valid height!")
    }
    if (weight === "" || isNaN(weight) || weight<= 0){
        alert ("Please provide a valid weight!")
    }



    // result
    let result = (weight / ((height * height)/ 10000)).toFixed(2);
    document.querySelector('#result').value = result;
    if (result<= 18.5){
        document.querySelector(".text").innerHTML =" You are Underweight!"    
    }
    else if ( result > 25){
        document.querySelector(".text").innerHTML =" You are Overweight!"

    }
    
    else{
        document.querySelector(".text").innerHTML =" You are Healthy!"
    }

    

}




