// Create Cursor Parallax
(function(){
  
  try {

    let x = 0;
    let y = 0;
    let viscosity = .02;
    let dragY = 0;
    let dragX = 0;

    // Capture Mouse Input
    $(window).on('mousemove click', function (e) {
      let mouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
      let mouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
      dragX = (20 * mouseX) / 100;
      dragY = (10 * mouseY) / 100;
    });

    // Recursive Parallax Call
    (function parallax() {
      x = x + (dragX - x) * viscosity;
      y = y + (dragY - y) * viscosity;
      $(`.background_active`).css({
        'transform': `translate(${x}px, ${y}px) scale(1.1)`
      });
      window.requestAnimationFrame(parallax);
    }())

  } catch (error) {
    
    console.log("Parallax Is Disabled");
    
  }

    }())
