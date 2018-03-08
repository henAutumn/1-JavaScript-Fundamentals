// 
var age=-15;
if(age>=25){
    console.log("Yay, you can rent a car!")
}
else if(age>=21){
    console.log("Yay, you can drink!");
}
else if(age>=18){
    console.log("Yay, you can vote!");
}
else if(age<=17){
console.log("Sorry, you're too young to do anything.")

}
function divider(){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");}


divider();


var x=true;

if(typeof(x)==="string"){
    console.log("string cheese")
}else if(typeof(x)==="number"){
    console.log("numbers are cool")
}else if(typeof(x)==="boolean"){
    console.log("truthiness")
}else(console.log("nothing"))

// typeof turns into a string, so you have to put tests as strings to check properly
divider()
var x={};

switch(typeof x){
    case "string":
    console.log("string cheese")
    break;
    case "number":
    console.log("numbers are cool")
    break;
    case "boolean":
    console.log("truthiness")
    break;
    case "object":
    console.log("objective")
    break;
    case "array":
    console.log("array how are you")
    break;
    case "function":
    console.log("function function what's your function")
    default:
    console.log("What is this?")
}

divider();
//use a ternary to find the results
var x=4;
var ternTest=typeof x;
var results=(ternTest==="string")? "string cheese":(ternTest==="number") ? "numbers are cool" : (ternTest==="boolean") ? "truthiness" : "unidentified"

console.log(results)


