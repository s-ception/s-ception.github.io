const bgMusic = document.getElementById("bg-music");
const clickSfx = document.getElementById("click-sfx");

bgMusic.volume = 0.08;
clickSfx.volume = 0.02;

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
