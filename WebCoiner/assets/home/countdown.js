// Set the date we're counting down to
var countDownDate = new Date("Sep 30, 2021 00:00:00").getTime();

    // Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
    if (days < 10)
        document.getElementById("day").innerHTML = "0" + days;
    else
        document.getElementById("day").innerHTML = days;
    if (hours < 10)
        document.getElementById("hour").innerHTML = "0" + hours;
    else
        document.getElementById("hour").innerHTML = hours;
    if (minutes < 10)
        document.getElementById("minute").innerHTML = "0" + minutes;
    else
        document.getElementById("minute").innerHTML = minutes;
    if (seconds < 10)
        document.getElementById("second").innerHTML = "0" + seconds;
    else
        document.getElementById("second").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
        clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);