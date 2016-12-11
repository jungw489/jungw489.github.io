$("body").css("background-color","white");

for (var i=0; i < 60; i++) {
    $("body").append("<div class='dot'></div>");
}

var visibility = 0;
var myCounter = 1;

var heart = ["heart.png", "heart-2.png", "heart-3.png"];

$("body").append("<img src='" + heart[Math.floor(Math.random()*3)] + "'>");

$(".dot").each(function() {
   $(this).css("opacity", visibility/30);
   $(this).html(myCounter);
   $(this).css("height",myCounter+100);
   $(this).css("width",myCounter+100);
   $(this).css("top",Math.floor(Math.random()*$(window).height()));
   $(this).css("left",Math.floor(Math.random()*$(window).width()));
   $(this).css("font-size",Math.floor(Math.random()*$(window).width()));
   myCounter++;
   visibility++;
   
});