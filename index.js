const adviceNum = document.getElementById("advice-num");
const adviceQuote = document.getElementById("advice-quote");



const apiRequest = function () {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        adviceNum.innerHTML = "addice" + " " + '#' + " " + data.slip.id;
        adviceQuote.innerHTML = '"' + data.slip.advice + '"';
        
      });
      
  };
  
  apiRequest();