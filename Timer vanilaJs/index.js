var timer = document.getElementById('timer');
var start = document.getElementById('start');
start.addEventListener('click',s);
var hour, minute, seconds;
hour = document.getElementById('hours');
minute = document.getElementById('minutes');
second = document.getElementById('seconds');
var counter=0;
var  timerId;
function s(){
    start.classList.remove('show');
    start.classList.add('hide');
    timer.classList.remove('hide');
    timer.classList.add('show');
    let hrs = 0;
    let min =0 ;
    let sec = 0;
    timerId = setInterval(()=>{
        counter++
        hrs = parseInt(counter/3600);
        min = parseInt(counter/60);
        sec = parseInt(counter%60);
        hour.innerHTML = hrs>=10? hrs: '0'+hrs;
        minute.innerHTML = min>=10?min:'0'+min;
        second.innerHTML = sec>=10? sec: '0'+sec;
    },1000);
    console.log(timerId);
}
function pauseTimer(id){
    console.log('id', id);
    clearInterval(id);
}
var pause = document.getElementById('pause');
    var resume =document.getElementById('resume');
    pause
        .addEventListener('click',()=>{
            pauseTimer(timerId);
            pause.classList.remove('show');
            resume.classList.remove('hide');
            pause.classList.add('hide');
            resume.classList.add('show');
        })
        resume.addEventListener('click', ()=>{
            s();
            resume.classList.remove('show');
            pause.classList.remove('hide');
            resume.classList.add('hide');
            pause.classList.add('show');
        });
var reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    // check if the timer is working or not 
    let timerIsWorking = pause.classList.contains('show');
    // if so then stop the timer
    if(timerIsWorking){
        console.log(timerId)
        clearInterval(timerId);
    }
    // else dont do anything
    counter=0;
    start.classList.add('show');
    start.classList.remove('hide');
    timer.classList.add('hide');
    timer.classList.remove('show');
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
})