//initial the veriable
let audioElement = new Audio('material/songs/1.mp3');
let masterbutton=document.getElementById('masterbutton');
let myprogress = document.getElementById('progress');
let songiteam =Array.from(document.getElementsByClassName('songiteam'));
let icone = document.getElementById(`i-`);
let onedash = Array.from(document.getElementsByClassName('1-'));
let footersong = document.getElementById('footersongname');
let animation = document.getElementById('animation');
//song array
let songarray = [
    {songname:"Love Mashup",songpath:"material/songs/1.mp3",coverpath:"material/covers/1.jpg",songduration:"1:43:55"},
    {songname:"Unstoppable",songpath:"material/songs/2.mp3",coverpath:"material/covers/2.jpg",songduration:"4:06"},
    {songname:"Baller",songpath:"material/songs/3.mp3",coverpath:"material/covers/3.jpg",songduration:"2:28"},
    {songname:"Pathan",songpath:"material/songs/4.mp3",coverpath:"material/covers/4.jpg",songduration:"3:18"},
    {songname:"Night Changers",songpath:"material/songs/5.mp3",coverpath:"material/covers/5.jpg",songduration:"4:00"},
    {songname:"Vardan",songpath:"material/songs/6.mp3",coverpath:"material/covers/6.jpg",songduration:"4:37"},
    {songname:"Ram Siya Ram",songpath:"material/songs/7.mp3",coverpath:"material/covers/7.jpg",songduration:"7:00"},
];
function app(){
    
}
songiteam.forEach((element,i) => {
    document.getElementsByClassName('songcover')[i].src=songarray[i].coverpath;
    document.getElementsByClassName('songname')[i].innerText=songarray[i].songname;  
    document.getElementsByClassName('songduration')[i].innerText=songarray[i].songduration; 
});


//progress bar 
audioElement.addEventListener('timeupdate',()=>{
    var pp=audioElement.duration;
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value = progress;
    if(progress == 100)
    {
        audioElement.play();
        masterbutton.classList.remove('fa-circle-play');
        masterbutton.classList.add('fa-circle-pause');
    }
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime = (myprogress.value*audioElement.duration)/100;
})


// songiteam.forEach((element)=>{
//     console.log(element.classList);
// })

onedash.forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})
onedash.forEach((element)=>{
   
    element.addEventListener('click',(e)=>{
        
        onedash.forEach((element1)=>{
            element1.classList.remove('fa-circle-pause');
            element1.classList.add('fa-circle-play');
        })
        
        let index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`material/songs/${index}.mp3`;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterbutton.classList.remove('fa-circle-play');
        masterbutton.classList.add('fa-circle-pause');
        animation.classList.remove('hidden');
        footersong.innerText=songarray[index-1].songname;
        })
})



//play and pause the master buuton
masterbutton.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0 )
    {
        audioElement.play();
        masterbutton.classList.remove('fa-circle-play');
        masterbutton.classList.add('fa-circle-pause');
        animation.classList.remove('hidden');
        
        let str = audioElement.src.toString();
        const a=str.split('/');
        let ans =parseInt(a[a.length - 1]);
        console.log(ans);
        footersong.innerText=songarray[ans-1].songname;
       onedash[ans-1].classList.remove('fa-circle-play');
       onedash[ans-1].classList.add('fa-circle-pause');
    }
    else
    {
        audioElement.pause();
        masterbutton.classList.add('fa-circle-play');
        masterbutton.classList.remove('fa-circle-pause');
        animation.classList.add('hidden');
        onedash.forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
    }
})
// for next song
document.getElementById('nextsong').addEventListener('click',()=>{
    let str = audioElement.src.toString();
        const a=str.split('/');
        let index =parseInt(a[a.length - 1]);
    if(index==7)
    {
        index=1;
    }
    else
    {
    index+=1;
    }
    onedash.forEach((element1)=>{
        element1.classList.remove('fa-circle-pause');
        element1.classList.add('fa-circle-play');
        audioElement.src=`material/songs/${index}.mp3`;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterbutton.classList.remove('fa-circle-play');
        masterbutton.classList.add('fa-circle-pause');
        animation.classList.remove('hidden');
        footersong.innerText=songarray[index-1].songname;
        let str = audioElement.src.toString();
        const a=str.split('/');
        let ans =parseInt(a[a.length - 1]);
        console.log(ans);
        footersong.innerText=songarray[ans-1].songname;
       onedash[ans-1].classList.remove('fa-circle-play');
       onedash[ans-1].classList.add('fa-circle-pause');
    })
})

// for previous song

document.getElementById('presong').addEventListener('click',()=>{
    let str = audioElement.src.toString();
        const a=str.split('/');
        let index =parseInt(a[a.length - 1]);
    if(index==1)
    {
        index=7;
    }
    else
    {
    index-=1;
    }
    onedash.forEach((element1)=>{
        element1.classList.remove('fa-circle-pause');
        element1.classList.add('fa-circle-play');
        audioElement.src=`material/songs/${index}.mp3`;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterbutton.classList.remove('fa-circle-play');
        masterbutton.classList.add('fa-circle-pause');
        animation.classList.remove('hidden');
        footersong.innerText=songarray[index-1].songname;
        let str = audioElement.src.toString();
        const a=str.split('/');
        let ans =parseInt(a[a.length - 1]);
        console.log(ans);
       onedash[ans-1].classList.remove('fa-circle-play');
       onedash[ans-1].classList.add('fa-circle-pause');
    })
})