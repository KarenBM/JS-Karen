document.addEventListener("DOMContentLoaded", function () {
  // Using Luxon library to get the current date and time
  const now = luxon.DateTime.local();

  // Format the date for display
  const formattedDate = now.toFormat("MMMM dd, yyyy HH:mm:ss");
  // Display the formatted date and time in the document
  const displayElement = document.createElement("p");
  displayElement.textContent = `Formatted date and time: ${formattedDate}`;
  document.body.appendChild(displayElement);
});
//Luxon library selected to be able to show the current date 