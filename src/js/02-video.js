import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const lsKey = "videoplayer-current-time"
const iframe = document.querySelector("iframe")
const player = new Player(
    iframe
);
player.on('timeupdate', throttle(videoTime, 1000));
function videoTime (e){
    localStorage.setItem(lsKey, e.seconds)
}


player.setCurrentTime(seconds()).catch(function(error) {
  console.log(error)
});
function seconds (e){
    return localStorage.getItem(lsKey)
} 
