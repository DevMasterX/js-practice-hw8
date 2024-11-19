import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTimeKey = 'videoplayer-current-time';

const timeToPlay = Number(localStorage.getItem(currentTimeKey)) || 0;

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  id: 236203659,
  width: 640,
});

const onPlay = function (data) {
  localStorage.setItem(currentTimeKey, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(timeToPlay)
  .then(function (seconds) {
    console.log(`Видео перемотано к: ${seconds} секундам`);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.error(
          'Ошибка: Указанное время выходит за пределы длины видео.'
        );
        break;

      default:
        console.error('Произошла ошибка при установке времени:', error);
        break;
    }
  });
