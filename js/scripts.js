//Business Logic ---------

  





//UI Logic --------------
$(document).ready(function() {
  $("button").click(function() {
    let radio = $("input[type=radio][name=pick]").filter(":checked")[0];
    if (radio === pick1 === "1" && pick3 != "2" || pick1 != "1" && pick3  === "1") {
    $("#swift").hide();
        alert("#swift").show();
    }
    else if(pick1 === "2" || pick3 === "3") {
    } else if (pick1 ==="2" || pick3 === "3") {
      $(".javascript").hide();
    }
    else if(pick3 === "2") {
    } else if (pick3 === "2") {
      $(".java").hide();
    }
    else if(pick2 === "2") {
    } else if (pick2 === "2") {
      $(".C++").hide();
    }
    else if(pick4 === "2") {
    } else if (pick4 === "2") {
      $(".ruby").hide();
    }
    else if(pick5 === "1") {
    } else if (pick5 === "1") {
      $(".kotlin").hide();
          alert(value);
    } 
    else {
      alert("Nothing is selected");
    }
  })  
});


  

































  //   // $("#radForm").submit(function(event) {

  //     //     if (value === pick1 === "1" && pick3 != "2" || pick1 != "1" && pick3  === "1") {
  //     $(".swift").hide();
  //     }
  //     else if(pick1 === "2" || pick3 === "3") {
  //     } else if (pick1 ==="2" || pick3 === "3") {
  //       $(".javascript").hide();
  //     }
  //     else if(pick3 === "2") {
  //     } else if (pick3 === "2") {
  //       $(".java").hide();
  //     }
  //     else if(pick2 === "2") {
  //     } else if (pick2 === "2") {
  //       $(".C++").hide();
  //     }
  //     else if(pick4 === "2") {
  //     } else if (pick4 === "2") {
  //       $(".ruby").hide();
  //     }
  //     else if(pick5 === "1") {
  //     } else if (pick5 === "1") {
  //       $(".kotlin").hide();
  //         alert(value);
  //     } 
  //     else {
  //       alert("Nothing is selected");
  //     }
  //   })  
  // });











// <div class="container">
//     <div class="jumbotron">
//       <h1>CompCompatibility</h1>
//       <h6>"You can program a computer, but <br>you can't program what you enjoy doing."</h6>
//     </div>
//     <form>
//       <input id="target" type="text" value="1">
//     </form>
//       <select>
//         <option </option>
//       </select>
//     </form>
 
  