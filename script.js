//var timerElement = document.getElementById('timer');


var m = moment(); //makes it easier to type this 

//console.log(moment().toString());
//console.log(moment().getDate);

console.log(m.format("dddd MMM Mo YYYY"));

$("#date").html(m.format("dddd MMM Mo YYYY")); //sets the date using the Moment.js library


