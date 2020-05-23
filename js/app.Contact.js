function unicornFunction() {
    var txt;
    var r = confirm("Email me at: fotojenninc@gmail.com")
    if (r == true) {
      txt = "Thanks for visiting my site!";
    } else {
      txt = "Thanks for visitig my site!";
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