'use strict';
console.log('This file is connected and ready to run.');






var userName = prompt('Please enter your first name.');
alert('Hello, ' + userName + ' click OK to proceed.');

var seeMore = prompt('Would you like to see more pictures?');

//variable declaration for the greeting.
var greeting;

if(seeMore == 'Yes' || seeMore =='yes'){
    greeting = 'View more here at:    www.fotojenninc.com, ' + userName;
} else if (seeMore == 'No' || seeMore =='no'){
   greeting = 'Ok.Thanks for visiting, ' + userName;
} else {
    'Something went wrong!';
}



//depending on where our script tag is / is where the greeting will be render.
document.write('<h2 style="color:red">' + greeting + '</h2>');
