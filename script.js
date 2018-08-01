$(document).ready(function(){

  var isTouchDevice = false, gameOn = false, session = false, huTurn = false, strict = false, sequence = [], attempt = [], buttons = [{"id": "green","color0": "2DA850","color1": "2dda5e","sound": "greenSound"}, {"id": "red","color0": "960d16","color1": "f02936","sound": "redSound"}, {"id": "blue","color0": "497ecc","color1": "3d8bfe","sound": "blueSound"}, {"id": "yellow","color0": "c7a618","color1": "f3cf30","sound": "yellowSound"}];

  window.addEventListener('touchstart', function(){
    isTouchDevice = true;
    $("#green").on('touchstart', function(){buttonPress(0, 1, 0);})
    .on('touchend', function(){buttonPress(0, 0, 1);});
    $("#red").on('touchstart', function(){buttonPress(1, 1, 0);})
    .on('touchend', function(){buttonPress(1, 0, 1);});
    $("#blue").on('touchstart', function(){buttonPress(2, 1, 0);})
    .on('touchend', function(){buttonPress(2, 0, 1);});
    $("#yellow").on('touchstart', function(){buttonPress(3, 1, 0);})
    .on('touchend', function(){buttonPress(3, 0, 1);});
  });

  window.addEventListener('click', function(){
    isTouchDevice = false;
    $("#green").mousedown(function(){buttonPress(0, 1, 0);})
    .mouseup(function(){buttonPress(0, 0, 1);});
    $("#red").mousedown(function(){buttonPress(1, 1, 0);})
    .mouseup(function(){buttonPress(1, 0, 1);});
    $("#blue").mousedown(function(){buttonPress(2, 1, 0);})
    .mouseup(function(){buttonPress(2, 0, 1);});
    $("#yellow").mousedown(function(){buttonPress(3, 1, 0);})
    .mouseup(function(){buttonPress(3, 0, 1);});
  });

  function gameTurn(){
    sequence.push(Math.floor(Math.random() * 4));
    for(i = 0; i < sequence.length; i++){
      buttonPress(sequence[i], 1, 1);
      delayButtonPress(i);
    }
    huTurn = true;
  }

  function delayButtonPress(i){
    setTimeout(function(){
      buttonPress(sequence[i], 0, 1);
    }, 500);
  }

  function buttonPress(which, state, source){
    if(gameOn && session == true){
      colorState = "color"+state;
      $("#" + buttons[which].id).css("background-color", "#"+buttons[which][colorState]);
      if(state == 1){
        document.getElementById(buttons[which].sound).play();
      }
    }
    //console.log("buttonPress source: "+source);
   
    if(source == 0 && attempt.length < sequence.length){
      attempt.push(which);
      console.log("attempt.length: "+attempt.length);
      console.log("attempt: "+attempt);
      console.log("sequence.length: "+sequence.length);
      console.log("sequence: "+sequence);
      
    }
  }

  $(".slider").click(function(){
    if(gameOn == false){
      gameOn = true;
      $("#level").html("--");
    }
    else{
      gameOn = false;
      $("#level").html("");
      session = false;
      sequence = [];
      attempt = [];
    }
  });

  $("#strict").click(function(){
    if(strict == false && gameOn == true){
      strict = true;
      $("#strictled").css("background-color", "red"); 
    }
    else{
      strict = false;
      $("#strictled").css("background-color", "#8B0000");
    }

  });

  $("#start").click(function(){
    if(gameOn == true && session == false){
      session = true;
      $("#level").html("01");
      gameTurn();
    }
    
  });

}); //END DOC READY