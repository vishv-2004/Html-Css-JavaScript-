let masterbutton = document.getElementById('masterbutton');
let audioElement = new Audio('1.mp3')
let songindex=0;
let myprogress =document.getElementById('progress');
let animation=document.getElementById('animation');

// master button play and pause work
masterbutton.addEventListener('click',()=>{
       if(audioElement.paused || audioElement.currentTime<=0 )
       {
        audioElement.play();
        masterbutton.classList.remove('fa-circle-play');
        masterbutton.classList.add('fa-circle-pause');
        animation.classList.remove('hidden');
        // animation.style.opacity=1;
       }
       else{
        audioElement.pause();
        masterbutton.classList.remove('fa-circle-pause');
        masterbutton.classList.add('fa-circle-play');
        animation.classList.add('hidden');
       }
 })

//seekbar update
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value = progress;
})

//change the progressbar
myprogress.addEventListener('change',()=>{
    audioElement.currentTime=(myprogress.value*audioElement.duration)/100;
})
