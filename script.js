//var timerElement = document.getElementById('timer');


var m = moment(); //makes it easier to type this 

//console.log(moment().toString());
//console.log(moment().getDate);

//console.log(m.format("dddd MMM Mo YYYY"));

$("#date").html(m.format("dddd MMM Mo YYYY")); //sets the date using the Moment.js library


// var beginningTime = moment('8:45am', 'h:mma');
// var endTime = moment('9:00am', 'h:mma');
// console.log(beginningTime.isBefore(endTime)); // true
// console.log(beginningTime.toDate()); // Mon May 12 2014 08:45:00
// console.log(endTime.toDate()); // Mon May 12 2014 09:00:00


var saveBtn = $("#saveBtn");
//saveBtn.append(newButton);

//the following code makes sure that the save button is clicked
$("#saveBtn").on("click", function() {
  console.log("button pressed");
});



//How do i have multilple saves that all click? rn just have one that can click, shows result in console.log.
//can savebtn be universal?

//how do I get the time to compare with moment.js?
