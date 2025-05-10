// function showMessage(){
//     alert("This is a function in javascript");
// }

// showMessage();

function sum(x,y){
    document.write(x+y);
}

sum(2,5);
document.write("<br>");
sum(55,44);
document.write("<br>");
sum(120,54);


//arrowFunction
// var arrowFunction = name => alert(`Hello ${name}`);

// arrowFunction("Elvisi");


function testFunction(){
 var localVar = "ELVISI";
alert(localVar);
}

testFunction();

var car ={name: "Mercedes",
    color:"red",
    year:2020,
    kilometers:0,
    startEngine: function(){
       alert("the car is moving");
    },
    get getKilometers(){
    return this.Kilometers;
    },
    set setKilometers(km){
    this.Kilometers = km;
}
};
 console.log(car.getKilometers);
 Car.setKilometers = 100;
 console.log(car.getKilometers);
