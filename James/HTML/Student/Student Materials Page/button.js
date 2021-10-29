window.addEventListener("DOMContentLoaded", myAccountButtonPress); //loads the myAccount button
function myAccountButtonPress() {
  //adds a create a course button event listener
  let createbutton = document.querySelector("#myAccount");
  createbutton.addEventListener("click", function () {
    alert("Hello world");
  });
}
