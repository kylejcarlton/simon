  //https://s3.amazonaws.com/freecodecamp/simonSound1.mp3
  //https://s3.amazonaws.com/freecodecamp/simonSound2.mp3
  //https://s3.amazonaws.com/freecodecamp/simonSound3.mp3
  //https://s3.amazonaws.com/freecodecamp/simonSound4.mp3

$(document).ready(function(){

  var gameOn = false, strict = false;

  $(".slider").click(function(){
    if(gameOn == false){
      gameOn = true;
      $("#level").html("--");
    }
    else{
      gameOn = false;
      $("#level").html("");
    }
  });

  $("#strict").click(function(){
    if(strict == false){
      strict = true;
      $("#strictled").css("background-color", "red"); 
    }
    else{
      strict = false;
      $("#strictled").css("background-color", "#8B0000");
    }

  });



}); //END DOC READY