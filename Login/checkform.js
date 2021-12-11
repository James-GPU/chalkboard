function checkForm() {
    // TODO: Perform input validation 
    const userEmail = document.getElementById("user");
    const error = document.getElementById("formErrors");
    //Start off with no errors. All the if statements below are to check errors. So if one of them has an error, errorFound will be set to true
    let hasError = false;
    //Ensure that an email address was provided and that the email address matches the regular expression:
    if (!userEmail.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
        hasError = true;
        userEmail.style = "border: 2px solid red;";
        //error.style = "display: block";
        const userEmailError = document.createElement("li");
        //Otherwise, display "Invalid or missing email address."
        userEmailError.textContent = "Invalid or missing email address.";
        error.appendChild(userEmailError);
    }

 document.getElementById("studentloginbtn").addEventListener("click", function (event) {
    checkForm();
    // Prevent default form action. DO NOT REMOVE THIS LINE
    event.preventDefault();
});
