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




  let check = document.querySelector("#check1");
  let hide = document.querySelector("#hid");
  let check2 = document.querySelector("#check2");
  let check3 = document.querySelector("#check3");
  let check4 = document.querySelector("#check4");
  let check5 = document.querySelector("#check5");
  let check6 = document.querySelector("#check6");
  let check7 = document.querySelector("#check7");
  let check8 = document.querySelector("#check8");
  let check9 = document.querySelector("#check9");
  let check10 = document.querySelector("#check10");
  let hid2 =   document.querySelector("#hid2");
  let hid3 =   document.querySelector("#hid3");
  let hid4 = document.querySelector("#hid4");
  let hid5 = document.querySelector("#hid5");
  let hid6 = document.querySelector("#hid6");
  let hid7 = document.querySelector("#hid7");
  let hid9 = document.querySelector("#hid9");
  let hid10 = document.querySelector("#hid10");
function showandhid(){
    hide.style.display = check.checked  ? "block" : "none"
    hid2.style.display = check2.checked ? "block" : "none"
    hid3.style.display = check3.checked ? "block" : "none"
    hid4.style.display = check4.checked ? "block" : "none"
    hid5.style.display = check5.checked ? "block" : "none"
    hid6.style.display = check6.checked ? "block" : "none"
    hid7.style.display = check7.checked ? "block" : "none"
    hid8.style.display = check8.checked ? "block" : "none"
    hid9.style.display = check9.checked ? "block" : "none"
    hid10.style.display = check10.checked ? "block" : "none"
}


let q_00 = document.getElementById('q-00')
let script_00 = document.getElementById('script-00')
let q_0 = document.getElementById('q-0')
let script_0 = document.getElementById('script-0')
let q_1 = document.getElementById('q-1')
let script_1 = document.getElementById('script-1')
let q_2 = document.getElementById('q-2')
let script_2 = document.getElementById('script-2')
let q_3 = document.getElementById('q-3')
let script_3 = document.getElementById('script-3')
let q_4 = document.getElementById('q-4')
let script_4 = document.getElementById('script-4')
let q_5 = document.getElementById('q-5')
let script_5 = document.getElementById('script-5')
let q_6 = document.getElementById('q-6')
let script_6 = document.getElementById('script-6')
let q_7 = document.getElementById('q-7')
let script_7 = document.getElementById('script-7')
let q_8 = document.getElementById('q-8')
let script_8 = document.getElementById('script-8')
let q_9 = document.getElementById('q-9')
let script_9 = document.getElementById('script-9')
let q_10 = document.getElementById('q-10')
let script_10 = document.getElementById('script-10')
let q_11 = document.getElementById('q-11')
let script_11 = document.getElementById('script-11')
let q_12 = document.getElementById('q-12')
let script_12 = document.getElementById('script-12')
let q_13 = document.getElementById('q-13')
let script_13 = document.getElementById('script-13')
let q_14 = document.getElementById('q-14')
let script_14 = document.getElementById('script-14')
let q_15 = document.getElementById('q-15')
let script_15 = document.getElementById('script-15')
let q_16 = document.getElementById('q-16')
let script_16 = document.getElementById('script-16')
let q_17 = document.getElementById('q-17')
let script_17 = document.getElementById('script-17')
let q_18 = document.getElementById('q-18')
let script_18 = document.getElementById('script-18')
let q_19 = document.getElementById('q-19')
let script_19 = document.getElementById('script-19')
let q_20 = document.getElementById('q-20')
let script_20 = document.getElementById('script-20')
let q_21 = document.getElementById('q-21')
let script_21 = document.getElementById('script-21')
let q_22 = document.getElementById('q-22')
let script_22 = document.getElementById('script-22')
let q_23 = document.getElementById('q-23')
let script_23 = document.getElementById('script-23')
let q_24 = document.getElementById('q-24')
let script_24 = document.getElementById('script-24')
let q_25 = document.getElementById('q-25')
let script_25 = document.getElementById('script-25')
let q_26 = document.getElementById('q-26')
let script_26 = document.getElementById('script-26')
let q_27 = document.getElementById('q-27')
let script_27 = document.getElementById('script-27')
let q_28 = document.getElementById('q-28')
let script_28 = document.getElementById('script-28')
let q_29 = document.getElementById('q-29')
let script_29 = document.getElementById('script-29')
let q_30 = document.getElementById('q-30')
let script_30 = document.getElementById('script-30')
let q_31= document.getElementById('q-31')
let script_31 = document.getElementById('script-31')
let q_32 = document.getElementById('q-32')
let script_32 = document.getElementById('script-32')
let q_33 = document.getElementById('q-33')
let script_33 = document.getElementById('script-33')
let q_34 = document.getElementById('q-34')
let script_34 = document.getElementById('script-34')
let q_35 = document.getElementById('q-35')
let script_35 = document.getElementById('script-35')
let q_36 = document.getElementById('q-36')
let script_36 = document.getElementById('script-36')
let q_37 = document.getElementById('q-37')
let script_37 = document.getElementById('script-37')
let q_38 = document.getElementById('q-38')
let script_38 = document.getElementById('script-38')
let q_39 = document.getElementById('q-39')
let script_39 = document.getElementById('script-39')
let q_40 = document.getElementById('q-40')
let script_40 = document.getElementById('script-40')
let q_41 = document.getElementById('q-41')
let script_41 = document.getElementById('script-41')
let q_42 = document.getElementById('q-42')
let script_42 = document.getElementById('script-42')


q_00.addEventListener("click" , ch1)
q_0.addEventListener("click" , ch1)
q_1.addEventListener("click" , ch1)
q_2.addEventListener("click" , ch1)
q_3.addEventListener("click" , ch1)
q_4.addEventListener("click" , ch1)
q_5.addEventListener("click" , ch1)
q_6.addEventListener("click" , ch1)
q_7.addEventListener("click" , ch1)
q_8.addEventListener("click" , ch1)
q_9.addEventListener("click" , ch1)
q_10.addEventListener("click" , ch1)
q_11.addEventListener("click" , ch1)
q_12.addEventListener("click" , ch1)
q_13.addEventListener("click" , ch1)
q_14.addEventListener("click" , ch1)
q_15.addEventListener("click" , ch1)
q_16.addEventListener("click" , ch1)
q_17.addEventListener("click" , ch1)
q_18.addEventListener("click" , ch1)
q_19.addEventListener("click" , ch1)
q_20.addEventListener("click" , ch1)
q_21.addEventListener("click" , ch1)
q_22.addEventListener("click" , ch1)
q_23.addEventListener("click" , ch1)
q_24.addEventListener("click" , ch1)
q_25.addEventListener("click" , ch1)
q_26.addEventListener("click" , ch1)
q_27.addEventListener("click" , ch1)
q_28.addEventListener("click" , ch1)
q_29.addEventListener("click" , ch1)
q_30.addEventListener("click" , ch1)
q_31.addEventListener("click" , ch1)
q_32.addEventListener("click" , ch1)
q_33.addEventListener("click" , ch1)
q_34.addEventListener("click" , ch1)
q_35.addEventListener("click" , ch1)
q_36.addEventListener("click" , ch1)
q_37.addEventListener("click" , ch1)
q_38.addEventListener("click" , ch1)
q_39.addEventListener("click" , ch1)
q_40.addEventListener("click" , ch1)
q_41.addEventListener("click" , ch1)
q_42.addEventListener("click" , ch1)



    

    function ch1(){
        script_00.style.display  = q_00.checked  ? "block" : "none"
        script_0.style.display  = q_0.checked  ? "block" : "none"
        script_1.style.display  = q_1.checked  ? "block" : "none"
        script_2.style.display  = q_2.checked  ? "block" : "none"
        script_3.style.display  = q_3.checked  ? "block" : "none"
        script_4.style.display  = q_4.checked  ? "block" : "none"
        script_5.style.display  = q_5.checked  ? "block" : "none"
        script_6.style.display  = q_6.checked  ? "block" : "none"
        script_7.style.display  = q_7.checked  ? "block" : "none"
        script_8.style.display  = q_8.checked  ? "block" : "none"
        script_9.style.display  = q_9.checked  ? "block" : "none"
        script_10.style.display = q_10.checked ? "block" : "none"
        script_11.style.display = q_11.checked ? "block" : "none"
        script_12.style.display = q_12.checked ? "block" : "none"
        script_13.style.display = q_13.checked ? "block" : "none"
        script_14.style.display = q_14.checked ? "block" : "none"
        script_15.style.display = q_15.checked ? "block" : "none"
        script_16.style.display = q_16.checked ? "block" : "none"
        script_17.style.display = q_17.checked ? "block" : "none"
        script_18.style.display = q_18.checked ? "block" : "none"
        script_19.style.display = q_19.checked ? "block" : "none"
        script_20.style.display = q_20.checked ? "block" : "none"
        script_21.style.display = q_21.checked ? "block" : "none"
        script_22.style.display = q_22.checked ? "block" : "none"
        script_23.style.display = q_23.checked ? "block" : "none"
        script_24.style.display = q_24.checked ? "block" : "none"
        script_25.style.display = q_25.checked ? "block" : "none"
        script_26.style.display = q_26.checked ? "block" : "none"
        script_27.style.display = q_27.checked ? "block" : "none"
        script_28.style.display = q_28.checked ? "block" : "none"
        script_29.style.display = q_29.checked ? "block" : "none"
        script_30.style.display = q_30.checked ? "block" : "none"
        script_31.style.display = q_31.checked ? "block" : "none"
        script_32.style.display = q_32.checked ? "block" : "none"
        script_33.style.display = q_33.checked ? "block" : "none"
        script_34.style.display = q_34.checked ? "block" : "none"
        script_35.style.display = q_35.checked ? "block" : "none"
        script_36.style.display = q_36.checked ? "block" : "none"
        script_37.style.display = q_37.checked ? "block" : "none"
        script_38.style.display = q_38.checked ? "block" : "none"
        script_39.style.display = q_39.checked ? "block" : "none"
        script_40.style.display = q_40.checked ? "block" : "none"
        script_41.style.display = q_41.checked ? "block" : "none"
        script_42.style.display = q_42.checked ? "block" : "none"
        efict()

    }
    

    function efict(){
      let textC = document.getElementById('textC')
      let ou = document.getElementById('ou')
      let tik = document.getElementById('tik')

      if(q_14.checked){
        textC.innerHTML = "شكوي"
        textC.style.color = "red"
        ou.style.display = "none"
        
      }else if(q_19.checked){
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
     


  let checkgreen =document.getElementById("checkgreen")
  let green = document.getElementById("green")
  let checkgreen2 =document.getElementById("checkgreen2")
  let green2 = document.getElementById("green2")
  let checkgreen3 =document.getElementById("checkgreen3")
  let green3 = document.getElementById("green3")
  let checkgreen4 =document.getElementById("checkgreen4")
  let green4 = document.getElementById("green4")
  let checkgreen5 =document.getElementById("checkgreen5")
  let green5 = document.getElementById("green5")
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
  let checkgreen11 =document.getElementById("checkgreen11")
  let green11 = document.getElementById("green11")
  let checkgreen12 =document.getElementById("checkgreen12")
  let green12 = document.getElementById("green12")
  let checkgreen13 =document.getElementById("checkgreen13")
  let green13 = document.getElementById("green13")
  let checkgreen14 =document.getElementById("checkgreen14")
  let green14 = document.getElementById("green14")
  let checkgreen15 =document.getElementById("checkgreen15")
  let green15 = document.getElementById("green15")
  let checkgreen16 =document.getElementById("checkgreen16")
  let green16 = document.getElementById("green16")
  let checkgreen17 =document.getElementById("checkgreen17")
  let green17 = document.getElementById("green17")
  let checkgreen18 =document.getElementById("checkgreen18")
  let green18 = document.getElementById("green18")
  let checkgreen19 =document.getElementById("checkgreen19")
  let green19 = document.getElementById("green19")
  let checkgreen20 =document.getElementById("checkgreen20")
  let green20 = document.getElementById("green20")
  let checkgreen21 =document.getElementById("checkgreen21")
  let green21 = document.getElementById("green21")
  let checkgreen22 =document.getElementById("checkgreen22")
  let green22 = document.getElementById("green22")
  let checkgreen23 =document.getElementById("checkgreen23")
  let green23 = document.getElementById("green23")
  let checkgreen24 =document.getElementById("checkgreen24")
  let green24 = document.getElementById("green24")
  let checkgreen25 =document.getElementById("checkgreen25")
  let green25 = document.getElementById("green25")
  let checkgreen26 =document.getElementById("checkgreen26")
  let green26 = document.getElementById("green26")
  let checkgreen27 =document.getElementById("checkgreen27")
  let green27 = document.getElementById("green27")
  let checkgreen28 =document.getElementById("checkgreen28")
  let green28 = document.getElementById("green28")


  let showStep = document.getElementById("showStep")
  let showStep2 = document.getElementById("showStep2")
  let showStep3 = document.getElementById("showStep3")
 
  function action1(){
   
        // green.style.backgroundColor = checkgreen.checked ? "#0bcf5d" : "#f87676"
        // green2.style.backgroundColor = checkgreen2.checked ? "#0bcf5d" : "#f87676"
        // green3.style.backgroundColor = checkgreen3.checked ? "#0bcf5d" : "#f87676"
        // green4.style.backgroundColor = checkgreen4.checked ? "#0bcf5d" : "#f87676"
        // green5.style.backgroundColor = checkgreen5.checked ? "#0bcf5d" : "#f87676"
        green6.style.backgroundColor = checkgreen6.checked ? "#0bcf5d" : "#f87676"
        green7.style.backgroundColor = checkgreen7.checked ? "#0bcf5d" : "#f87676"
        green8.style.backgroundColor = checkgreen8.checked ? "#0bcf5d" : "#f87676"
        green9.style.backgroundColor = checkgreen9.checked ? "#0bcf5d" : "#f87676"
        green10.style.backgroundColor = checkgreen10.checked ? "#0bcf5d" : "#f87676"
        // green11.style.backgroundColor = checkgreen11.checked ? "#0bcf5d" : "#f87676"
        // green12.style.backgroundColor = checkgreen12.checked ? "#0bcf5d" : "#f87676"
        // green13.style.backgroundColor = checkgreen13.checked ? "#0bcf5d" : "#f87676"
        // green14.style.backgroundColor = checkgreen14.checked ? "#0bcf5d" : "#f87676"
        // green15.style.backgroundColor = checkgreen15.checked ? "#0bcf5d" : "#f87676"
        // green16.style.backgroundColor = checkgreen16.checked ? "#0bcf5d" : "#f87676"
        // green17.style.backgroundColor = checkgreen17.checked ? "#0bcf5d" : "#f87676"
        // green18.style.backgroundColor = checkgreen18.checked ? "#0bcf5d" : "#f87676"
        // green19.style.backgroundColor = checkgreen19.checked ? "#0bcf5d" : "#f87676"
        // green20.style.backgroundColor = checkgreen20.checked ? "#0bcf5d" : "#f87676"
        // green21.style.backgroundColor = checkgreen21.checked ? "#0bcf5d" : "#f87676"
        // green22.style.backgroundColor = checkgreen22.checked ? "#0bcf5d" : "#f87676"
        // green23.style.backgroundColor = checkgreen23.checked ? "#0bcf5d" : "#f87676"
        // green24.style.backgroundColor = checkgreen24.checked ? "#0bcf5d" : "#f87676"
        // green25.style.backgroundColor = checkgreen25.checked ? "#0bcf5d" : "#f87676"
        // green26.style.backgroundColor = checkgreen26.checked ? "#0bcf5d" : "#f87676"
        // green27.style.backgroundColor = checkgreen27.checked ? "#0bcf5d" : "#f87676"
        // green28.style.backgroundColor = checkgreen28.checked ? "#0bcf5d" : "#f87676"
        // green19.style.backgroundColor = checkgreen19.checked ? "#0bcf5d" : "#f87676"

        // if(checkgreen.checked && checkgreen2.checked && checkgreen3.checked && checkgreen4.checked && checkgreen5.checked && checkgreen6.checked  && checkgreen18.checked){
        //     showStep.style.display = "block"
        // }else{
        //     showStep.style.display = "none"

        // }
        
        if(checkgreen6.checked && checkgreen7.checked && checkgreen8.checked  && checkgreen9.checked && checkgreen10.checked){
        showStep2.style.display = "block"
    }else{
        showStep2.style.display = "none"
    }


    // if(checkgreen12.checked && checkgreen13.checked && checkgreen14.checked && checkgreen15.checked && checkgreen16.checked && checkgreen17.checked && checkgreen19.checked){
    //     showStep3.style.display = "block"
    // }else{
    //     showStep3.style.display = "none"
    // }
    
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

  MCUcolor1.style.color = MCU1.checked  ? "#c02be2"  : "black"
  MCUcolor2.style.color = MCU2.checked  ? "#c02be2" : "black"

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

    colorbtn1.style.color = notEligibleBtn.checked  ? "#c02be2"  : "black"
    colorbtn22.style.color = EligiblebBtn.checked  ? "#c02be2"  : "black"
  
  }
  
})


function resetF(){
  notEligible.style.display = "none"
  Eligible.style.display = "none"
  colorbtn1.style.color = "black"
  colorbtn22.style.color = "black"
}








// let BTN_SR = document.getElementById('BTN_SR')
// function openBTN_SR(){
//   window.location = "SR.html"
// }
// BTN_SR.onclick = openBTN_SR()





