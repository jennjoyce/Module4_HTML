
'use strict';
console.log('This file is connected and ready to run.');

var showOrder = function() {
  var item = getPrints();
  var total = howMany();
  var result = '';

  for(var i = 1; i < total+1; i++) {
    result = result + '<p>Print #' + i + ' ' + item + '</p>';
  }

  return result;
};

var getPrints = function() {
  var order = prompt('Would you like to order b&w or color prints?');
  var item;

  while (order !== 'b&w' && order !== 'color') {
    order = prompt('Please enter "b&w" or "color":');
  }

  if (order === 'b&w') {
    item = '<img src="images/coffeeshop 2 WEB SIZE Delaney Schefers-0031.jpg">';
  } else if (order === 'color') {
    item = '<img src="images/chloe.jpg">';
  }

  return item;
};

var howMany = function() {
  var count = prompt('How many do you want to order?');
  
  while( count === '' || isNaN(count) ) {
    count = prompt('Please enter a number. How many do you want?');
  }

  return Number(count);
};

var order = document.getElementById('orderPhotos');
order.innerHTML = showOrder();

/*
'use strict';
console.log('This file is connected and ready to run.');

function popUP(){
    var nickName = prompt('Howdy! Please enter your favorite nickname.');
    alert('Greetings, ' + nickName + ' click "ok" to participate in a color quiz.');
    var favColor = prompt('What one of these is your favorite color? Red, Blue, Green, Pink, or Brown');

    var greeting;

    while (favColor !== 'Red' && favColor !== 'red') {
      favColor = promt('Please enter color... ');
    }

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

var colorQuizBtn = document.getElementById('orderPhotos');
colorQuizBtn.addEventListener('click', popUP); 
