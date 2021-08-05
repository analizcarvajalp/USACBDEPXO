
const countDown = new Date("Sep 25, 2021 00:00:00").getTime();
const x = setInterval(function() {

  const now = new Date().getTime();
    
  const distance = countDown - now;
    
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById('days').innerHTML = days + " DAYS";
  document.getElementById('hours').innerHTML = hours + " HOURS"
  document.getElementById('minutes').innerHTML = minutes + " MIN"
})

 