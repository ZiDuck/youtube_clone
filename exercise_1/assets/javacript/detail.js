var videoPlayer = document.querySelector(".video-player");
var infoVideo = JSON.parse(localStorage.getItem("InfoVideo"));

var videoTittle = document.querySelector(".video-info__title");
var avatarChannel = document.querySelector(".video-info__channel--image");
var nameChannel = document.querySelector(".video-info__channel--name");

videoPlayer.innerHTML = `
    <iframe width="100%" height="480" src="https://www.youtube.com/embed/${infoVideo.videoItem}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen>
    </iframe>
`;
console.log(infoVideo);
videoTittle.innerHTML = `<span>${infoVideo.titleVideo}</span>`;
avatarChannel.innerHTML = `<img src='${infoVideo.imageChannel}'></img>`;
nameChannel.innerHTML = `<span>${infoVideo.channelName}</span>`;