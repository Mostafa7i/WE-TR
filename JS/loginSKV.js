window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
let yourName = document.querySelector("#nameId")

let loginSubmit = document.querySelector("#sign-in");


// /////////////
let userName = document.querySelector('#userName')
let password = document.querySelector('#passward')

let getUsername = localStorage.getItem("userName")
let getPassword = localStorage.getItem("password")






let userinfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

  if(localStorage.getItem("username")){
    userData.style.color ="yollow"
    userData.style.fontWeight = "900"
    userData.innerHTML = localStorage.getItem("username")
    userData.style.textTransform = "capitalize"
  }


loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (userName.value === "" ) {

    Swal.fire({
      title: "Warning!",
      text: "Please Fill Data",
      icon: "warning",
    });
  } else {
    if (userName.value.trim() === "User24") {
      localStorage.setItem("SKV" , "Online")
      setTimeout(() => {
        window.location = "SKV.html";
      }, 1500);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "تم الدخول بنجاح",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "عفواً اسم المستخدم غير صحيح او قد يكون غير مصرح لك الوصول لهذا الموقع",
      });
    }
  }
});

function togglePasswordVisibility() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

