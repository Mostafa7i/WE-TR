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
logoutBtn.addEventListener("click" , logout)
function logout(){
  localStorage.clear()
  window.location = "index.html"
}
////////////////////////////////////////////////////////////
let darkmode = localStorage.getItem('darkmode')
let themeSwitch = document.getElementById('theme-switch')
let offcanvas = document.getElementById('offcanvas')
let offcanvasbody = document.getElementById('offcanvasbody')
let Header = document.getElementById('Header')
let footer = document.getElementById('footer')

const enableDarkmode = () =>{
  document.body.classList.add('darkmode')
  offcanvas.classList.add('darkmode')
  offcanvasbody.classList.add('darkmode')
  Header.classList.add('darkmode')
  footer.classList.add('darkmode')
  localStorage.setItem('darkmode' , "active")
}
const disableDarkmode = () =>{
  document.body.classList.remove('darkmode')
  offcanvas.classList.remove('darkmode')
  offcanvasbody.classList.remove('darkmode')
  Header.classList.remove('darkmode')
  footer.classList.remove('darkmode')
  localStorage.setItem('darkmode' , null)
}
if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener('click' , () =>{
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
})





/////////////////////////////////////////////////////////////////
let outageA7mal = document.getElementById('outageA7mal')
let outageNormaly = document.getElementById('outageNormaly')

let a7mal = document.getElementById('a7mal')

let Normaly = document.getElementById('Normaly')

let clOutage = document.getElementById('clOutage')

function OutageS(){
  if(outageA7mal.checked){
    a7mal.style.display = "block"
    Normaly.style.display = "none"
  }else if(outageNormaly.checked){
    Normaly.style.display = "block"
    a7mal.style.display = "none"

  }
}


let outageA7mal_b = document.getElementById('outageA7mal_b')
let outageNormaly_b = document.getElementById('outageNormaly_b')
let a7mal_b = document.getElementById('a7mal_b')
let Normaly_b = document.getElementById('Normaly_b')
function Outageb(){
  if(outageA7mal_b.checked){
    a7mal_b.style.display = "block"
    Normaly_b.style.display = "none"
  }else if(outageNormaly_b.checked){
    Normaly_b.style.display = "block"
    a7mal_b.style.display = "none"

  }
}







let codax = document.getElementById('codax')
let OutageBasic = document.getElementById('OutageBasic')
let contentNumb = document.getElementById('contentNumb')
let conentscript = document.getElementById('conentscript')
let conentscript2 = document.getElementById('conentscript2')

function numb (){
  switch(codax.value){
    case "050" : 
    contentNumb.innerHTML = "SLA 4 H " + "(الدقهليه)"
    OutageBasic.style.display = "block"
    conentscript.style.display = "block"
    break;
    case "045" : 
    contentNumb.innerHTML = "SLA 4 H "  + "(البحيره)"
    OutageBasic.style.display = "block"
    conentscript.style.display = "block"
    break;
    case "03" : 
    contentNumb.innerHTML = "SLA 4 H " + "(الاسكندرية)" 
    OutageBasic.style.display = "block"
    conentscript.style.display = "block"
    break;
    case "040" :
      contentNumb.innerHTML = "SLA 3 H " + "(الغربية)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"




      break;

    case "046" :
      contentNumb.innerHTML = "SLA 3 H " + "(مطروح)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "013" :
      contentNumb.innerHTML = "SLA 3 H " + "(القليوبية)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "062" :
      contentNumb.innerHTML = "SLA 3 H " + "(السويس)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "055" :
      contentNumb.innerHTML = "SLA 3 H " + "(الشرقية)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "057" :
      contentNumb.innerHTML = "SLA 3 H " + "(دمياط)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "065" :
      contentNumb.innerHTML = "SLA 3 H " + "(البحر الاحمر)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "047" :
      contentNumb.innerHTML = "SLA 3 H " + "(كفر الشيخ)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "088" :
      contentNumb.innerHTML = "SLA 3 H " + "(اسيوط)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "064" :
      contentNumb.innerHTML = "SLA 3 H " + "(الاسماعلية)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "092" :
      contentNumb.innerHTML = "SLA 3 H " + "(الوادي الجديد)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "096" :
      contentNumb.innerHTML = "SLA 3 H " + "(قنا)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "069" :
      contentNumb.innerHTML = "SLA 3 H " + "حنوب سيناء"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "093" :
      contentNumb.innerHTML = "SLA 3 H " +"(سوهاج)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "084" :
      contentNumb.innerHTML = "SLA 3 H " + "(الفيوم)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "082" :
      contentNumb.innerHTML = "SLA 3 H " + "بني سويف"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "066" :
      contentNumb.innerHTML = "SLA 3 H " + "(بورسعيد)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "086" :
      contentNumb.innerHTML = "SLA 3 H " + "(المنيا)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "097" :
      contentNumb.innerHTML = "SLA 3 H " + "(اسوان)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "068" :
      contentNumb.innerHTML = "SLA 3 H " + "شمال سيناء"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "048" :
      contentNumb.innerHTML = "SLA 3 H " + "(المنوفية)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "095" :
      contentNumb.innerHTML = "SLA 3 H " + "(الاقصر)"
      OutageBasic.style.display = "block"
      conentscript2.style.display = "block"


      break;
    case "02" :
      contentNumb.innerHTML = "SLA 3 H " + "(القاهره)"
      // OutageBasic.style.display = "block"
      // conentscript2.style.display = "block"


      break;
 
      default :
      contentNumb.innerHTML = ""
      conentscript.style.display = "none"
      conentscript2.style.display = "none"



  }
}


$(function (){
    'use strict'
    $('.texx').click(function(){
        var current_r = $(this).attr("data-click");
        $(".content .radio_content").hide();
              $("."+current_r).show();


    })
})

$(document).ready(function(){
    $(".content .radio_content").hide();
    $(".content .radio_content:first-child");

    $(".radio_wrap").click(function(){
      var current_raido = $(this).attr("data-radio");
      $(".content .radio_content").hide();
      $("."+current_raido).show();
    })
  });
    



        // script_0.style.display  = q_0.checked  ? "block" : "none"
        // script_1.style.display  = q_1.checked  ? "block" : "none"
        // script_2.style.display  = q_2.checked  ? "block" : "none"
        // script_3.style.display  = q_3.checked  ? "block" : "none"
        // script_4.style.display  = q_4.checked  ? "block" : "none"
        // script_5.style.display  = q_5.checked  ? "block" : "none"
        // script_6.style.display  = q_6.checked  ? "block" : "none"
        // script_7.style.display  = q_7.checked  ? "block" : "none"
        // script_8.style.display  = q_8.checked  ? "block" : "none"
        // script_9.style.display  = q_9.checked  ? "block" : "none"
        // script_10.style.display = q_10.checked ? "block" : "none"
        // script_11.style.display = q_11.checked ? "block" : "none"
        // script_12.style.display = q_12.checked ? "block" : "none"
        // script_13.style.display = q_13.checked ? "block" : "none"
        // script_14.style.display = q_14.checked ? "block" : "none"
        // script_15.style.display = q_15.checked ? "block" : "none"
        // script_16.style.display = q_16.checked ? "block" : "none"
        // script_17.style.display = q_17.checked ? "block" : "none"
        // script_18.style.display = q_18.checked ? "block" : "none"
        // script_19.style.display = q_19.checked ? "block" : "none"
        // script_20.style.display = q_20.checked ? "block" : "none"
        // script_21.style.display = q_21.checked ? "block" : "none"
        // script_22.style.display = q_22.checked ? "block" : "none"
        // script_23.style.display = q_23.checked ? "block" : "none"
        // script_24.style.display = q_24.checked ? "block" : "none"
        // script_25.style.display = q_25.checked ? "block" : "none"
        // script_26.style.display = q_26.checked ? "block" : "none"
        // script_27.style.display = q_27.checked ? "block" : "none"
        // script_28.style.display = q_28.checked ? "block" : "none"
        // script_29.style.display = q_2/.checked ? "block" : "none"
        // script_30.style.display = q_30.checked ? "block" : "none"
        // script_31.style.display = q_31.checked ? "block" : "none"
        // script_32.style.display = q_32.checked ? "block" : "none"
        // script_33.style.display = q_33.checked ? "block" : "none"
        // script_34.style.display = q_34.checked ? "block" : "none"
        // script_35.style.display = q_35.checked ? "block" : "none"
        // script_36.style.display = q_36.checked ? "block" : "none"
        // script_37.style.display = q_37.checked ? "block" : "none"
        // script_38.style.display = q_38.checked ? "block" : "none"
        // script_39.style.display = q_39.checked ? "block" : "none"
        // script_40.style.display = q_40.checked ? "block" : "none"
        // script_41.style.display = q_41.checked ? "block" : "none"
        // script_42.style.display = q_42.checked ? "block" : "none"

    
    
    function checkBox(divId) {
      var div = document.getElementById(divId);
      if (div.classList.contains('hidden')) {
          div.classList.remove('hidden');

      } else {
          div.classList.add('hidden');
      }
      efict()

  }
    function efict(){
      let textC = document.getElementById('textC')
      let ou = document.getElementById('ou')
      let outage = document.getElementById('outage')
      let ticket = document.getElementById('ticket')
      let tik = document.getElementById('tik')

      if(ticket.checked){
        textC.innerHTML = "شكوي"
        textC.style.color = "red"
        ou.style.display = "none"
        
      }else if(outage.checked){
         textC.textContent = "Outage"
         tik.style.display = "none"

      }else{
        textC.innerHTML = "...."  
        ou.style.display = "block"
        tik.style.display = "block"
      


      }
    }

    
    
    let AllBox = document.getElementById('AllBox')
    let resetAll = document.getElementById('resetAll').onclick = () =>{
      window.location.reload()

    }



    function select() {
      var opts = document.querySelector(".op")
        var optionL = document.getElementById("optionL");
        var box1 = document.getElementById("box-1");
        var box2 = document.getElementById("box-2");
        var box3 = document.getElementById("box-3");
        var box4 = document.getElementById("box-4");
        var box5 = document.getElementById("box-5");
        var box6 = document.getElementById("box-6");
        var box7 = document.getElementById("box-7");
        if (optionL.value == 1) {
          opts.style.display = "block";
          box1.style.display = "block";
          box2.style.display = "none";
          box3.style.display = "none";
          box4.style.display = "none";
          box5.style.display = "none";
          box6.style.display = "none";
          box7.style.display = "none";



        } else if(optionL.value == 2) {
          opts.style.display = "block";
          box2.style.display = "block";
          box1.style.display = "none";
          box3.style.display = "none";
          box4.style.display = "none";
          box5.style.display = "none";
          box6.style.display = "none";
          box7.style.display = "none";


        
        }else if(optionL.value == 3) {
          opts.style.display = "block";
            box3.style.display = "block";
            box1.style.display = "none";
            box2.style.display = "none";
            box4.style.display = "none";
            box5.style.display = "none";
            box6.style.display = "none";
            box7.style.display = "none";


      }else if(optionL.value == 4) {
        opts.style.display = "block";
        box4.style.display = "block";
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "none";
        box5.style.display = "none";
        box6.style.display = "none";
        box7.style.display = "none";


    }else if(optionL.value == 5) {
      opts.style.display = "block";
        box5.style.display = "block";
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";
        box6.style.display = "none";
        box7.style.display = "none";


    }else if(optionL.value == 6) {
      opts.style.display = "block";
        box6.style.display = "block";
        box5.style.display = "none";
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";
        box7.style.display = "none";
    }else if(optionL.value == 7) {
      opts.style.display = "block";
        box7.style.display = "block";
        box5.style.display = "none";
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";
        box6.style.display = "none";
    }
}
 function reset(){
    var optionL = document.getElementById("optionL");
    var opts = document.querySelector(".op")
       optionL.value = "0"
       opts.style.display = "none"

}


window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  
  let box_select = document.querySelectorAll(".op")
  let btn_x = document.getElementById('btn-cx')
  function xc(){

        box_select.style.display = "none"

    

  }


 

  function hideUnhide(id){
    const p1 = document.getElementById(id);
    if(p1.style.display === "none"){
      p1.style.display = "block"

      }else{
        p1.style.display = "none"

      }
          
        }

    function Tred(id){
      let reds = document.getElementById(id)

       reds.style.backgroundColor = "blue"

    }
     






  
  let checkgreen6 =document.getElementById("checkgreen6")
  let green6 = document.getElementById("green6")
  let checkgreen7 =document.getElementById("checkgreen7")
  let green7 = document.getElementById("green7")
  let checkgreen8 =document.getElementById("checkgreen8")
  let green8 = document.getElementById("green8")
  let checkgreen9 =document.getElementById("checkgreen9")
  let green9 = document.getElementById("green9")
  let checkgreen10 =document.getElementById("checkgreen10")
  let green10 = document.getElementById("green10")

  let showStep = document.getElementById("showStep")
  let showStep2 = document.getElementById("showStep2")
  let showStep3 = document.getElementById("showStep3")
 
  function action(){
        green6.style.backgroundColor = checkgreen6.checked ? "#0bcf5d" : "#f87676"
        green7.style.backgroundColor = checkgreen7.checked ? "#0bcf5d" : "#f87676"
        green8.style.backgroundColor = checkgreen8.checked ? "#0bcf5d" : "#f87676"
        green9.style.backgroundColor = checkgreen9.checked ? "#0bcf5d" : "#f87676"
        green10.style.backgroundColor = checkgreen10.checked ? "#0bcf5d" : "#f87676"

        if(checkgreen6.checked && checkgreen7.checked && checkgreen8.checked  && checkgreen9.checked && checkgreen10.checked){
        showStep2.style.display = "block"
    }else{
        showStep2.style.display = "none"
    }    
  }


let g3gb = document.getElementById('3gb')
let contGiga = document.getElementById('contGiga')
function rotateGB(){   
  var prossGB = document.getElementById('prossGB').value;
        
   window.resultGB.innerHTML = prossGB * Number(1024*1024*1024)
   window.resultGB.style.color = "green"
}

let circlred = document.getElementById('circlred')
let notfaction = document.getElementById('notfaction')
let BtnNotfaction = document.getElementById('BtnNotfaction')

function updeted1(){

  localStorage.getItem("notfaction")
  localStorage.setItem("circlred" , circlred)



    notfaction.style.display = "block"
}
BtnNotfaction.addEventListener("click" , function(){
  notfaction.style.display = "none"
  cer()


})

function cer(){
  // let circlred = document.getElementById("circlred")
  // circl.remove()
  localStorage.getItem("circlred" ,circlred.remove())

  

}
function updeted2()  {
    Swal.fire({
        title: "<li>Add SR</li> <li>Add TT</li> <li>Update content</li>",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}
function updeted3()  {
    Swal.fire({
        title: "اضافة كل حالات الفلو اب (لم يتم اضافة كل التفاصيل بعد)",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}
   
let botoom = document.querySelector('.btnUp') 
botoom.onclick = () => {
  window.scrollTo({
    top:0,
    right:0,
    behavior: "smooth"
  })
}
function scrollY(){
  var Height = document.body.scrollHeight;

    window.scroll( 0, Height);
  
}

let choose2 = document.getElementById('choose2')
let choose3 = document.getElementById('choose3')
function sh(){
  let con7 = document.querySelector('.con7')
  let con8 = document.querySelector('.con8')
  if(choose2.checked){

    con7.style.display = "block"
    con8.style.display = "none"


  }else if(choose3.checked){

    con8.style.display = "block"
    con7.style.display = "none"

  }
}
let choose4 = document.getElementById('choose4')
let choose5 = document.getElementById('choose5')
function sh2(){
  let con4 = document.querySelector('.con4')
  let con5 = document.querySelector('.con5')
  if(choose4.checked){
    con4.style.display = "block"
    con5.style.display = "none"

  }else if(choose5.checked){
    con5.style.display = "block"
    con4.style.display = "none"

  }
}


let MCU1 = document.getElementById('MCU1')
let MCU2 = document.getElementById('MCU2')
let MCUcolor1 = document.getElementById('MCUcolor1')
let MCUcolor2 = document.getElementById('MCUcolor2')
let MCU_Answer1 = document.getElementById('MCU_Answer1')
let MCU_Answer2 = document.getElementById('MCU_Answer2')
let AllMCU = document.querySelectorAll('.AllMCU')
let resetClear = document.getElementById("resetClear")

AllMCU.forEach(function (item){
  item.onclick = function (){
  MCU_Answer1.style.display = MCU1.checked  ? "block"  : "none"
  MCU_Answer2.style.display = MCU2.checked  ? "block" : "none"

  MCUcolor1.style.color = MCU1.checked  ? "#c02be2"  : "#fff"
  MCUcolor2.style.color = MCU2.checked  ? "#c02be2" : "#fff"

    resetClear.style.display = MCU1.checked || MCU2.checked ? "block" : "none"

  
  }
  
})


let FtthAll = document.querySelectorAll('.FtthAll label')
let notEligible = document.getElementById('notEligible')
let notEligibleBtn = document.getElementById('notEligibleBtn')
let EligiblebBtn = document.getElementById('EligiblebBtn')
let Eligible = document.getElementById('Eligible')
let colorbtn1 = document.getElementById('colorbtn1')
let colorbtn22 = document.getElementById('colorbtn22')


FtthAll.forEach(function (item){
  item.onclick = function (){
    notEligible.style.display = notEligibleBtn.checked  ? "block"  : "none"
    Eligible.style.display = EligiblebBtn.checked  ? "block" : "none"

    colorbtn1.style.color = notEligibleBtn.checked  ? "#c02be2"  : "#fff"
    colorbtn22.style.color = EligiblebBtn.checked  ? "#c02be2"  : "#fff"
  
  }
  
})


function resetF(){
  notEligible.style.display = "none"
  Eligible.style.display = "none"
  colorbtn1.style.color = "black"
  colorbtn22.style.color = "black"
}

let dialogShow = document.getElementById('dialog-show')
function About(){
  dialogShow.showModal()
}
function closeAbout(){
  dialogShow.close()
}







// let BTN_SR = document.getElementById('BTN_SR')
// function openBTN_SR(){
//   window.location = "SR.html"
// }
// BTN_SR.onclick = openBTN_SR()





