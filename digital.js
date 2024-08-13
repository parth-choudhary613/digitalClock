function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (12:00 AM)

  var timeString = `${hours}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;

  document.getElementById('clock').innerText = timeString;

  setTimeout(updateClock, 1000); // Update every 1 second
}

function padZero(number) {
  return number < 10 ? '0' + number : number;
}

// Initial call to display the clock
updateClock();