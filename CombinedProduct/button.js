window.addEventListener("DOMContentLoaded", studentLoginButtonPress); //loads the create button
window.addEventListener("DOMContentLoaded", instructorLoginButtonPress); //loads the create button

function studentLoginButtonPress() {
  //adds a create a course button event listener
  let createbutton = document.querySelector("#studentloginbtn");
  createbutton.addEventListener("click", function () {
    window.open(
      "https://venus.cs.qc.cuny.edu/~ngja7482/cs355/Term/Student%20Homepage.html",
      "_self"
    );
  });
}
function instructorLoginButtonPress() {
  //adds a create a course button event listener
  let createbutton = document.querySelector("#studentloginbtn");
  createbutton.addEventListener("click", function () {
    window.open(
      "https://venus.cs.qc.cuny.edu/~ngja7482/cs355/Term/Instructor/Instructor%20Home%20Page/index.html",
      "_self"
    );
  });
}
