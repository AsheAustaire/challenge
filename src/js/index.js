(function(){

  // RESOURCES
  const stageArr = [];
  const textArr = [];
  
  // NODES
  const arrowPrev = $("#arrow_prev");
  const arrowNext = $("#arrow_next");
  let currentStage = 0;
  
  // SETUP PAGE
  
  stageArr.push($(".background_mountain"), $(".background_meadow"), $(".background_desert"), $(".background_ocean"), $(".background_snow"));
  textArr.push($(".text_mountain"), $(".text_meadow"), $(".text_desert"), $(".text_ocean"), $(".text_snow"));
  
  // EVENTS
  arrowPrev.click(function () {
    prevStage();
  });
  arrowNext.click(function () {
    nextStage();
  });
  
  // Throttling Function To 1.5s Intervals
  $(document).bind("mousewheel", $.throttle(400, function (e) {
    try {
      
      if (e.originalEvent.wheelDelta < -3) {
        nextStage();
      } else if (e.originalEvent.wheelDelta > 3) {
        prevStage();
      }
      
    } catch (error) {
      "There was an error retrieving the article";
    }
  }));
  
  // FUNCTIONS
  function nextStage() {
    if (currentStage === 4) { return; }
    arrowNext.removeClass("spinArrow");
    currentStage = currentStage + 1;
    stageArr[currentStage - 1].css("top", "-26%");
    stageArr[currentStage - 1].removeClass("background_active").addClass("background_last");
    textArr[currentStage - 1].addClass("text_transparent");
    setTimeout(() => {
      arrowNext.addClass("spinArrow");
    }, 10);
    textArr[currentStage].removeClass("text_transparent");
    stageArr[currentStage].addClass("background_active");
    stageArr[currentStage].css("top", "0");
  }
  
  function prevStage() {
    if (currentStage === 0) { return; }
    arrowPrev.removeClass("spinArrow");
    currentStage = currentStage - 1;
    stageArr[currentStage + 1].css("top", "106%");
    textArr[currentStage + 1].addClass("text_transparent");
    setTimeout(() => {
      arrowPrev.addClass("spinArrow");
    }, 10);
    stageArr[currentStage + 1].removeClass("background_active");
    textArr[currentStage].removeClass("text_transparent");
    stageArr[currentStage].css("top", "0");
    stageArr[currentStage].addClass("background_active");
  }

}())