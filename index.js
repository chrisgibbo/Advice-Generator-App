const adviceID = document.getElementById("advice-id")
const adviceText = document.getElementById("advice-text")



const adviceGenerator = function () {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
      adviceID.innerHTML = '#' + data.slip.id
      adviceText.innerHTML = '"' + data.slip.advice + '"'
        
      });
      
  };
  
  adviceGenerator();