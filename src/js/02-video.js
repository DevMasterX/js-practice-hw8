import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  id: 236203659,
  width: 640,
});

player.on('pause', function () {
  console.log('played the video!');
});
