var randomNumber = Math.floor(Math.random() * 6 ) + 1;

var guess = prompt('Welcome to the number guessing game! Write a number between 1-6 below to win! or loss :(');

if (parseInt(guess) === randomNumber ) {

  document.write('<p>Congrats You Won!!!!!</p>');
  
}  else {

  document.write('<p>Sorry. You lost, better luck next time. The real number was ' + randomNumber + '</p>');

}