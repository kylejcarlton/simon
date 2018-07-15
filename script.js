$(document).ready(function(){

  var isTouchDevice = 'ontouchstart' in document.documentElement, gameOn = false, strict = false, session = false, game = [], buttonSounds = [document.getElementById("greenSound"), document.getElementById("redSound"), document.getElementById("blueSound"),document.getElementById("yellowSound")];

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
    console.log(session);
  });
 
  if(isTouchDevice){
    $("#green").on('touchstart', function(){
      $("#green").css("background-color", "#2dda5e");
      buttonSounds[0].play();
    })
    .on('touchend', function(){
      $("#green").css("background-color", "#2DA850");
    });

  }
  else{
    $("#green").mousedown(function(){
      $("#green").css("background-color", "#2dda5e");
      buttonSounds[0].play();
    })
    .mouseup(function(){
      $("#green").css("background-color", "#2DA850");
    });
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