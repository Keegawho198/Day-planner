//var timerElement = document.getElementById('timer');



var m = moment(); //makes it easier to type this 

//console.log(moment().toString());
//console.log(moment().getDate);

//console.log(m.format("dddd MMM Mo YYYY"));

$("#date").html(m.format("dddd MMM Mo YYYY")); //sets the date using the Moment.js library


//$("#test").text(m.format("hh:mm A"));
$("#test").text(m.format("hh:mm A"));
$(".time9").text(m.format("9", "hh:mm A") + "AM");


// changeColor();

// function changeColor(){
//   if(m == m.hour(12)){
//     $("#test").css("color", "red");
//    // $("p").css("color", "red");
//   }else if(m == 14){
//     $("#test").css("color", "blue");
//   }

// }


displayTasks();


//console.log( moment('Mon 03-Jul-2017, 11:00 AM', 'ddd DD-MMM-YYYY, hh:mm A').format('hh:mm A') );



//moment("Apr 4 05:06:07", "MMM DD hh:mm:ss");  // this year, 4th April, 05:06:07.000



// var beginningTime = moment('8:45am', 'h:mma');
// var endTime = moment('9:00am', 'h:mma');
// console.log(beginningTime.isBefore(endTime)); // true
// console.log(beginningTime.toDate()); // Mon May 12 2014 08:45:00
// console.log(endTime.toDate()); // Mon May 12 2014 09:00:00


//var saveBtn = $("#saveBtn"); //not doing anthing
//saveBtn.append(newButton);

//the following code makes sure that the save button is clicked
$(".saveBtn").on("click", function() {
  var savedTasks = [];

  console.log("button pressed");
  //var todoItem = "test";
  var todoItem  = $(this).attr("data-time");
  console.log(todoItem);
  var textItem = $("#" + todoItem).val();
  savedTasks.push(textItem);

  console.log(savedTasks);
  var storedTasks = localStorage.getItem("storedTasks");

  if(storedTasks == null){
    //this will take the first input and put it into the array since array is emtpy
    localStorage.setItem("storedTasks", JSON.stringify(savedTasks));
    $("#" + todoItem).val("");
  }else{
    //this will add other inputs inside the same array
    storedTasks = JSON.parse(storedTasks);
    console.log(storedTasks)
    storedTasks.push(textItem);
    localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
    $("#" + todoItem).val("");
  }

  localStorage.setItem(todoItem, textItem);  //should store input into the local stoarge. with time
  displayTasks();
});

function displayTasks(){
  // var tasksFromLocalStorage = JSON.parse(localStorage.getItem("storedTasks"));
  var times = ['11am', '10am', "9am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
  // if(tasksFromLocalStorage != null){
    for(var i=0; i<times.length; i++){
      var task = (localStorage.getItem(times[i]));
      $("#"+times[i]).val(task)
  //     var textItem = tasksFromLocalStorage[i];

  //     var todoItem  = $(this).attr("data-time");
      
  //    // var textItem = $("#" + todoItem).val();
  //    // savedTasks.push(textItem);

  //  //  var oldItems = JSON.parse(localStorage.getItem('savedTasks')) || [];
  //    //tasksFromLocalStorage.push(textItem);


  //     $("#"+ i + todoItem).append(textItem);
  //     console.log(textItem);
    }
  // }

}

//when saving store todo item as key and textItem as value
//when displaying, loop through all object(inside local storage array)
//assign key and value to correct input

//[{key:"9am", value:"work"},{key:"3pm", value:"leave work"}]

//$(key).val(value);






//localStorage.setItem("Name", "Keegan");

//this.attr or this.data


//queryselector
//document.querySelector("#mytextinput").textContent


// function action() {
//   window.localStorage['todo-text'] = document.getElementById('todo-text').value;
// }

// $('#saveBtn').on('click', function(){

//   $('input[type="text"]').each(function(){    
//       var id = $(this).attr('id');
//       var value = $(this).val();
//      localStorage.setItem(id, value);

//   });   
// });


//How do i have multilple saves that all click? rn just have one that can click, shows result in console.log.
//can savebtn be universal?

//how do I get the time to compare with moment.js?

//refer to activity 8 line 40


//register click event on all btn class (all btns have same class)
//link the button to its respective input and get the text
//once you have value, save it to local storage
//see if you can change this data type to be array of object
//stringify whike saving parse when extracting


// $(".yourButtonClass").on('click', function(event){
//   event.stopPropagation();
//   event.stopImmediatePropagation();
//   //(... rest of your JS code)
// });



