window.addEventListener("DOMContentLoaded", editCoursePress); //loads the remove button
window.addEventListener("DOMContentLoaded", myAccountButtonPress); //loads the myAccount button

function editCoursePress() {
  let myAccountbutton = document.querySelector("#editbtn");
  myAccountbutton.addEventListener("click", function () {
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
