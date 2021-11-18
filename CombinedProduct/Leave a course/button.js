window.addEventListener("DOMContentLoaded", confirmPress); //loads the remove button
window.addEventListener("DOMContentLoaded", myAccountButtonPress); //loads the myAccount button
function confirmPress() {
  //adds a create a course button event listener
  let confirmbutton = document.querySelector("#confirmbtn");
  confirmbutton.addEventListener("click", function () {
    alert("Hello world");
  });
}

function myAccountButtonPress() {
  //adds a myAccount button event listener
  let myAccountbutton = document.querySelector("#myAccount");
  myAccountbutton.addEventListener("click", function () {
    alert("Hello world");
  });
}
