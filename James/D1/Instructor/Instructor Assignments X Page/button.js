window.addEventListener("DOMContentLoaded", saveDraftPress); //loads the remove button
window.addEventListener("DOMContentLoaded", submitButtonPress); //loads the leave button
window.addEventListener("DOMContentLoaded", myAccountButtonPress); //loads the myAccount button

function saveDraftPress() {
  //adds a create a course button event listener
  let createbutton = document.querySelector("#saveDraft");
  createbutton.addEventListener("click", function () {
    alert("Hello world");
  });
}
function submitButtonPress() {
  //adds a myAccount button event listener
  let myAccountbutton = document.querySelector("#submitbtn");
  myAccountbutton.addEventListener("click", function () {
    alert("Hello world");
  });
}
