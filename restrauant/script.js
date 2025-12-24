function bookTable() {
  let name = document.getElementById("name").value;
  let people = document.getElementById("people").value;

  alert(
    "Thank you " + name + 
    "! Your table for " + people + 
    " people has been booked."
  );

  return false; // stop page refresh
}
