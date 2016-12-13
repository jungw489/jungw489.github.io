$("body").css("background-color","white");

for (var i=0; i < 50; i++) {
    $("body").append("<div class='dot'></div>");
}

var visibility = 0;
var myCounter = 1;

var variety = ["chocolate.png", "gum.png", "lollipop.png", "skittles.jpg"];

$("body").append("<img src='" + variety[Math.floor(Math.random()*4)] + "'>");
   $(this).css("height",myCounter+100);
   $(this).css("width",myCounter+100);
   $(this).css("top",Math.floor(Math.random()*$(window).height()-100));
   $(this).css("left",Math.floor(Math.random()*$(window).width()-100));
   $(this).css("font-size",Math.floor(Math.random()*50));
        
$(".dot").each(function() {
   $(this).css("opacity", visibility/30);
   $(this).html(myCounter);
   $(this).css("height",myCounter+100);
   $(this).css("width",myCounter+100);
   $(this).css("top",Math.floor(Math.random()*$(window).height()-300));
   $(this).css("left",Math.floor(Math.random()*$(window).width()-200));
   $(this).css("font-size",Math.floor(Math.random()*100));
   myCounter++;
   visibility++;
   
});