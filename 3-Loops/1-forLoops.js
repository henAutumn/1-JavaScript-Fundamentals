//for loops


// for(var i=0; i<10;i++){
//     console.log(i)
// }

// console.log("***************************************")
// //count to 20 by 2s
// for(var x=0;x<=20;x+=2){
//     console.log(x)
// }

// console.log("*******************************************************************************")
// var name="Kenn"
// for(var y=0;y<name.length;y++){
//     console.log(name[y]);
// }
// console.log("****************************************************"
// )
// // use for loop to iterate over a name in reverse

// for(var a=name.length-1;a>=0;a--){
//     console.log(name[a])
//}
//  var added=0;
// for(var b=1;b<=50;b++){
//      console.log(added += b);
// }
// console.log(added)
//fizzbuzz
for(var i=0;i<=50;i++){
    
    if(((i%3)==0) && ((i%5)==0)){
        console.log("FizzBuzz")
    }
     else if((i%3)==0){
        console.log("Fizz")
    }else if((i%5)==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}


firstArray=['first','second','third'];
secondArray=['fourth','fifth','sixth'];
thirdArray=[];
thirdArray.push(firstArray);
thirdArray.push(secondArray);
console.log(thirdArray);
for(let i=0;i<thirdArray.length;i++){
    for(let x=0;x < thirdArray[i].length;x++){
        const element=thirdArray[i];
        console.log(element[x])
    }
}

















