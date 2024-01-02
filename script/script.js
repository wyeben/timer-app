let timerHse = document.querySelector('.timer-hse');
let playButton = document.querySelector('.play-btn');
let resetButton = document.querySelector('.reset-btn');

let hours = 0;
let minute = 0;
let seconds = 0;


playButton.addEventListener('click', () => {

  play();

})
timerHse.innerHTML = playButton;

function play(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minute++;

        if(minute === 60){
            minute = 0;
            hours++;
        }
    }
}