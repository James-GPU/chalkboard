window.addEventListener("DOMContentLoaded", addInstructorPress); //loads the remove button
window.addEventListener("DOMContentLoaded", removeInstructorPress); //loads the leave button
window.addEventListener("DOMContentLoaded", myAccountButtonPress); //loads the myAccount button
function addInstructorPress() {
  //adds a create a course button event listener
  let createbutton = document.querySelector("#addinstructor");
  createbutton.addEventListener("click", function () {
    alert("Hello world");
  });
}

function removeInstructorPress() {
  //adds a create a course button event listener
  let createbutton = document.querySelector("#removeinstructor");
  createbutton.addEventListener("click", function () {
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
