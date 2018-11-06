"use strict";// Create Cursor Parallax
(function(){try{var a=0,b=0,c=.02,d=0,f=0;// Capture Mouse Input
// Recursive Parallax Call
$(window).on("mousemove click",function(a){var b=Math.max,c=Math.min,e=b(-100,c(100,$(window).width()/2-a.clientX)),g=b(-100,c(100,$(window).height()/2-a.clientY));f=20*e/100,d=10*g/100}),function e(){a+=(f-a)*c,b+=(d-b)*c,$(".background_active").css({transform:"translate(".concat(a,"px, ").concat(b,"px) scale(1.1)")}),window.requestAnimationFrame(e)}()}catch(a){console.log("Parallax Is Disabled")}})();