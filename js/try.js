$("#playerName").submit(function(e) {
    player[0] = $("#playerName0").val();
    player[1] = $("#playerName1").val();
    $("#player0").text(player[0].toUpperCase());
    $("#player1").text(player[1].toUpperCase());

    if ($("#playerName0").val() === "" || $("#playerName1").val() === "") {
      alert("Please fill in your names to continue!");
    } else {
      $("#playerName").hide();
      $("#game").addClass("slide-active");
    }
    e.preventDefault();// B I logic
    //var total,current,gamer;
    //var player=[]
    //var 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(document).ready(function () {
    
        $("#game").click(function() {
            var player1 = $("#player-one").val();
            var player2 = $("#player-two").val();
            $("#p-1").querySelector(player1);
            $("#p-2").querySelector(player2);
    
        });
        $("#game").submit(function(e) {
          player1 = $("#player-one").val();
        player2 = $("#player-two").val();
        $("#p-1").text(player1.toUpperCase());
        $("#p-2").text(player2.toUpperCase());
        
            if ($("#player-one").val() === "" || $("#player-two").val() === "") {
              alert("Please fill in your names to continue!");
            } else {
              $("#game").hide();
              $("#game").addClass("slide-active");
            }
            e.preventDefault();
        });
    });
    function openNav() {
       document.getElementById("mySidenav").style.width = "250px";
            } 
    function closeNav() {
       document.getElementById("mySidenav").style.width = "0";
       }
    
    
    
    
    
    
    
    
    
    
            // var total, score, gamer;
    //var player= [];
    //var scores= 0;
    //var roll= $("#roll-1")
    //var hold= $("#hold-1")
    //var newGame= $("#new")
    //var next= $("#game")
    
    //function init(){
       // total= [0,0];
        //score = 0;
        //gamer = 0;
    //roll.removeAttr()
    
     
     
     
     
     
     
     
     
     
    