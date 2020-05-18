function myFunction() {
    var txt;
    var r = confirm("If unicorns exist, click 'OK'.\nIf unicorns don't exist, click 'Cancel.' ")
    if (r == true) {
      txt = "Sorry, unicorns don't exist!";
    } else {
      txt = "You pressed Cancel! You are correct! Unicorns don't exist.";
    }
    document.getElementById("unicornButton").innerHTML = txt;
}


/*function myFunction() {
    var txt;
    var r = confirm("Press a button!");
    if (r == true) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("unicornButton").innerHTML = txt;
  } */