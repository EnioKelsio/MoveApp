
document.getElementById('booking').addEventListener('submit', function(event) {
  event.preventDefault();

  var pickup = document.getElementById('pickup').value;
  var destination = document.getElementById('destination').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  showConfirmation(pickup, destination, date, time);
});

function showConfirmation(pickup, destination, date, time) {
  var confirmationMessage = "Booking Confirmation:\n\n" +
                            "Pickup: " + pickup + "\n" +
                            "Destination: " + destination + "\n" +
                            "Date: " + date + "\n" +
                            "Time: " + time;

  alert(confirmationMessage);
}
