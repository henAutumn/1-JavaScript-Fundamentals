// // hoisting
function divider(){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    }
// // Js puts variable and functions at the top of your code, it stores the vars and funcs before it runs them

// x=5;

// console.log(x)
// var x;
// /// JS reads code twice, however on the first pass it look at things before any operand, then stops. It only reads left of the opperator.
// //The second wave reads the right side as well, and then does the opperations. 

// function myfunc(){
// }


// let x=5;
// let y=10

// console.log(x+y)

// let y
// let x

// let has to be declared with the assignment in order fo the left hand side to recognize, otherwise when the second wave comes, it will dump the memory 


console.log(first());
console.log(second)
var second=function(){
    return 'Did not get hoisted'
}
function first(){
    return "Just got hoisted"
}

divider();
console.log(stringExpression);
var stringExpression="The first console can't see this";
console.log(stringExpression)


