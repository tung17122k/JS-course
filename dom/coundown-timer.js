window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");
  function countdowns(date) {
    const endDate = new Date(date).getTime();
    if (isNaN(endDate || endDate - new Date().getTime() <= 0)) return;
    setInterval(calculate, 1000);
    function calculate() {
      const now = new Date();
      let days, hours, minutes, seconds;
      // convert to timestamp
      // now = 1715672876902 => Tue May 14 2024 14:48:38 GMT+0700 (Indochina Time)
      // endDate = Tue May 20 2024 12:00:00 GMT+0700 (Indochina Time) = 1716181200000
      const startDate = now.getTime();
      // time remaining calculate to seconds
      let timeRemaining = parseInt((endDate - startDate) / 1000);
      if (timeRemaining > 0) {
        console.log(timeRemaining);
        days = parseInt(timeRemaining / (24 * 60 * 60));
        timeRemaining = timeRemaining % (24 * 60 * 60);
        hours = parseInt(timeRemaining / (60 * 60));
        timeRemaining = timeRemaining % (60 * 60);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        seconds = parseInt(timeRemaining);
        daysText.textContent = `0${days}`.slice(-2);
        hoursText.textContent = `0${hours}`.slice(-2);
        minutesText.textContent = `0${minutes}`.slice(-2);
        secondsText.textContent = `0${seconds}`.slice(-2);
      } else {
        return;
      }
    }
  }
  countdowns("Tue May 20 2024 12:00:00 GMT+0700 (Indochina Time)");
  // setInterval(function () {
  // }, 1000);

  // 1 ngay = 24h x 60p x 60s = 24 * 60 * 60 =
});
