let audioPlayer;

function setup() {
  noCanvas();
  audioPlayer = createAudio('deanmartin.wav');

  audioPlayer.showControls();
}

function draw() {
  // Set playback speed to 1-2x normal based on mouse position
  audioPlayer.speed(1 + mouseX / windowWidth);
}
