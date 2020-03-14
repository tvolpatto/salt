/* eslint-disable linebreak-style */
$(document).ready(function () {
  let form = $("#delForm");
  let timesEl = $("#times");
  let quantityEl = $("#quantity");
  let availableTimes = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
  let sendDate;
  let total;
  //datepicker
  $("#modal1").modal();
  $("#modal2").modal();
  $("#modal3").modal();
  $(".tooltipped").tooltip();
  $("select").formSelect();
  $(".datepicker").datepicker({
    format: "mm/dd/yyyy",
    onClose: function () {
      //Getting date
      if (!this.hasOwnProperty("date")) {
        return;
      }
      sendDate = this.el.value;
      timesEl.empty();
      //Asking the server for delivieries scheduled on selected date
      //Formating that data, comparing it to all times, so user can only select an available time
      $.post("/api/times", { date: sendDate }).then(function (data) {
        let result = data.map(({ time }) => time);
        let difference = availableTimes
          .filter(x => !result.includes(x))
          .concat(result.filter(x => !availableTimes.includes(x)));
        //Appending available times
        timesEl.append($("<option value='' disabled selected>Select Time</option>"));
        difference.forEach(t => timesEl.append($(`<option value="${t}">${t}</option>`)));
        $("select").formSelect();
      });
    }
  });

  //Automatically calculates a total to display to the user when a quantity is entered
  quantityEl.change(function () {
    if (quantityEl.val() <= 0) {
      $("#total").attr("placeholder", "$0");
    } else {
      total = (quantityEl.val() * 8) + 10;
      $("#total").attr("placeholder", "$" + total);
    }
  });

  // on submit, get user id and email, as well as form data, and post to server
  form.submit(function (e) {
    e.preventDefault();
    $.get("/api/user_data", function (data) {
      if (data.id) {
        $.post("/api/delivery", {
          address: data.email,
          zipCode: $("#zip").val(),
          city: $("#city").val(),
          state: $("#state").val(),
          phone: $("#phone").val(),
          date: sendDate,
          time: $("#times").val(),
          quantity: $("#quantity").val(),
          total: total,
          userId: data.id
        }).then(function(){
          $("#modal1").modal("open");
          form.trigger("reset");
        });
      } else {
        console.log("Not logged in");
        $("#modal2").modal("open");
        return;
      }
    });
  });
});