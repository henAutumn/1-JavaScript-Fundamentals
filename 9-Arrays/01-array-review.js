function car (make, model, year){
    this.make=make;
    this.model=model;
    this.year=year;
}
let myArr=[]
let myCar=new car("ford", "model-T",1910)
let yourCar=new car("tesla", "roadster",2018)
let theircar=new car('pontiac', "trans am", 1977)

myArr.push(myCar, yourCar,theircar)

console.log(myArr);


