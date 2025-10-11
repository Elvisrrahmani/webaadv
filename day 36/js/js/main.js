// $(window).ready(function(){
//     alert("Jquery is working")
// })

// $("#header")

// $('.paragrafi')

// $("ul li").mouseover(function(){
//     alert("Mouse over")  
// })

// $("ol li").mouseout(function(){
//     alert("Mouse out")  
// })

$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('testing text');
})

$('#btn2').click(function(){
    console.log('clicked')
})

$("#myDiv").click(function(){
    $(this).addClass("clicked");
})
.find("span")
.attr("title","Hover over me")
    
$("#btn4").click(function(){
    $(".hidden").hide();
})

$("#btn3").click(function(){
    // $(".hidden").show();
    // $(".hidden").show(300);
    $(".hidden").show("slow");
})

$("#square").click(function(){
    $("#square").animate({
        "left": "+=50px",
        "opacity": 0.25,
        "fontSize":"50px"
    })
})


/*
click
keydown
keyup
mouseover
mouseout
focus
resize
*/


$("#sort").sortable();

$(function(){
    $("#accordion").accordion();  
})

$("#tabs").tabs();