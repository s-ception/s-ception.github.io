const bgMusic = document.getElementById("bg-music");
const clickSfx = document.getElementById("click-sfx");

bgMusic.volume = 0.4;
clickSfx.volume = 0.01;

document.addEventListener("click", () => {
  const sound = clickSfx.cloneNode();
  sound.volume = clickSfx.volume;
  sound.play();
});

bgMusic.play().catch(() => {
  const startAudio = () => {
    bgMusic.play();
    document.removeEventListener("click", startAudio);
    document.removeEventListener("keydown", startAudio);
    document.removeEventListener("touchstart", startAudio);
  };

  document.addEventListener("click", startAudio);
  document.addEventListener("keydown", startAudio);
  document.addEventListener("touchstart", startAudio);
});
