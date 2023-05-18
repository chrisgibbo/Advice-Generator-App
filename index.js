const adviceNum = document.getElementById("advice-num");
const adviceQuote = document.getElementById("advice-quote");
const adviceBtn = document.getElementById("advice-btn")

adviceBtn.addEventListener("click", function (){
        fetch("https://api.adviceslip.com/advice")
          .then((res) => res.json())
          .then((data) => {
            adviceNum.innerHTML = "addice" + " " + '#' + " " + data.slip.id;
            adviceQuote.innerHTML = '"' + data.slip.advice + '"';
        })
        .catch((err) => {
            alert("There was an error!! 😂", err);
        })
      })