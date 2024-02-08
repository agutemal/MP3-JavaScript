
let musicPlayer=document.getElementById("audio");
let duracion= ((musicPlayer.duration)/60).toFixed(2);

const songDurationStart=(totalSecond)=>{
  let timeStarSong=document.getElementById("timeStarSong");
  let minute=0;
  let second=0;
  let secondT=0;
  while (secondT<=totalSecond) {
    second+=1;
    secondT+=1;
    console.log(secondT);
    if (second==60) {
      minute+=1;
      second=0;
    }
    setTimeout(() => {
      //timeStarSong.innerHTML=minute+":"+second;
      console.log(minute+":"+second)
    }, "1000");
    
  }
}

songDurationStart(65)




let playPause=document.getElementById("play")




playPause.addEventListener("click",()=>{
  if (musicPlayer.paused || musicPlayer.ended) {
    playPause.querySelector(".playBtn").classList.toggle("hide");
    playPause.querySelector(".pauseBtn").classList.toggle("hide");
    musicPlayer.play();
  }else{
    musicPlayer.pause();
    playPause.querySelector(".playBtn").classList.toggle("hide");
    playPause.querySelector(".pauseBtn").classList.toggle("hide");
    
  }
})