// let audioElement = new Audio("1.mp3");
// audioElement.play();

// function Play1(document.getElementById("pp"), onclick)
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let myProgressBar = document.getElementById("myProgressBar");
let masterPlay = document.getElementById("masterPlay");
let gif =  document.getElementById("gif");

let songs = [
    {songName:"Salame-e-Ishq" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"} ,
    {songName:"Salame-e-Ishq" , filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"} ,
    {songName:"Salame-e-Ishq" , filePath:"songs/3.mp3" , coverPath:"covers/3.jpg"} ,
    {songName:"Salame-e-Ishq" , filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"} ,
    {songName:"Salame-e-Ishq" , filePath:"songs/5.mp3" , coverPath:"covers/5.jpg"} ,
    {songName:"Salame-e-Ishq" , filePath:"songs/6.mp3" , coverPath:"covers/6.jpg"} ,
    {songName:"Salame-e-Ishq" , filePath:"songs/7.mp3" , coverPath:"covers/7.jpg"} ,
    {songName:"Salame-e-Ishq" , filePath:"songs/8.mp3" , coverPath:"covers/8.jpg"} ,
    {songName:"Salame-e-Ishq" , filePath:"songs/9.mp3" , coverPath:"covers/9.jpg"} ,
    {songName:"Salame-e-Ishq" , filePath:"songs/10.mp3" , coverPath:"covers/10.jpg"} 
];

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity = 1;
    }
    
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
} )

// listen to events
audioElement.addEventListener('timeupdate' , ()=> {
    // console.log('timeupdate');
    //update progress bar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

