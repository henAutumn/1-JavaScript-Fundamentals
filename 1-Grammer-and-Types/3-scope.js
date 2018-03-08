//scope


//global scope 
//local scope

function football(){
//local scope- only shows within the curly brace
    var x= 7;
    console.log(x);
}

football();

var x=10;
console.log(x);
//global scope


//const and let variables


//const is constant, cannot be changed
const weather="bad";

//let and var are simmilar, they can be changed. However let only works on a local scope scale. It CANNOT be bled into a global scope, ever. 

// sometimes var can let things bleed out, let will never allow that to happen

var count=4;

if(true){
    var more=1;
}
console.log(count+more)//5


let count=4;

if(true){
    let more=1;
}
console.log(count+more);//doesnt work








