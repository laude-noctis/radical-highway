$(document).ready(function () {

  $('.saveBtn').on('click', function () {
    console.log($(this).parent().attr("id"));
    console.log($(this).siblings(".description").val());
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val());
  });
 
  function scheduleStorage() {
    $(".description").each(function () {
      let keyItem = $(this).parent().attr("id");
      let valueItem = $(this).val();
      localStorage.setItem(keyItem, valueItem);
    });
  }
  
  $(document).ready(function () {
    $(".description").each(function () {
      let keyItem = $(this).parent().attr("id");
      let valueItem = localStorage.getItem(keyItem);
      if (valueItem) {
        $(this).val(valueItem);
      }
    });
  });

  function updateClock() {
    const today = dayjs().format("ddd MMM MM, YYYY, hh:mm:ss");
    $("#currentDay").text(today);
  }
  setInterval(updateClock, 1000)

  function colorTime() {
    let currentTime = dayjs().hour();
    console.log(currentTime);

    $(".time-block").each(function () {
      let timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

      if(timeBlockHour < currentTime) {
        $(this).addClass("past")
      } else if (timeBlockHour !== currentTime) {
        $(this).addClass("present")
      } else {
        $(this).addClass("future")
      }
    })
  };
  colorTime();
});