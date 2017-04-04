//B.L.
var Ticket = function (name, title, firstOrReg, age, time) {
  this.name = name;
  this.title = title;
  this.firstOrReg = firstOrReg;
  this.age = age;
  this.time = time;
}

function getTitle(selectedBox) {
  var selectedBox = document.getElementById('movie')
  var ttlString = selectedBox.options[selectedBox.selectedIndex].text;
  return ttlString;
}

function final(premRegPrice, agePrice, timePrice) {

    if(premRegPrice === 'new'&& agePrice === 'child'&& timePrice==='matinee') {
      return 9;
    } else if (premRegPrice === 'new'&& agePrice === 'adult' && timePrice === "matinee") {
      return 11;
    } else if(premRegPrice === 'new'&& agePrice === 'senior' && timePrice === "matinee") {
      return 9;
    } else if(premRegPrice === 'new'&& agePrice === 'child'&& timePrice==='regular') {
      return 10;
    } else if (premRegPrice === 'new'&& agePrice === 'adult' && timePrice === "regular") {
      return 12;
    } else if (premRegPrice === 'new'&& agePrice === 'senior' && timePrice === "regular") {
      return 10;
    } else if (premRegPrice === 'old'&& agePrice === 'child'&& timePrice==='matinee') {
      return 7;
    } else if (premRegPrice === 'old'&& agePrice === 'adult' && timePrice === "matinee") {
      return 9;
    } else if(premRegPrice === 'old'&& agePrice === 'senior' && timePrice === "matinee") {
      return 7;
    } else if (premRegPrice === 'old'&& agePrice === 'child'&& timePrice==='regular') {
      return 8;
    } else if (premRegPrice === 'old'&& agePrice === 'adult' && timePrice === "regular") {
      return 10;
    } else if (premRegPrice === 'old'&& agePrice === 'senior' && timePrice === "regular") {
      return 8;
    }
}


//U.I.
$(document).ready(function() {

  $("form#formone").submit(function(event) {
    event.preventDefault();

    var newTicket = new Ticket();

    var inputtedName = $("input#name").val();
    var inputtedMovieTitle = $("#movie").val();
    var slctdTitle = getTitle();
    var inputtedAgeRange = $("#age").val();
    var timeOfDay= $("#time").val();
    var test = getTitle();


    newTicket.name = inputtedName;
    newTicket.title = slctdTitle;
    newTicket.firstOrReg = inputtedMovieTitle;
    newTicket.age = inputtedAgeRange;
    newTicket.time = timeOfDay;

    console.log(newTicket.firstOrReg);
    console.log(newTicket.age);

    var newFinal = final(newTicket.firstOrReg, newTicket.age, newTicket.time);

    $("ul#cat").append("<li><span class='final-price'>" + newFinal + "</span></li><li>" + newTicket.title + "</li>");
    $("ul#cat").show();
  });

});
