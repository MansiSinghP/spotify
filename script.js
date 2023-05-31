console.log("Welcome to Spotify");
let audioElement= new Audio('song1.mp3');
//initialize the variables
let songIndex=0;
let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItem=Array.from(document .getElementsByClassName("songItem"));
let songs=[
    {songName:"paint it red", filepath:"C:\Users\Manshi computers\Downloads\song1.mp3", coverpath:"cover1.jpg"},
    {songName:"Scars to you beautiful", filepath:"C:\Users\Manshi computers\Downloads\song2.mp3", coverpath:"cover2.jpg"},
    {songName:"girls like you", filepath:"C:\Users\Manshi computers\Downloads\song3.mp3", coverpath:"cover3.jpg"},
    {songName:"Dandelions", filepath:"C:\Users\Manshi computers\Downloads\song4.mp3", coverpath:"cover4.jpg"},
    {songName:"Night Changes", filepath:"C:\Users\Manshi computers\Downloads\song5.mp3", coverpath:"cover5.jpg"}
]

songItem.forEach((element,i )=> {
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].songName;
    
});


//audioElement.play();

//click play/pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`song${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        //e.target.classList.remove('fa-circle-play');
        //e.target.classList.add('fa-circle-pause');
       /* audioElement.src='song3.mp3';
        audioElement.currentTime=0;
        audioElement.play();*/
        console.log(e.target);
    })
})