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

    } else if (isNaN(result)){
        document.querySelector(".text").innerHTML ="Please provide the necessary information!"
    }
    
    else{
        document.querySelector(".text").innerHTML ="You are Healthy!"
    }

    

}



