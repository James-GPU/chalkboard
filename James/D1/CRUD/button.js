window.addEventListener("DOMContentLoaded", createButtonPress); //loads the create button
window.addEventListener("DOMContentLoaded", deleteButtonPress); //loads the delete button
window.addEventListener("DOMContentLoaded", addButtonPress); //loads the add button
window.addEventListener("DOMContentLoaded", removeButtonPress); //loads the remove button
window.addEventListener("DOMContentLoaded", leaveButtonPress); //loads the leave button
window.addEventListener("DOMContentLoaded", myAccountButtonPress); //loads the myAccount button

function createButtonPress() {
  //adds a create a course button event listener
  let createbutton = document.querySelector("#createButton");
  createbutton.addEventListener("click", function () {
    alert("Hello world");
  });
}
function deleteButtonPress() {
  //adds a delete a course button event listener
  let deletebutton = document.querySelector("#deleteButton");
  deletebutton.addEventListener("click", function () {
    alert("Hello world");
  });
}
function addButtonPress() {
  //adds a add Instructor button event listener
  let addbutton = document.querySelector("#addButton");
  addbutton.addEventListener("click", function () {
    alert("Hello world");
  });
}
function removeButtonPress() {
  //adds a remove instructor button event listener
  let removebutton = document.querySelector("#removeButton");
  removebutton.addEventListener("click", function () {
    alert("Hello world");
  });
}
function leaveButtonPress() {
  //adds a leave course button event listener
  let leavebutton = document.querySelector("#leaveButton");
  leavebutton.addEventListener("click", function () {
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
