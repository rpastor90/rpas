var painted;
      var content;
      var winningCombinations;
      var turn = 0;
      var theCanvas;
      var c;
      var cxt;
      var squaresFilled = 0;
      var w;
      var y;

      //Instanciate Arrays
      window.onload=function(){
        
        painted = new Array();
        content = new Array();
        winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

        for(var l = 0; l <= 8; l++){
        painted[l] = false;
        content[l]='';
        }
      }

      //Game methods
      function canvasClicked(canvasNumber){
        theCanvas = "canvas"+canvasNumber;
        c = document.getElementById(theCanvas);
        cxt = c.getContext("2d");

        if(painted[canvasNumber-1] == false){
          if(turn%2==0){
            cxt.beginPath();
            cxt.moveTo(10,10);
            cxt.lineTo(90,90);
            cxt.moveTo(90,10);
            cxt.lineTo(10,90);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber-1] = 'Goku';
          }

          else{
            cxt.beginPath();
            cxt.arc(50,50,40,0,Math.PI*2,true);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber-1] = 'Frieza';
          }

          turn++;
          painted[canvasNumber-1] = true;
          squaresFilled++;
          checkForWinners(content[canvasNumber-1]);

          if(squaresFilled==9){
            alert("Draw");
            location.reload(true);
          }
        
        }
        else{
          alert("That Spot's Taken");
        }

      }

      function checkForWinners(symbol){
        
        for(var a = 0; a < winningCombinations.length; a++){
        if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){
          alert(symbol+ " WON!");
          playAgain();
        }
        }

      }

      function playAgain(){
        y=confirm("Another Round?");
        if(y==true){
          alert("Good Choice");
          location.reload(true);
        }
        else{
          alert("See You Soon!");
      }

      }