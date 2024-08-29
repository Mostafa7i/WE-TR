let userinfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let Name = document.querySelector("#name")
let links = document.querySelector("#links")

let logoutBtn = document.querySelector("#logout")

if(localStorage.getItem("name")){
    userData.style.color ="yollow"
    userData.style.fontWeight = "900"
    userData.innerHTML = localStorage.getItem("name")
    userData.style.textTransform = "capitalize"
}
// ////////////////////////////////////////////////////////////////////////////////////////




// var num = 1149 

// var timers  = setInterval(function(){
//    var ss = window.d.innerHTML = num-- ;
//    localStorage.setItem('time' , ss );
//   if(localStorage.getItem("time")<0){

//     clearInterval(timers);
//   localStorage.clear()
//   window.location = "index.html"
//   }
// }, 1000)





// onload = function AllTime(){
//   this.alert('يتم التحديث 94% .. ')
//   this.localStorage.clear()
//   this.location = "index.html"

// }
// AllTime()

//  function run(){
//  setTimeout (function(){
//     location.reload()
//   } , 700000)
  
function run(){
  if(localStorage.getItem("name")){
     
  }else{
    window.location = "index.html"
  }
}
run()

// setTimeout (function(){
//   Swal.fire({
//     title: "المطور",
//     position: "top-center",
//     icon: "info",
//     text : "يرجي العلم انه بتاريخ 30-8-2024 سيتم ايقاف التحديثات والعمل بالموقع بشكل نهائي."
//   });
// } ,  2500)

/////////////////////////////////////////////////////////////////////////////////
// function log(){
//   if(localStorage.getItem("username") == ("Ahmed94") || 
//   localStorage.getItem("username") == ("MohamedSamy") ||
//    localStorage.getItem("username") == ("mahmoudAli22")||
//    localStorage.getItem("username") == ("Saleh.26") ||
//    localStorage.getItem("username") == ("osamaAhmed") ||
//    localStorage.getItem("username") == ("abdeLrhman") ||
//    localStorage.getItem("username") == ("totySalem") ||
//    localStorage.getItem("username") == ("nermeenN") ||
//    localStorage.getItem("username") == ("ZaheR") ||
//    localStorage.getItem("username") == ("IbrahemMohamed") ||
//    localStorage.getItem("username") == ("Omar") ||
//    localStorage.getItem("username") == ("Mostafa.Eid") ||
//    localStorage.getItem("username") == ("Shaher") ||
//    localStorage.getItem("username") == ("Mohamed.Emam") ||
//    localStorage.getItem("username") == ("Hassan") ||
//    localStorage.getItem("username") == ("Haidy.mahmoud")
  
//   ){
//     window.alert("انتهت صلاحية الوصول الي هذا الموقع")
//       window.location = "index.html"
//       localStorage.clear()

//   }
// }
// log()




logoutBtn.addEventListener("click" , logout)
function logout(){
  localStorage.clear()
  window.location = "index.html"
}
let dialogShow = document.getElementById('dialog-show')
function About(){
  dialogShow.showModal()
}
function closeAbout(){
  dialogShow.close()
}


function get(){
    window.location = "que.html"
}

function mobileMaker() {
  window.location = "mobileMaker.html"

}
////////////////

function srs() {
  window.location = "SR.html"
}
///////////////
function SKVopen() {
  window.location = "LoginSKV.html"

}



window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

let darkmode = localStorage.getItem('darkmode')
let themeSwitch = document.getElementById('theme-switch')
let Header = document.getElementById('header')
let footer = document.getElementById('footer')

const enableDarkmode = () =>{
  document.body.classList.add('darkmode')
  Header.classList.add('darkmode')
  footer.classList.add('darkmode')

  localStorage.setItem('darkmode' , "active")
}
const disableDarkmode = () =>{
  document.body.classList.remove('darkmode')
  Header.classList.remove('darkmode')
  footer.classList.remove('darkmode')
  localStorage.setItem('darkmode' , null)
}
if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener('click' , () =>{
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
})


