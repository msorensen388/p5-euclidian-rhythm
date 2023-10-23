// this import isn't actually necessary but resolves eslint error
// import p5 from 'p5';
import { getPattern } from './euclidArray';


export const s = sketch => {

  const canvasWidth = 500,
    canvasHeight = 500,
    tempo = 120,
    pulses = 3,
    steps = 8,
    noteInterval = tempo / 60 * 1000;

  let isStarted = false,
    interval,
    index = 0,
    pattern,
    kick,
    snare,
    hihat;

  const playNext = () => {
    kick.play();

    if (index < pattern.length - 1) {
      index++;
    } else {
      index = 0;
    }
  };

  sketch.mouseClicked = () => {

    isStarted = !isStarted;

    console.log(isStarted);
    if (isStarted) {
      interval = setInterval(playNext, noteInterval);
    } else {
      clearInterval(interval);
    }
  };

  sketch.setup = () => {
    sketch.createCanvas(canvasWidth, canvasHeight);
    console.log('asdf');
    pattern = getPattern(pulses, steps);

    kick = sketch.createAudio('./samples/LM1KickCl.mp3');
    // snare = sketch.createAudio('/static/samples/LM1Snare.mp3');
    // hihat = sketch.createAudio('samples/LM1Hat.mp3');
  };

  sketch.draw = () => {

  };
};

