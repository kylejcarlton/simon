$(document).ready(function(){

  var isTouchDevice = 'ontouchstart' in document.documentElement, gameOn = true, session = true, huTurn = true, strict = false, game = [], buttons = [{"id": "green","color0": "2DA850","color1": "2dda5e","sound": "greenSound"}, {"id": "red","color0": "960d16","color1": "f02936","sound": "redSound"}, {"id": "#blue","color0": "#497ecc","color1": "#3d8bfe","sound": "document.getElementById('blueSound')"}, {"id": "#yellow","color0": "#c7a618","color1": "#f3cf30","sound": "document.getElementById('yellowSound')"}];

  if(isTouchDevice){
    $("#green").on('touchstart', function(){buttonPress(0, 1);})
    .on('touchend', function(){buttonPress(0, 0);});
    $("#red").on('touchstart', function(){buttonPress(1, 1);})
    .on('touchend', function(){buttonPress(1, 0);});
  }
  else{
    $("#green").mousedown(function(){buttonPress(0, 1);})
    .mouseup(function(){buttonPress(0, 0);});
    $("#red").mousedown(function(){buttonPress(1, 1);})
    .mouseup(function(){buttonPress(1, 0);});
  }

  function buttonPress(which, state){
    if(gameOn && session && huTurn == true){
      colorState = "color"+state;
      console.log(buttons[which].sound);
      $("#" + buttons[which].id).css("background-color", "#"+buttons[which][colorState]);
      if(state == 1){
        document.getElementById(buttons[which].sound).play();
      }
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
    session = true;
  });

}); //END DOC READY