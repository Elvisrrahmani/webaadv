let text = document.getElementById("p00").innerHTML;
let search = text.search("digital school");
document.getElementById("demo").innerHTML = search;

function myFunction(){
    let text1 = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML=text1.replace("Kosova","Albania");
}

let text2 = document.getElementById("p01").innerHTML;
const pattern = /e/;
document.getElementById("demo2").innerHTML = pattern.test(text2);

let text3=document.getElementById("p02").innerHTML;
const matchs = text3.match(/e/g);
document.getElementById("demo3").innerHTML=matchs ? matchs.join(","): "No Matches"