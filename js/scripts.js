//Business Logic ---------


//UI Logic --------------
$(document).ready(function() {
  $("#docForm").submit(function() {

  let pick1 = $("input#pick1").val();
  let pick2 = $("input#pick2").val();
  let pick3 = $("input#pick3").val();
  let pick4 = $("input#pick4").val();
  let pick5 = $("input#pick5").val();
  
  if (pick1 === "1" && pick3 != "2" || pick1 != "1" && pick3  === "1") {
    $("#output").text("You should learn Swift!").show();
  }
    else if(pick1 === "2" || pick3 === "3") {
    } else if (pick1 ==="2" || pick3 === "3") {
      $("#output").text("You should learn javaScript").show();
    }
    else if(pick3 === "2") {
    } else if (pick3 === "2") {
      $("#output").text("You should learn Kotlin").show();
    } 
    else {
      $("#output").text("Nothing is selected").show();
    }
    event.preventDefault();
});  
});
