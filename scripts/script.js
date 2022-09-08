$(document).ready(function() {
  
  //click on an image, get a message
  
  $("#dogeOne").click(function (){
    
    $("#outputDiv").hide();
    
    console.log("user clicked dogeOne");
    $("#outputDiv").toggle();
    $("#outputMsg").text("You Lose, you Stupid Loser");
  });
  
  $("#dogeTwo").click(function (){
    
    $("#outputDiv").hide();
    
    console.log("user clicked dogeTwo");
    $("#outputDiv").toggle();
    $("#outputMsg").text("you has WOW");
  });
});