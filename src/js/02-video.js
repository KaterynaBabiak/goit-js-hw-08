import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player');

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

player.ready().then(function() {
  const playbackTime = localStorage.getItem('videoplayer-current-time');
  if (playbackTime) {
    player.setCurrentTime(playbackTime);
  }
});