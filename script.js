let secondsE1 = document.getElementById("second")
let minutesE1 = document.getElementById("minutes")
let millisecondsE1 = document.getElementById("milliseconds")
let startBtn = document.getElementById("startBtn")
let pauseBtnE1 = document.getElementById("pauseBtn")
let resetBtnE1 = document.getElementById("resetBtn")



let interval = null;
let seconds=0; 
let milliseconds=0;
let minutes = 0;

startBtn.addEventListener("click", startTimer)
pauseBtnE1.addEventListener("click", fim)
resetBtnE1.addEventListener("click", novamente)

function startTimer(){
   
      interval = setInterval(() => {
        milliseconds++;

        if(milliseconds === 59){
            seconds++;
            milliseconds=0;
        }
     
        if(seconds === 59){
            minutes++;
            seconds=0;
        }

        millisecondsE1.textContent = milliseconds;
        secondsE1.textContent = seconds;
        minutesE1.textContent = minutes;

      }, 1000);
    }

    function fim(){

        clearInterval(interval);
        
    }

    function novamente(){


        seconds=0; 
        milliseconds=0;
        minutes = 0;

        millisecondsE1.textContent = 0;
        secondsE1.textContent = 0;
        minutesE1.textContent = 0;
        

    }
    
