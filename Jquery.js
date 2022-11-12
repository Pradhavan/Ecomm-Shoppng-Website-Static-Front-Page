$(document).ready(function() {
    //Change colour of Navbar items when hover
    $( "#navbar li a" ).mouseover(function() {
        $(this).css("color","rgb(13, 172, 106)");
    });
    $( "#navbar li a" ).mouseleave(function() {
        $(this).css("color","black");
    });
    // Underline text wehn hover on it  navbar items
    $("#navbar li a").hover(function (){
        $(this).css("text-decoration", "underline");
    },function(){
        $(this).css("text-decoration", "none");
    }
    );
    // Underline text wehn hover on it  hero items
    $("#Hero h1,h4,p").hover(function (){
        $(this).css("text-decoration", "underline");
    },function(){
        $(this).css("text-decoration", "none");
    }
    );



})