// var x = 5;
// if(x>2){
//     console.log("x is greater than 2");
// }else{
//     console.log("x is less than or equal to 2");
// }

// var  y = 10;
// if(y=8){
//     console.log("y is equal to 8");
// }else{
//     console.log("y is not equal to 8");
// }

var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("text_id");


button.onclick=function(){
    text.innerHTML = input.value;
}

var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var button1 = document.querySelector("#btn2_id");
var ans = document.querySelector("#answer");

button1.addEventListener("click", function(){
    ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
})

button.onclick=function(){
    if(input.value>10){
        text.innerHTML = "Input value is bigger than 10";
    }else if(input.value==10){
        text.innerHTML = "Input value is equals to 10";
    }else{
        text.innerHTML = "Input value is less than 10";
    }
}