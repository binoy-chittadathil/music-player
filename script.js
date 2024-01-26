let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrlIcon=document.getElementById("ctrlIcon");
let songName=document.getElementById("songName");
let artistName=document.getElementById("artistName");

let songList=[
    "media/song1.mp3",
    "media/song2.mp3",
    "media/song3.mp3"
]
let songArtistName=[
    {songName:'aaromal...',artistName:'binoy'},
    {songName:'kalam nammil...',artistName:'sachin'},
    {songName:'aaru nee...',artistName:'megha'}
]

let songListIndex=0

song.addEventListener('timeupdate',()=>{
    progress.max=song.duration;
    progress.value=song.currentTime;
})
progress.addEventListener('input',()=>{
    song.currentTime=progress.value
})

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play")
    }else{
        song.play();
        songName.innerText=songArtistName[songListIndex].songName;
        artistName.innerText=songArtistName[songListIndex].artistName;
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause")
    }
    
}
function next(){
    songListIndex+=1;
    if(songListIndex<songList.length){
        song.src=songList[songListIndex];
        songName.innerText=songArtistName[songListIndex].songName;
        artistName.innerText=songArtistName[songListIndex].artistName;
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }else{
        song.src=songList[songList.length-1];
        song.play();
    }
}
function previous(){
    songListIndex-=1;
    if(songListIndex>=songList.length){
        song.src=songList[songList.length-1];
        songName.innerText=songArtistName[songList.length-1].songName;
        artistName.innerText=songArtistName[songList.length-1].artistName;
        song.play();
    }
    else if(songListIndex<0){
        song.src=songList[0];
        songName.innerText=songArtistName[0].songName;
        artistName.innerText=songArtistName[0].artistName;
        song.play();
    }else{
        song.src=songList[songListIndex];
        songName.innerText=songArtistName[songListIndex].songName;
        artistName.innerText=songArtistName[songListIndex].artistName;
        song.play();
    }
    
}