

var title = document.getElementById("title");
var img = document.getElementById("img");
title.addEventListener("mouseover", function(){
    title.style.color ="red";
    
})

title.addEventListener("mouseout", function(){
    title.style.color ="white"
})

img.addEventListener("mouseover",function(){
    img.style.transition = "1s";
    img.style.transform = "scale(2)rotateZ(32.5deg)";
})

img.addEventListener("mouseout",function(){
    img.style.transform = "scale(1.0)";
})
