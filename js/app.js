
'use strict';
console.log('This file is connected and ready to run.');

function popUP(){
    var nickName = prompt('Howdy! Please enter your favorite nickname.');
    alert('Greetings, ' + nickName + ' click "ok" to participate in a color quiz.');
    var favColor = prompt('What one of these is your favorite color? Red, Blue, Green, Pink, or Brown');

    var greeting;

    if (favColor == 'Red' || favColor == 'red') {
      greeting = 'Red is my favorite color too, ' + nickName;
    }  else if (favColor == 'Blue' || favColor == 'blue') {
     greeting ='I do love the color of a blue sky, ' + nickName;
    } else if (favColor == 'Green' || favColor == 'green') {
      greeting = 'Green is a great color, ' + nickName;
    } else if (favColor == 'Pink' || favColor == 'pink') {
      greeting = 'You have good taste, ' + nickName;
    } else if (favColor == 'Brown' || favColor == 'brown') {
      greeting = 'Brown is a sad choice, ' + nickName;
    } else {
      greeting = 'Try again!';
    }
    document.write('<h1 style="color:red">' + greeting + '</h1>')
}
var colorQuizBtn = document.getElementById('colorQuiz');
colorQuizBtn.addEventListener('click', popUP); 
//popUP();







/*'use strict';
console.log('This file is connected and ready to run.');


function popUP(){
    var nickName = prompt('Howdy! Please enter your favorite nickname.');
    alert('Greetings, ' + nickName + ' click "ok" to participate in a color quiz.');
    var favColor = prompt('What one of these is your favorite color? Red, Blue, Green, Pink, or Brown');
    
    var greeting;

    if (favColor == 'Red' || favColor == 'red') {
     greeting = 'Red is my favorite color too, ' + nickName;
    }  else if (favColor == 'Blue' || favColor == 'blue') {
     greeting ='I do love the color of a blue sky, ' + nickName;
    } else if (favColor == 'Green' || favColor == 'green') {
    greeting = 'Green is a great color, ' + nickName;
    } else if (favColor == 'Pink' || favColor == 'pink') {
    greeting = 'You have good taste, ' + nickName;
    } else if (favColor == 'Brown' || favColor == 'brown') {
    greeting = 'Brown is a sad choice, ' + nickName;
    } else {
    greeting = 'Try again!';
    }

function popUP()
document.write('<h1 style="color:red">' + greeting + '</h1>')

/*------------------------

function createGreeting() {
    var hourNow = prompt('What\'s the hour?');
    var greeting;
    
    if (hourNow > 18) {
      greeting = 'Good evening!';
    } else if (hourNow > 12) {
      greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
      greeting = 'Good morning!';
    } else {
      greeting = 'Welcome!';
    }
    
    return '<h3>'+ greeting + '</h3>';
  } */