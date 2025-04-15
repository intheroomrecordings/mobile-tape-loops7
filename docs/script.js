const players = document.querySelectorAll('.loop-player');

players.forEach(player => {
  const loopNum = player.getAttribute('data-loop');
  const playBtn = player.querySelector('.play-btn');
  const stopBtn = player.querySelector('.stop-btn');
  const volumeSlider = player.querySelector('.volume-slider');
  const audio =  Audio(`audio/loop${loopNum}.mp3`);
  audio.loop = true;

  playBtn.addEventListener('click', () => {
    audio.play();
  });

  stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
  });

  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
  });
});
