$(document).ready(function () {
  $("#mySidenav").click(function () {
    $("#mySdenav").hide();
    $(".pig").fadeIn();
    // $("#rules").slideDown(500);
    // $("#rules").show();
  })
})


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
var holdRollsArray = [0];
var score = 0;
var total= 0
function roll() {
    var die = Math.floor(Math.random() * 6)+1;
    $("#die").text(die)
    holdRollsArray.unshift(die);
    score1=holdRollsArray[0] + die;
    $("#score-1").text(score1)
      
      var check=holdRollsArray.includes(1);

      if (check === true) {
        alert("Pass Dice ");
        score2 = holdRollsArray[0] ;
        score1=holdRollsArray[0] =+ die;
        $("#roll1").prop('disabled',true);
      }
      $("#total-1").text(score2)

}
function hold(){
  score1 = score += holdRollsArray[0];
      $("#score-1").text(score1 );
  holdRollsArray.length=0;
}


















