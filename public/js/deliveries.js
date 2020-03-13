/* eslint-disable linebreak-style */
$(document).ready(function () {
  // let form = $("#delForm");
  let timesEl = $("#times");
  let availableTimes = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
  let sendDate;
  let displayTimes = [];

  $(".datepicker").datepicker({
    format: "mm/dd/yyyy",
    onClose: function(){
      console.log(this.el.value);
      sendDate = this.el.value;
      $.post("/api/times", {date: sendDate}).then(function(data){
        // for(var i = 0; i < data.length; i ++){
        //   for(var j = 0; j < availableTimes.length; j++){
        //     if(data[i].time !== availableTimes[j]){
        //       displayTimes.push(availableTimes[j]);
        //     }
        //   }
        // }
        let difference = availableTimes
          .filter(x => !data.includes({time: x}))
          .concat(data.filter(x => !availableTimes.includes(x)));
        console.log(difference);
        displayTimes.forEach(t => timesEl.push($(`<option value="${t}">${t}</option>`)));
      });
    }
  });
  $("select").formSelect();

});