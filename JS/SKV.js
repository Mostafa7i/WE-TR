


window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

function run(){
  if(localStorage.getItem("SKV")){
     
  }else{
    window.location = "LoginSKV.html"
  }
}
run()

function search() {
  let searchBar = document.querySelector(".search-input").value.toUpperCase().trim();
  let productlist = document.querySelector(".product-list");
  let product = document.querySelectorAll(".product");
  let productName = document.getElementsByTagName("h6");
  for (let i = 0; i < productName.length; i++) {
    if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
    
  }


}


function select() {
  var optionL = document.getElementById("optionL");
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  if (optionL.value == 2) {
    box1.style.display = "none";
    box2.style.display = "flex";
    box1.style.borderColor = "none";
  } else {
    box1.style.display = "flex";
    box1.style.borderColor = "red";
    box2.style.display = "none";
  }
}
function answer() {
  let searchAnswer = document.querySelector(".input-answer").value.toUpperCase().trim();
  let productlist = document.querySelector(".product-list");
  let product = document.querySelectorAll(".product");
  let productName = document.getElementsByTagName("p");
  for (let i = 0; i < productName.length; i++) {
    if (productName[i].innerHTML.toUpperCase().indexOf(searchAnswer) >= 0) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
  }
}

//--------------------------------

//------------------------

let productlist = document.querySelector(".product-list");

let pro = [
  {
    title: "In case CST account is suspend due to suspension Adminstrative Distraint and CST Called us informed he paid through any channel & the corrective action already taken from the stores side so the right action is :",
    answer: "Create TT : Fixed Voice Adminstrative distrint>Resumption",
  },
  // {
  //   title: "",
  //   answer: ""
  // },
 



];

lastUp= document.querySelector(".LastUp span")
  lastUp.innerHTML = "2024/7/30"


function drowItem() {
  let y = pro.map((item) => {
    return `
        <div class="product">
          <div class="product-deatils">
          <h6><i class="fa-solid fa-earth-americas"></i> ${item.title}</h6>
          <div id="clickTranslate"><i class="fa-solid fa-language fa-fade"></i></div>
            <p><mark>${item.answer}</mark></p>
            <hr>
          </div>
        </div>
        `;
  });

  productlist.innerHTML = y.join("");
}

let n = document.getElementById("n");
for (var num in pro) {
  n.innerHTML = num;
  n.style.color = "red";
  n.style.fontWeight = "bold";
}
drowItem();
let show = document.getElementById("show");
let bd = document.getElementById("bd");

show.onchange = function () {
  home.style.backgroundColor = show.checked ? "black" : "#fff";
  home.style.color = show.checked ? "#fff" : "black";

  bd.style.backgroundColor = show.checked ? "black" : "#fff";
  home.style.borderColor = show.checked ? "#fff" : "black";
  home.style.borderWidth = show.checked ? "10px" : "0";
  home.style.border = show.checked ? "solid" : "0";
};

let userName = document.querySelector('#userName')
let password = document.querySelector('#password')

let getUsername = localStorage.getItem("userName")
let getPassword = localStorage.getItem("password")

let parent = document.querySelector(".parent")
let form = document.querySelector(".section-form")
let addItem = localStorage.getItem("username")? localStorage.getItem("username") : "";




window.onload = function run(){
  window.alert("تم تسجيل خروجك")
  if(alert = true){
    localStorage.clear()
  }
  
}
//   if(localStorage.getItem("username")){

//   }else{
//     window.location = "index.html"
//   }
// }
// run()

/////////////////////////////////



function trans(){
  translate.style.display = "none"
}






