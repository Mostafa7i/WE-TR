
$(document).ready(function(){
    //////////////////////////////// ubdate
    $('.btn_1').click(function(){
        $('#oldUpdatev2_3').toggle()
    })

    $('.btn_2').click(function(){
        $('#btn_2').toggle()
    })
    $('.btn_3').click(function(){
        $('#btn_3').toggle()
    })
    $('.btn_4').click(function(){
        $('#btn_4').toggle()
    })
// ///////////////////////////////////////////////Chang numb
    $('.btn_5').click(function(){
        $('#btn_5').toggle(500)
    })
    $('.btn_6').click(function(){
        $('#btn_6').toggle(500)
    })
    $('.btn_7').click(function(){
        $('#btn_7').toggle(500)
    })
    $('.btn_8').click(function(){
        $('#btn_8').toggle(500)
    })

    // //////////////////////////////////////////////////////
    $('.btn_9').click(function(){
        $('#btn_9').toggle(500)
    })
    $('.btn_10').click(function(){
        $('#btn_10').toggle(500)
    })
    $('.btn_11').click(function(){
        $('#btn_11').toggle(500)
    })
    $('.btn_12').click(function(){
        $('#btn_12').toggle(500)
    })
    $('.btn_13').click(function(){
        $('#btn_13').toggle(500)
    })
    $('.btn_14').click(function(){
        $('#btn_14').toggle(500)
    })
    $('.btn_15').click(function(){
        $('#btn_15').toggle(500)
    })
    $('.btn_16').click(function(){
        $('#btn_16').toggle(500)
    })
    $('.btn_17').click(function(){
        $('#btn_17').toggle(500)
    })
    $('.btn_18').click(function(){
        $('#btn_18').toggle(500)
    })
    $('.btn_19').click(function(){
        $('#btn_19').toggle(500)
    })
    $('.btn_20').click(function(){
        $('#btn_20').toggle(500)
    })
    $('.btn_21').click(function(){
        $('#btn_21').toggle(500)
        
    })
  
// ///////////////////////////////////////////////////////
$('.btn_22').click(function(){
    $('#btn_22').toggle(500)
})
$('.btn_23').click(function(){
    $('#btn_23').toggle(500)
})
$('.btn_24').click(function(){
    $('#btn_24').toggle(500)
})
$('.btn_25').click(function(){
    $('#btn_25').toggle(500)
})
$('.btn_26').click(function(){
    $('#btn_26').toggle(500)
})
$('.btn_27').click(function(){
    $('#btn_27').toggle(500)
})
$('.btn_28').click(function(){
    $('#btn_28').toggle(500)
})
$('.btn_29').click(function(){
    $('#btn_29').toggle(500)
})
$('.btn_30').click(function(){
    $('#btn_30').toggle(500)
})
$('.btn_31').click(function(){
    $('#btn_31').toggle(500)
})
$('.btn_32').click(function(){
    $('#btn_32').toggle(500)
})
$('.btn_33').click(function(){
    $('#btn_33').toggle(500)
})
$('.btn_34').click(function(){
    $('#btn_34').toggle(500)
    $( "btn_34" ).html( "Next Step..." )


})
$('.btn_35').click(function(){
    $('#btn_35').toggle(500)
})
$('.btn_36').click(function(){
    $('#btn_36').toggle(500)
})
$('.btn_37').click(function(){
    $('#btn_37').toggle(500)
})
$('.btn_38').click(function(){
    $('#btn_38').toggle(500)
})
$('.btn_39').click(function(){
    $('#btn_39').toggle(500)
})
$('.btn_40').click(function(){
    $('#btn_40').toggle(500)
})
$('.btn_41').click(function(){
    $('#btn_41').toggle(500)
})
$('.btn_42').click(function(){
    $('#btn_42').toggle(500)
})
$('.btn_43').click(function(){
    $('#btn_43').toggle(500)
})
$('.btn_44').click(function(){
    $('#btn_44').toggle(500)
})
$('.btn_45').click(function(){
    $('#btn_45').toggle(500)
})
$('.btn_46').click(function(){
    $('#btn_46').toggle(500)
})
$('.btn_47').click(function(){
    $('#btn_47').toggle(500)
})
$('.btn_48').click(function(){
    $('#btn_48').toggle(500)
})
$('.btn_49').click(function(){
    $('#btn_49').toggle(500)
})
$('.btn_50').click(function(){
    $('#btn_50').toggle(500)
})
$('.btn_51').click(function(){
    $('#btn_51').toggle(500)
})
$('.btn_52').click(function(){
    $('#btn_52').toggle(500)
})
$('.btn_53').click(function(){
    $('#btn_53').toggle(500)
})
$('.btn_54').click(function(){
    $('#btn_54').toggle(500)
})
$('.btn_55').click(function(){
    $('#btn_55').toggle(500)
})
$('.btn_56').click(function(){
    $('#btn_56').toggle(500)
})
$('.btn_57').click(function(){
    $('#btn_57').toggle(500)
})
$('.btn_58').click(function(){
    $('#btn_58').toggle(500)
})
$('.btn_59').click(function(){
    $('#btn_59').toggle(500)
})
$('.btn_60').click(function(){
    $('#btn_60').toggle(500)
})
$('.btn_61').click(function(){
    $('#btn_61').toggle(500)
})
$('.btn_62').click(function(){
    $('#btn_62').toggle(500)
})
$('.btn_63').click(function(){
    $('#btn_63').toggle(500)
})
$('.btn_64').click(function(){
    $('#btn_64').toggle(500)
})
$('.btn_65').click(function(){
    $('#btn_65').toggle(500)
})
$('.btn_66').click(function(){
    $('#btn_66').toggle(500)
})




    
   })



// 2

function toggleDiv(divId , button) {
    var div = document.getElementById(divId);
    if (div.classList.contains('hidden')) {
        div.classList.remove('hidden');
        button.classList.add('active2');
    } else {
        div.classList.add('hidden');
        button.classList.remove('active2');
    }
}





function FOsls(divID , button){
    var div = document.getElementById(divID)
    if(div.classList.contains('hidden')){
        div.classList.remove('hidden')
        button.classList.add('active2')
    }else{
        div.classList.add('hidden')
        button.classList.remove('active2')
       
    }
  }
//   ftth
let FtthScripts = document.getElementById('FtthScript')
let FtthScripts2 = document.getElementById('FtthScript2')
let FtthScript = function (){
    if(isClicked){
        FtthScripts.style.display = "block"
        FtthScripts2.style.display = "block"
        isClicked = false;
    }else{
        FtthScripts.style.display = "none"
        FtthScripts2.style.display = "none"
        isClicked = true;
    }
  }
//   ftth
// let resetClears = document.getElementById('resetClear2')
// let notEligible = document.getElementById('notEligible')
// let resetClear2 = function (){
//     if(isClicked){
//         notEligible.style.display = "none"
//         isClicked = true;
//     }
//   }


let radiobtns = document.querySelectorAll("input[name='Chos1']");
let result  = document.getElementById("result55");
let escalat  = document.getElementById("escalat");

let findSelected = () => {
  let selected = document.querySelector("input[name='Chos1']:checked").value;
  result.textContent = ` ${selected}`;
    escalat.style.display = "block"

}

radiobtns.forEach(radiobtn => {
  radiobtn.addEventListener("change" , findSelected);
});

findSelected();








//  ////////////////// We Mobile Concession
//   wirinng
let wirinngs = document.getElementById('wirinng')
let wirinng = function (){
    if(isClicked){
        wirinngs.style.display = "block"
        isClicked = false;
    }else{
        wirinngs.style.display = "none"
        isClicked = true;
    }
  }
//   Quary_Search
let Quary_Searchs = document.getElementById('Quary_Search')
let Quary_Search = function (){
    if(isClicked){
        Quary_Searchs.style.display = "block"
        isClicked = false;
    }else{
        Quary_Searchs.style.display = "none"
        isClicked = true;
    }
  }
//   addd
let addds = document.getElementById('addd')
let addd = function (){
    if(isClicked){
        addds.style.display = "block"
        isClicked = false;
    }else{
        addds.style.display = "none"
        isClicked = true;
    }
  }
