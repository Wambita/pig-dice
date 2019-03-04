$(document).ready(function () {
  $("#mySidenav").click(function () {
    $("#mySdenav").hide();
    $(".pig").fadeIn();
    // $("#rules").slideDown(500);
    // $("#rules").show();
  })
})
var scores, currentScore, currentPlayer;
var player = [];
var currentSlide = 0
var rollBtn = $("#roll");
var holdBtn = $("#hold");
var newGame = $("#newGame");

function init() {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;

  rollBtn.removeAttr("disabled");
  holdBtn.removeAttr("disabled");

  $("#score-1").text(0);
  $("#score-2").text(0)
  $("#total-1").text(0);
  $("#total-2").text(0);
}
var holdRollsArray = [];
var score = 0;
function roll() {
  for (var i = 0; i =0; i ++) {
    var die = Math.floor(Math.random() * 6) + 1;
    $("#die").text(die)
    holdRollsArray.push(die);
      score1 = score += die;
      $("#score-1").text(score1)
      if (die === 1) {
      
      }
      $("#")
      $("#total-1").text(core)

  }
}
roll();
function hold(){

}


















