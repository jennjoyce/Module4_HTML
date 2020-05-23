

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
      item = '<img src="images/b&w.0031.jpg">';
    } else if (order === 'color') {
      item = '<img src="images/delaney.2.jpg">';
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
  
  var orderBtn = document.getElementById('orderPhotos');
  var orderPlaceholder = document.getElementById('order');
  
  orderBtn.addEventListener('click', function() {
    orderPlaceholder.innerHTML = showOrder();
  });
  
  
  