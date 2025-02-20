console.log("Welcome")
let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif  = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
{songName: "Tu Hai To Phr Or Kya Chahiya", filepath: "songs/1.mp3", coverpath: "cover/11.webp"},
{songName: "Gasolina", filepath: "songs/2.mp3", coverpath: "cover/cgasolina.jpg" },
{songName: "Let me Love you", filepath:"songs/3.mp3", coverpath:"cover/cletme.jpg"},
{songName: "Obsessed",filepath:"songs/4.mp3",coverpath:"cover/cobbsessed.jpg" },
{songName: "Unstoppable",filepath:"songs/5.mp3",coverpath:"cover/cunstoo.jpg" },
{songName: "Yadav-Brand", filepath:"songs/6.mp3",coverpath:"cover/cy.jpg"},
{songName: "Jaaniya", filepath:"songs/7.mp3",coverpath:"cover/download.jpg" },
]

songItems.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// play/pause button

masterplay.addEventListener('click',()=>{
  if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
})

// listen to events
audioElement.addEventListener('timeUpdate',()=>{
    //  update seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
 progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
  audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');

  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
   })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
    songIndex = 0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex = 0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
})