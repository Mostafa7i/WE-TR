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



// function run(){
//   if(localStorage.getItem("username")){
//       window.location = "index2.html";
//   }
// }
// run()



loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (userName.value === "" || password.value === "" ) {
    Swal.fire({
      title: "Warning!",
      text: "Please Fill Data",
      icon: "warning",
    });
  } else {
    if (userName.value.trim() === "Ahmed" && password.value === "00328" ||
    userName.value.trim() === "mahmoudAli22" && password.value === "0722" ||
    userName.value.trim() === "Admin" && password.value === "66123455" ||
    userName.value.trim() === "Haidy.mahmoud" && password.value === "00022" ||
    userName.value.trim() === "Mohamed.Gamal" && password.value === "9920" ||
    userName.value.trim() === "totySalem" && password.value === "8630" || 
    userName.value.trim() === "nermeenN" && password.value === "5801" ||
    userName.value.trim() === "Nada" && password.value === "558800" ||
    userName.value.trim() === "Heba" && password.value === "6660" ||
    userName.value.trim() === "Abdelrhman" && password.value === "4455" || 
    userName.value.trim() === "Mohammed.fahmy" && password.value === "71406" ||
    userName.value.trim() === "Mohamed.Emam" && password.value === "319056" || 
    userName.value.trim() === "Mohamed.ibs" && password.value === "40066" ||
    userName.value.trim() === "Omar" && password.value === "*%$" ||
    userName.value.trim() === "Mostafa.Eid" && password.value === "7396") {
      localStorage.setItem("code" , Math.floor(Math.random()*100))
      localStorage.setItem("username" , userName.value)
      setTimeout(() => {
        window.location = "HomePage.html";
      }, 1500);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "تم تسجيل دخولك بنجاح",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User Name or Password is wrong!",
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

