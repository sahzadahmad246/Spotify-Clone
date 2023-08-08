// creating songs list
// intiatlising variables

let songIndex = 0;
let currentMusicFilePath;
let audioElement1 = new Audio();
let currentSongIndex = 0;
let audioElement = new Audio(currentMusicFilePath);
// let audioElement1 = new Audio(nextpreSong);
let bottomPlay = document.getElementById("masterPlay2");
// let bottompPlay = document.getElementsByClassName("masterPlay2");
let currentlyPlaying = new Audio("../music/agarTum.m4a");

let progressBar = document.getElementById("my-progress");
let volumeRange = document.getElementById("volumeRange");
let soundMute = document.getElementById("sound");
let currentCover = document.getElementById("current-cover");
let currentName = document.getElementById("current-music-name");
let currentAuthorName = document.getElementById("current-author");
let NextSong = document.getElementById("nextSong");

let PreSong = document.getElementById("preSong");
let currentPlayingMusicDuration = document.getElementById("total-duration");
let intialTime = document.getElementById("0-duration");
let songItems = Array.from(document.getElementsByClassName("songItems"));
let songs = [
  {
    author: "Arijit, Alka",
    songName: "Agar Tum",
    filePath: "../music/agarTum.m4a",
    coverPath: "../images/agarTum.jpg",
  },
  {
    author: " Alan Walker",
    songName: "Alone",
    filePath: "../music/alone.m4a",
    coverPath: "../images/alone.jpg",
  },
  {
    author: "K-391 ",
    songName: "Aurora",
    filePath: "../music/aurora.m4a",
    coverPath: "../images/aurora.jpg",
  },
  {
    author: "Vicetone ",
    songName: "Barcelona Nights",
    filePath: "../music/barcelona.m4a",
    coverPath: "../images/barcelona.jpg",
  },
  {
    author: "KK ",
    songName: "Dil Ibadat",
    filePath: "../music/ibadat.m4a",
    coverPath: "../images/dilibadat.jpg",
  },
  {
    author: "Madhur Sharma ",
    songName: "Kali Kali",
    filePath: "../music/kaliKali.m4a",
    coverPath: "../images/zulfon.jpg",
  },
  {
    author: "Arijit ",
    songName: "Kesariya Tera Ishq",
    filePath: "../music/kesariya.m4a",
    coverPath: "../images/Kesariya.jpg",
  },
  {
    author: "Arijit ",
    songName: "Khairiyat",
    filePath: "../music/khairiyat.m4a",
    coverPath: "../images/khairiyat.jpg",
  },
  {
    author: "Alan Walker ",
    songName: "Play",
    filePath: "../music/play.m4a",
    coverPath: "../images/play.jpg",
  },
  {
    author: "Alan Walker ",
    songName: "Strongest",
    filePath: "../music/strongest.m4a",
    coverPath: "../images/strongest.jpg",
  },
  {
    author: "Alan Walker ",
    songName: "The Spectre",
    filePath: "../music/thespectre.m4a",
    coverPath: "../images/playlist.jpg",
  },
  {
    author: "Alan Walker ",
    songName: "Unity",
    filePath: "../music/unity.m4a",
    coverPath: "../images/unity.jpg",
  },
  {
    author: "Alan Walker ",
    songName: "Space Melody",
    filePath: "../music/melody.m4a",
    coverPath: "../images/melody.jpg",
  },
  {
    author: "Alan Walker ",
    songName: "Faded",
    filePath: "../music/faded.m4a",
    coverPath: "../images/faded.jpg",
  },
];

// let currentPlayingMusic = new Audio (currentMusic.filePath);
// console.log(currentPlayingMusic);

bottomPlay.addEventListener("click", () => {
  if (currentlyPlaying.paused) {
    audioElement.pause();
    audioElement1.pause();
    currentlyPlaying.play();
    bottomPlay.classList.remove("fa-play");
    bottomPlay.classList.add("fa-pause");
    console.log(currentMusic);
  } else {
    currentlyPlaying.pause();
    audioElement1.pause();
    bottomPlay.classList.remove("fa-pause");
    bottomPlay.classList.add("fa-play");
  }
});

// getting cureent playing music duration
currentlyPlaying.addEventListener("loadedmetadata", () => {
  let durationInSeconds = currentlyPlaying.duration;

  // Converting the duration to a readable format
  let minutes = Math.floor(durationInSeconds / 60);
  let seconds = Math.floor(durationInSeconds % 60);
  let durationFormatted = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  currentPlayingMusicDuration.textContent = durationFormatted;
  console.log(durationFormatted);
});

currentlyPlaying.addEventListener("timeupdate", function () {
  var MusicCurrentTime = currentlyPlaying.currentTime;
  var intialMinutes = Math.floor(MusicCurrentTime / 60);
  var intialSeconds = Math.floor(MusicCurrentTime % 60);
  var formattedTime =
    intialMinutes.toString().padStart(2, "0") +
    ":" +
    intialSeconds.toString().padStart(2, "0");
  // console.log(formattedTime);
  // console.log(currentPlayingMusic);
  intialTime.innerText = formattedTime;
});

currentlyPlaying.addEventListener("timeupdate", () => {
  let progress1 = parseInt(
    (currentlyPlaying.currentTime / currentlyPlaying.duration) * 100
  );

  progressBar.value = progress1;
});

progressBar.addEventListener("change", () => {
  currentlyPlaying.currentTime =
    (progressBar.value * currentlyPlaying.duration) / 100;
});

// // updating progressbar as per song time
// audioElement.addEventListener('timeupdate', () =>{
//   // console.log('timeupdate')
//   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//   progressBar.value = progress;
// })

// progressBar.addEventListener('change',() =>{
//   audioElement.currentTime= progressBar.value*audioElement.duration/100;
// })

// changing songs details dynamically

let RPBoxes = document.querySelectorAll(".RP-boxes");
// let RPBoxes2 = document.querySelectorAll(".R-box");

// Loop through each RP-boxes element
RPBoxes.forEach((box, index) => {
  let { coverPath, filePath, songName } = songs[index];
  // Find the img element inside the current RP-boxes element and set its src attribute
  let imgElement = box.querySelector(".RP-img img");
  let songNameEle = box.querySelector(".RPS-name .songName");
  // let RPplayIcon = box.document.querySelector('RP-box  .fa-play')
  imgElement.src = coverPath;
  songNameEle.innerHTML = songName;
});
// let Rbox = document.querySelectorAll("R-box");

// Loop through each RP-boxes element
// RPBoxes.forEach((box, index) => {
//   let { coverPath, filePath, songName } = songs[index];
//   // Find the img element inside the current RP-boxes element and set its src attribute
//   let imgElement2 = box.querySelector(".R-box img");
//   let songNameEle2 = box.querySelector(".R-box .songName");
//   // let RPplayIcon = box.document.querySelector('RP-box  .fa-play')
//   imgElement2.src = coverPath;
//   songNameEle2.innerHTML = songName;
// });

// let nextSong = songs[index]



// function loadSong(index) {
//   const song = songs[index];
//   audioElement1.src = song.filePath;
 
// }

// // Function to play the next song in the array
// function playNextSong() {
//   currentSongIndex = (currentSongIndex + 1) % songs.length; // Calculate the next song index using modulo operator
//   loadSong(currentSongIndex); // Load the next song
//   audioElement1.play(); // Start playing the audio
// }

// // Function to play the previous song in the array
// function playPreviousSong() {
//   currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Calculate the previous song index using modulo operator
//   loadSong(currentSongIndex); // Load the previous song
//   audioElement1.play(); // Start playing the audio
// }

// // Load the first song when the page loads
// loadSong(currentSongIndex);

// // Add event listeners to the "Next" and "Previous" buttons
// NextSong.addEventListener("click", playNextSong);
// PreSong.addEventListener("click", playPreviousSong);

function loadSong(index) {
  const song = songs[index];
  audioElement1.src = song.filePath;
audioElement.pause();
  // Update the current song information in the UI
  currentCover.src = song.coverPath;
  currentName.textContent = song.songName;
  currentAuthorName.textContent = song.author;

  // getting cureent playing music duration
  audioElement1.addEventListener("loadedmetadata", () => {
    let durationInSeconds = audioElement1.duration;

    // Converting the duration to a readable format
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = Math.floor(durationInSeconds % 60);
    let durationFormatted = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    currentPlayingMusicDuration.textContent = durationFormatted;
    // console.log(durationFormatted);
  });

  // setting staring time of music
  audioElement1.addEventListener("timeupdate", function () {
    var MusicCurrentTime = audioElement1.currentTime;
    var intialMinutes = Math.floor(MusicCurrentTime / 60);
    var intialSeconds = Math.floor(MusicCurrentTime % 60);
    var formattedTime =
      intialMinutes.toString().padStart(2, "0") +
      ":" +
      intialSeconds.toString().padStart(2, "0");
    // console.log(formattedTime);
    // console.log(currentPlayingMusic);
    intialTime.innerText = formattedTime;
  });

  // updating progress bar as per audioElement1
  audioElement1.addEventListener("timeupdate", () => {
    let progress = parseInt(
      (audioElement1.currentTime / audioElement1.duration) * 100
    );
    progressBar.value = progress;
  });

// skipping forward/backward audioElement1 as per progressbar value
  progressBar.addEventListener("change", () => {
    audioElement1.currentTime =
      (progressBar.value * audioElement1.duration) / 100;
  });

  // handling volume bar 
  volumeRange.addEventListener("input", () => {
    // Get the selected volume from the input range (between 0 and 100)
    const volumeValue = volumeRange.value;

    // Convert the value to a float between 0 and 1 (required by audio element)
    const volumePercentage = volumeValue / 100;

    // Set the volume of the audio element to the selected value
    audioElement1.volume = volumePercentage;

    if (volumePercentage == 0) {
      soundMute.classList.remove("fa-volume-high");
      soundMute.classList.add("fa-volume-xmark");
    } else {
      soundMute.classList.add("fa-volume-high");
      soundMute.classList.remove("fa-volume-xmark");
    }
  });

  soundMute.addEventListener("click", () => {
    if ( audioElement1.volume > 0) {
      audioElement1.volume = 0;
      soundMute.classList.remove("fa-volume-high");
      soundMute.classList.add("fa-volume-xmark");
      volumeRange.value = 0;
    } else {
      audioElement1.volume = 0.5; // Set the volume to 50%
      soundMute.classList.add("fa-volume-high");
      soundMute.classList.remove("fa-volume-xmark");
      volumeRange.value = 50;
    }
  });
}

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audioElement1.play();
}

function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audioElement1.play();
}

loadSong(currentSongIndex);

NextSong.addEventListener("click", playNextSong);
PreSong.addEventListener("click", playPreviousSong);

NextSong.addEventListener("click", () => {
  audioElement.pause();
  currentlyPlaying.pause();
  bottomPlay.classList.remove("fa-play");
  bottomPlay.classList.add("fa-pause");
});
PreSong.addEventListener("click", () => {
  audioElement.pause();
  currentlyPlaying.pause();
  bottomPlay.classList.remove("fa-play");
  bottomPlay.classList.add("fa-pause");
});


let playButtons = document.querySelectorAll(".fa-play");
// console.log(playButtons);
let currentAudio = null;
let currentButton = null;
var currentMusic = null;
var currentCoverPath = null;
var currentMusicName = null;

// console.log(currentMusic);
function handleButtonClick(index) {
  currentMusic = songs[index];
  currentMusicFilePath = currentMusic.filePath;
  currentCoverPath = currentMusic.coverPath;
}

// console.log(currentMusicFilePath);
// console.log(audioElement)
// console.log(currentCoverPath);

playButtons.forEach((button, index) => {
  let audioElement = new Audio(songs[index].filePath);

  audioElement.addEventListener("timeupdate", () => {
    let progress = parseInt(
      (audioElement.currentTime / audioElement.duration) * 100
    );

    progressBar.value = progress;
  });

  progressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (progressBar.value * audioElement.duration) / 100;
  });

  // handling song master play pause
  let isAudioPaused = true; // Variable to keep track of audio state
  button.addEventListener("click", () => {
    if (audioElement.paused) {
      if (currentAudio) {
        currentAudio.pause();
        currentButton.classList.remove("fa-pause");
        currentButton.classList.add("fa-play");
      }

      audioElement.play();
      button.classList.remove("fa-play");
      button.classList.add("fa-pause");
      currentAudio = audioElement;
      currentButton = button;
      currentMusic = songs[index];
      currentCoverPath = currentMusic.coverPath;
      currentMusicName = currentMusic.songName;
      // console.log(currentSongName);
    } else {
      audioElement.pause();
      audioElement.currentTime = 0;
      button.classList.remove("fa-pause");
      button.classList.add("fa-play");
      currentAudio = null;
      currentButton = null;
      currentMusic = null;
      currentCoverPath = null;
      // currentSongName = null;
      // bottomPlay.addEventListener('click', ()=>{
      //   button.classList.remove("fa-pause");
      //   button.classList.add("fa-play");
      // })
    }

    if (currentMusic) {
      let currentMusicName = currentMusic.songName;
      let currentCoverPath = currentMusic.coverPath;
      let currentAuthor = currentMusic.author;
      let currentMusicFilePath = currentMusic.filePath;
      let currentPlayingMusic = new Audio(currentMusicFilePath);
      // console.log(currentPlayingMusic);
      currentCover.src = currentCoverPath;
      currentName.textContent = currentMusicName;
      currentAuthorName.textContent = currentAuthor;
      // console.log(currentPlayingMusic);

      // getting cureent playing music duration
      currentPlayingMusic.addEventListener("loadedmetadata", () => {
        let durationInSeconds = currentPlayingMusic.duration;

        // Converting the duration to a readable format
        let minutes = Math.floor(durationInSeconds / 60);
        let seconds = Math.floor(durationInSeconds % 60);
        let durationFormatted = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
        currentPlayingMusicDuration.textContent = durationFormatted;
        // console.log(durationFormatted);
      });

      // setting staring time of music
      audioElement.addEventListener("timeupdate", function () {
        var MusicCurrentTime = audioElement.currentTime;
        var intialMinutes = Math.floor(MusicCurrentTime / 60);
        var intialSeconds = Math.floor(MusicCurrentTime % 60);
        var formattedTime =
          intialMinutes.toString().padStart(2, "0") +
          ":" +
          intialSeconds.toString().padStart(2, "0");
        // console.log(formattedTime);
        // console.log(currentPlayingMusic);
        intialTime.innerText = formattedTime;

        if (currentMusic) {
        } else {
          bottomPlay.classList.add("fa-pause");
          bottomPlay.classList.add("fa-play");
        }
      });

      if (currentPlayingMusic) {
        currentlyPlaying.pause();
        audioElement1.pause();
        bottomPlay.addEventListener("click", () => {
          currentlyPlaying.pause();
        });
        // if (currentPlayingMusic) {
        //   bottomPlay.addEventListener("click", () => {

        //   });
      }
      if (currentPlayingMusic) {
        NextSong.addEventListener("click", () => {
          audioElement.pause();

          button.classList.remove("fa-pause");
          button.classList.add("fa-play");
        });
        PreSong.addEventListener("click", () => {
          audioElement.pause();

          button.classList.remove("fa-pause");
          button.classList.add("fa-play");
        });
      }
     
      if (currentPlayingMusic) {
        bottomPlay.classList.remove("fa-play");
        bottomPlay.classList.add("fa-pause");
        bottomPlay.addEventListener("click", () => {
          if (audioElement.paused) {
            audioElement.play();
            bottomPlay.classList.remove("fa-play");
            bottomPlay.classList.add("fa-pause");
          } else {
            audioElement.pause();
            bottomPlay.classList.remove("fa-pause");
            bottomPlay.classList.add("fa-play");
          }
        });

        // Add an event listener for the 'ended' event of the audio element
        audioElement.addEventListener("ended", () => {
          bottomPlay.classList.remove("fa-pause");
          bottomPlay.classList.add("fa-play");
        });
      }
      volumeRange.addEventListener("input", () => {
        // Get the selected volume from the input range (between 0 and 100)
        const volumeValue = volumeRange.value;

        // Convert the value to a float between 0 and 1 (required by audio element)
        const volumePercentage = volumeValue / 100;

        // Set the volume of the audio element to the selected value
        audioElement.volume = volumePercentage;

        if (volumePercentage == 0) {
          soundMute.classList.remove("fa-volume-high");
          soundMute.classList.add("fa-volume-xmark");
        } else {
          soundMute.classList.add("fa-volume-high");
          soundMute.classList.remove("fa-volume-xmark");
        }
      });

      soundMute.addEventListener("click", () => {
        if (audioElement.volume > 0) {
          audioElement.volume = 0;
          soundMute.classList.remove("fa-volume-high");
          soundMute.classList.add("fa-volume-xmark");
          volumeRange.value = 0;
        } else {
          audioElement.volume = 0.5; // Set the volume to 50%
          soundMute.classList.add("fa-volume-high");
          soundMute.classList.remove("fa-volume-xmark");
          volumeRange.value = 50;
        }
      });
      // if (currentPlayingMusic) {
      //   NextSong.addEventListener("click", () => {
      //     audioElement.pause();
      //   });

      //   // console.log(NextSong);
      // }
    }
  });
  // console.log(audioElement)
});
// console.log(audioElement);
// console.log(currentMusic);
