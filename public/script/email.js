//references https://github.com/Benrobo/Send-Mail-Using-Email.js/blob/main/index.html
(function () {
    emailjs.init("user_jNC9dn7VECutMOX0sOymM");
   })();
   function validate() {
    let email = document.querySelector(".email");
    let btn = document.querySelector(".submit");
     let name = document.querySelector(".username");
    btn.addEventListener("click", (e) => {
     e.preventDefault();
     if (email.value == "") {
      emptyerror();
     } else {
      sendmail(email.value, name.value);
      success();
     }
    });
   }
   validate();
    function sendmail(email,name) {
    emailjs.send("service_lixycba", "template_fy4yiqq",{
     to_name: name,
     from_name: "Chalkboard",
     //message: msg,
      email:email,
    });
   }
   function emptyerror() {
    Swal.fire({
     icon: "error",
     title: "Oops...",
     text: "Fields cannot be empty!",
    });
   }
   function error() {
    Swal.fire({
     icon: "error",
     title: "Oops...",
     text: "Something went wrong!",
    });
   }
   function success() {
    Swal.fire({
     icon: "success",
     title: "Success...",
     text: "Successfully sent message",
    });
   }