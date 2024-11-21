window.addEventListener("load", function () {
  const song = document.querySelector("#song");
  const playButton = document.querySelector(".player-play");
  const prevButton = document.querySelector(".player-prev");
  const nextButton = document.querySelector(".player-next");
  const playerDuration = document.querySelector(".player-duration");
  const remaining = document.querySelector(".player-remaining");
  const progressBar = document.querySelector("#progress-bar");
  const playerImage = document.querySelector(".player-image");
  const faPlay = document.querySelector(".fa-play");
  let playing = true;
  const list = ["music1.mp3", "music2.mp3", "music3.mp3"];
  let songIndex = 0;
  playButton.addEventListener("click", handleMusicPlay);
  function handleMusicPlay(e) {
    if (playing) {
      song.play();
      playing = false;
      playerImage.classList.add("is-playing");
      playButton.classList.remove("fa-play");
      playButton.classList.add("fa-pause");
    } else {
      song.pause();
      playing = true;
      playerImage.classList.remove("is-playing");
      faPlay.classList.remove("fa-pause");
      playButton.classList.add("fa-play");
    }
  }
  nextButton.addEventListener("click", function () {
    handleChangeMusic(1);
  });
  prevButton.addEventListener("click", function () {
    handleChangeMusic(-1);
  });
  song.addEventListener("ended", function () {
    handleChangeMusic(1);
  });
  function handleChangeMusic(dir) {
    if (dir === 1) {
      // next music
      songIndex++;
      if (songIndex > list.length - 1) {
        songIndex = 0;
      }
      //list[songIndex]
      song.setAttribute("src", `./mp3/${list[songIndex]}`);
      playing = true;
      handleMusicPlay();
    } else if (dir === -1) {
      songIndex--;
      if (songIndex < 0) {
        songIndex = list.length - 1;
      }
      song.setAttribute("src", `./mp3/${list[songIndex]}`);
      playing = true;
      handleMusicPlay();
    }
  }
  function displayTimer() {
    // const duration = song.duration;
    // const currentTime = song.currentTime;
    const { duration, currentTime } = song;
    progressBar.max = duration;
    progressBar.value = currentTime;
    // const minutes = Math.floor(duration / 60);
    // const seconds = parseInt(duration - minutes * 60);
    // console.log(seconds);
    // if (!duration) {
    //   playerDuration.textContent = "00:00";
    // } else {
    //   playerDuration.textContent = formatTimer(duration);
    // }
    playerDuration.textContent = formatTimer(duration);
    remaining.textContent = formatTimer(currentTime);
    // console.log(currentTime);
  }
  function formatTimer(e) {
    const minutes = Math.floor(e / 60);
    const seconds = parseInt(e - minutes * 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }
  progressBar.addEventListener("change", handleChangeProgressBar);
  function handleChangeProgressBar() {
    song.currentTime = progressBar.value;
  }
  displayTimer();
  const timer = setInterval(displayTimer, 500);
});
