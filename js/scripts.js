$(document).ready(function() {
  $("doc.Form").submit(function() {

    let queOne = $("select#queOne").val();
    let queTwo = $("select#queTwo").val();
    let queThree = $("select#queThree").val();
    // let pick4 = $("input#pick4").val();
    // let pick5 = $("input#pick5").val();

    if (queOne === "cat" && queTwo === "coffee" && queThree === "apple") {
      $("#output").text("You should learn Swift").show();
    } else if(queTwo === "tea") {
      $("#output").text("You shoud learn kotlin.").show();
  // } else if(pick1 === "2" || pick3 === "3") {
  //   } else if (pick1 ==="2" || pick3 === "3") {
  //     $("#output").text("You should learn javaScript").show();
  //   }
  //   else if(pick3 === "2") {
  //   } else if (pick3 === "2") {
  //     $("#output").text("You should learn Kotlin").show();
    } 
    else {
      $("#output").text("Nothing is selected").show();
    }
    event.preventDefault();
  });  
});


//Swift, Kotlin, C#,