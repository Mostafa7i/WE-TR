
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



let userinfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

let logoutBtn = document.querySelector("#logout")


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
  
  if(localStorage.getItem("username")){
     
  }else{
    window.location = "HomePage.html"
  }
}
run()

// let Exit = setTimeout (function(){
//   location.reload()
//   localStorage.clear()
//   window.location = "index.html"
// } , 5000)


/////////////////////////////////////////////////////////////////////////////////
function log(){
  if(localStorage.getItem("username") == ("Ahmed94") || 
  localStorage.getItem("username") == ("MohamedSamy") ||
   localStorage.getItem("username") == ("mahmoudAli22")||
   localStorage.getItem("username") == ("Saleh.26") ||
   localStorage.getItem("username") == ("osamaAhmed") ||
   localStorage.getItem("username") == ("abdeLrhman") ||
   localStorage.getItem("username") == ("totySalem") ||
   localStorage.getItem("username") == ("nermeenN") ||
   localStorage.getItem("username") == ("ZaheR") ||
   localStorage.getItem("username") == ("IbrahemMohamed") ||
   localStorage.getItem("username") == ("Omar") ||
   localStorage.getItem("username") == ("Mostafa.Eid") ||
   localStorage.getItem("username") == ("Shaher") ||
   localStorage.getItem("username") == ("Mohamed.Emam") ||
   localStorage.getItem("username") == ("Hassan") ||
   localStorage.getItem("username") == ("Haidy.mahmoud")
  
  ){
    window.alert("انتهت صلاحية الوصول الي هذا الموقع")
      window.location = "index.html"
      localStorage.clear()

  }
}
log()



if(localStorage.getItem("username")){
    userData.style.color ="yollow"
    userData.style.fontWeight = "900"
    userData.innerHTML = localStorage.getItem("username")
    userData.style.textTransform = "capitalize"
}

logoutBtn.addEventListener("click" , logout)
function logout(){
  localStorage.clear()
  window.location = "index.html"
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




