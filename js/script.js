// business logic 





















$(document).ready(function(){
$("#game").submit(function(event) {
    event.preventDefault();
    var player1 = $("#player-one").val();
  var player2 = $("#player-two").val();
  $("#p-1").text(player1.toUpperCase());
  $("#p-2").text(player2.toUpperCase());
  
      if ($("#player-one").val() === "" || $("#player-two").val() === "") {
        alert("Please fill in your names to continue!");
      } else {
        $("#show").hide();
        $("#show").show();
      }
  });
});
$(document).ready(function() {
    $("#mySidenav").click(function() {
    $("#mySidenav").hide();
    $("#rules").slideDown(500);
    $("#rules").show();
});
});