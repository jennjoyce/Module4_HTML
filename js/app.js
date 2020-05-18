'use strict';
console.log('This file is connected and ready to run.');


/** This is from Class 6 Start, wrap up of 101 js. 
new is a keyword object that has properties, the date.
var today = new Date();
var is a keyword that makes
the word today a variable. 
allow to take the today variable and output to page. 
Document is an object the .write() is a method. 
document.write(today);
*/



var nickName = prompt('Howdy! Please enter your favorite nickname.');
alert('Greetings, ' + nickName + ' click "ok" to participate in a color quiz.');

var favColor = prompt('What one of these is your favorite color? Red, Blue, Green, or Pink');

//variable declaration for the greeting.
var greeting;

if(favColor = Red || red) {
    greeting = 'Me too! ' + nickName;
} else if (favColor = Blue || blue) {
   greeting ='I do love the color of a blue sky, ' + nickName;
} else if (favColor = Green || green) {
   greeting = 'Green is a great color, ' + nickName;
} else if (favColor = Pink || pink) {
   greeting = 'You have good taste, ' + nickName;
} else if (favColor = Brown || brown) {
    greeting = 'Brown is a sad choice, ' + nickName;
} else {
    'Try again!';
}
document.write('<h1 style="color:yellow">' + greeting + '</h1>');

