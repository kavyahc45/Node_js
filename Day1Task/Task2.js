
// var min=2; 
//     var max=3;  
//     var random =  Math.floor(Math.random() * (+max - +min)) + +min; 
//    console.log("Random Number Generated : " + random );
function randomNumber(min, max) { 
    return Math.random() * (max - min) + min; 
    } 
    
    console.log("Random Number between 2 and 3: ") 
    
    
    console.log( randomNumber(2,3) );