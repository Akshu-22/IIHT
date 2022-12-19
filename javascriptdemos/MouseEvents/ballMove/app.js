

let ball = document.querySelector('.ball');

ball.onmousedown = function(event) {
    
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
  
    document.body.append(ball);
  
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }
  
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };

  //window object adds its own drag 
  ball.ondragstart = function() {
    return false;
  };