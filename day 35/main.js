function openMenu(){
    var menu=document.getElementById("links");
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

function search(){
    var input, filtre, ul, li, a , i, txtvalue;
    input=document.getElementById("myInput");
    filter = input.ariaValueMax.toUpperCase();
    ul = document.getElementById("myList");
li=ul.getElementsByTagName("li");

    for(i=0; i<li.length; i++){
        a = li[i];
        txtvalue = a.textContent || a.innerText;
        if(txtvalue.toUpperCase().indexOf(filtre)>-1){
            li[i].style.display = "block";
        }else{
            li[i].style.display = "none"
        }
    }
}