"use strict";(function(){// FUNCTIONS
function a(){4===g||(f.removeClass("spinArrow"),++g,c[g-1].css("top","-26%"),c[g-1].removeClass("background_active").addClass("background_last"),d[g-1].addClass("text_transparent"),setTimeout(function(){f.addClass("spinArrow")},10),d[g].removeClass("text_transparent"),c[g].addClass("background_active"),c[g].css("top","0"))}function b(){0===g||(e.removeClass("spinArrow"),--g,c[g+1].css("top","106%"),d[g+1].addClass("text_transparent"),setTimeout(function(){e.addClass("spinArrow")},10),c[g+1].removeClass("background_active"),d[g].removeClass("text_transparent"),c[g].css("top","0"),c[g].addClass("background_active"))}// RESOURCES
var c=[],d=[],e=$("#arrow_prev"),f=$("#arrow_next"),g=0;// SETUP PAGE
// EVENTS
// Throttling Function To 1.5s Intervals
c.push($(".background_mountain"),$(".background_meadow"),$(".background_desert"),$(".background_ocean"),$(".background_snow")),d.push($(".text_mountain"),$(".text_meadow"),$(".text_desert"),$(".text_ocean"),$(".text_snow")),e.click(function(){b()}),f.click(function(){a()}),$(document).bind("mousewheel",$.throttle(1500,function(c){try{-3>c.originalEvent.wheelDelta?a():3<c.originalEvent.wheelDelta&&b()}catch(a){}}))})();