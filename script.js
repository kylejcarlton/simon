$(document).ready(function(){

  var isTouchDevice = 'ontouchstart' in document.documentElement, gameOn = false, strict = false, session = false, huTurn = true, game = [], buttons = [{"id": "#green","color0": "#2DA850","color1": "#2dda5e","sound": "document.getElementById('greenSound')"}, {"id": "#red","color0": "#960d16","color1": "#f02936","sound": "document.getElementById('redSound')"}, {"id": "#blue","color0": "#497ecc","color1": "#3d8bfe","sound": "document.getElementById('blueSound')"}, {"id": "#yellow","color0": "#c7a618","color1": "#f3cf30","sound": "document.getElementById('yellowSound')"}];

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

  function buttonPress(which, state){
    if(gameOn && session && huTurn == true){
      console.log("which: "+which);
      console.log("state: "+state);
    }
  }
 
  if(isTouchDevice){
    $("#green").on('touchstart', function(){buttonPress(0, 0);})
    .on('touchend', function(){buttonPress(0, 1);});
  }
  else{
    $("#green").mousedown(function(){buttonPress(0, 0);})
    .mouseup(function(){buttonPress(0, 1);});
  }

  $("#red")
  .mousedown(function(){
    $("#red").css("background-color", "#f02936");
    buttonSounds[1].play();
  })
  .mouseup(function(){
    $("#red").css("background-color", "#960d16");
  });

  $("#blue")
  .mousedown(function(){
    $("#blue").css("background-color", "#3d8bfe");
    buttonSounds[2].play();
  })
  .mouseup(function(){
    $("#blue").css("background-color", "#497ecc");
  });

  $("#yellow")
  .mousedown(function(){
    $("#yellow").css("background-color", "#f3cf30");
    buttonSounds[3].play();
  })
  .mouseup(function(){
    $("#yellow").css("background-color", "#c7a618");
  });



}); //END DOC READY