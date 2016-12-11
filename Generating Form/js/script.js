$("body").css("background-color","blue");

for (var i=0; i < 100; i++) {
    $("body").append("<div class='dot'></div>");
}

var visibility = 0;
var myCounter = 1;

var cats = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg"];

$("body").append("<img src='" + cats[Math.floor(Math.random()*3)] + "'>");

$(".dot").each(function() {
   $(this).css("opacity", visibility/100);
   $(this).html(myCounter);
   $(this).css("height",myCounter+100);
   $(this).css("width",myCounter+100);
  $(this).css("top",Math.floor(Math.random()*$(window).height()));
  $(this).css("left",Math.floor(Math.random()*$(window).width()));
  $(this).css("font-size",Math.floor(Math.random()*$(window).width()));
   myCounter++;
   visibility++;
});