'use strict';
console.log('This file is connected and ready to run.');






var userName = prompt('Please enter your first name.');
alert('Hello, ' + userName + ' click OK to proceed.');

var hourNow = prompt('What time is it, friend? Use Military time.');

//variable declaration for the greeting.
var greeting;

if(hourNow >= 0 && hourNow < 7){
    greeting = 'Good Morning, ' + userName;
} else if (hourNow >= 7 && hourNow <= 12){
   greeting = 'Good mid day. ' + userName;
} else if (hourNow > 12 && hourNow < 18){
   greeting = 'Good afternoon ' + userName;
} else if (hourNow >= 18 && hourNow <= 24){
   greeting = 'Good Evening ' + userName;
} else {
    'Something went wrong!';
}



//depending on where our script tag is / is where the greeting will be render.
document.write('<h1 style="color:yellow">' + greeting + '</h1>');
