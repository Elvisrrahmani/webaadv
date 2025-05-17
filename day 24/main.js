// var button1 = document.getElementById("btn1");

var button1 = document.querySelector("button");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var v_button = document.getElementById("btn4");
var v_text = document.getElementById("txt1");

// button1.addEventListener("click", function(){
//     alert("Hello from addEventListener");
// })

// // button1.onclick = function(){
// //     alert("Hello");
// // }

// button2.onmouseover = function(){
//     alert("Mouse is over the button");
// }

// button3.onmouseleave = function(){
//     alert("Mouse is leaving the button");
// }

v_button.onclick = function(){
v_text.style.color = "red";
v_text.style.backgroundColor = "lightgray";
v_text.style.textAlign = "center";
v_text.style.fontSize = "100px";
v_text.style.padding = "20px";
}

var btn_circle = document.getElementById("btncircle");
var btn_rect = document.getElementById("btnrect");
var btn_triangle = document.getElementById("btntriangle");

var circle = document.getElementById("circle");
var rect = document.getElementById("rect");
var triangle = document.getElementById("triangle");

btn_circle.onclick = function(){
    circle.setAttribute("class","shape_circle");
}

btn_rect.onclick = function(){
    circle.setAttribute("class","shape_rect");
}

btn_triangle.onclick = function(){
    circle.setAttribute("class","shape_triangle");
}


btn_circle.onclick = function(){
    circle.setAttribute("class","hide");
}

btn_rect.onclick = function(){
    circle.setAttribute("class","hide");
}

btn_triangle.onclick = function(){
    circle.setAttribute("class","hide");
}