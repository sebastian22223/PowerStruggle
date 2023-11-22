var elDiceOne       = document.getElementById('dice1');
var elDiceTwo       = document.getElementById('dice2');
var elDiceThree       = document.getElementById('dice3');
var elDiceFour      = document.getElementById('dice4');
var elDiceFive      = document.getElementById('dice5');
var elDiceSix      = document.getElementById('dice6');




var elComeOut       = document.getElementById('roll');

elComeOut.onclick   = function () {rollDice();};

function rollDice() {

  var diceOne   = Math.floor((Math.random() * 6) + 1);
  var diceTwo   = Math.floor((Math.random() * 6) + 1);
  var diceThree   = Math.floor((Math.random() * 6) + 1);
  var diceFour   = Math.floor((Math.random() * 6) + 1);
  var diceFive   = Math.floor((Math.random() * 6) + 1);
  var diceSix   = Math.floor((Math.random() * 6) + 1);

 
  console.log(diceOne + ' ' + diceTwo);

  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove('show-' + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add('show-' + k);
    }
  } 

  for (var k = 1; k <= 6; k++) {
    elDiceThree.classList.remove('show-' + k);
    if (diceThree === k) {
      elDiceThree.classList.add('show-' + k);
    }
  } 

  for (var k = 1; k <= 6; k++) {
    elDiceFour.classList.remove('show-' + k);
    if (diceFour === k) {
      elDiceFour.classList.add('show-' + k);
    }
  } 

  for (var k = 1; k <= 6; k++) {
    elDiceFive.classList.remove('show-' + k);
    if (diceFive === k) {
      elDiceFive.classList.add('show-' + k);
    }
  } 

  for (var k = 1; k <= 6; k++) {
    elDiceSix.classList.remove('show-' + k);
    if (diceSix === k) {
      elDiceSix.classList.add('show-' + k);
    }
  } 




  setTimeout(rollDice(), 500);
}

function isChecked (){
    if(document.getElementById("check1").checked) {
        document.getElementById('dice1').style.display="none";
        document.getElementById('dice2').style.display="none";
    }else{
        document.getElementById('dice1').style.display="block";
        document.getElementById('dice2').style.display="block";
    }if(document.getElementById("check2").checked) {
        document.getElementById('dice3').style.display="none";
    }else{
        document.getElementById('dice3').style.display="block";
    }if(document.getElementById("check4").checked) {
        document.getElementById('dice5').style.display="none";
        document.getElementById('dice6').style.display="none";
    }else{
        document.getElementById('dice5').style.display="block";
        document.getElementById('dice6').style.display="block";
    }if(document.getElementById("check5").checked) {
        document.getElementById('dice4').style.display="none";
    }else{
        document.getElementById('dice4').style.display="block";
    }
}