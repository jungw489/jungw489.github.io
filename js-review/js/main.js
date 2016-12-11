$("body").css("background-color","white");

var clicks = 0;

$("button").click(function(){
    clicks++; 
    $("body").css("background-color","yellow");
    console.log("hello world");
});

for (var i = 0; i < 50; i++) {
    counter ++;
    console.log(counter);
    $("body").append("<div class='dot'></div>")
}

var counter = 0;

$(".dot").each(function(){
    counter++;
    console.log("found a dot..");
    $(this).html(counter);
    
});

var images = ['img/bagel.jpg','img/bagel2.jpg'];

$(".dot").click(function(){
   $(this).toggleClass("whatever");
   var newImg = 
   $(this).css("background-image",)
});



