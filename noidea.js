.dot {
width: 1--px;
height: 100px
background-color: red;
border-radius: 100%
display: inlin

$("body").css("Background-color","blue");

for (var i=0; i < 1000; i++) {
    $("body").append("<div class = ;dot'></div>);
}

var visibility = 0;
$(".dot").each(function() {
    console.log(visibility);
    
    $(this).css("opacity", visibility/100);
    visibility++;
});
