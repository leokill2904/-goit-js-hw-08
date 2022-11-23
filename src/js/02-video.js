import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// Select with the DOM API
const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

const KEY_TIME = 'videoplayer-current-time';
timeToSet();

function timeToUpdate({ seconds }) {
  localStorage.setItem(KEY_TIME, seconds);
}

function timeToSet() {
  const currentTime = localStorage.getItem(KEY_TIME);

  if (currentTime) {
    iframePlayer.setCurrentTime(currentTime);
  }
}

iframePlayer.on('timeupdate', throttle(timeToUpdate, 1000));
