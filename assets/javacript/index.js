var btnBars = document.querySelector(".header__btn-bars");
var sidebar = document.querySelector(".grid__column--sidebar");
var main = document.querySelector(".main");

var api_key = "AIzaSyDFVQ_X8gKo2Qg5RR07Yv0gB3FmWWLm1ao";
var video_http = "https://www.googleapis.com/youtube/v3/videos?";
var channel_http = "https://www.googleapis.com/youtube/v3/channels?";

var videoContainer = document.querySelector(".list-videos");
btnBars.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    main.classList.toggle("large-main");
};

// Fetch youtube api
fetch(
    video_http +
        new URLSearchParams({
            key: api_key,
            part: "snippet",
            chart: "mostPopular",
            maxResults: 20,
            regionCode: "IN",
        })
)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        data.items.forEach((item) => {
            getChannelIcon(item);
        });
    })
    .catch((err) => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(
        channel_http +
            new URLSearchParams({
                key: api_key,
                part: "snippet",
                id: video_data.snippet.channelId,
            })
    )
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
        });
};

const makeVideoCard = (video_data) => {
    videoContainer.innerHTML += `
        <div class="col-md-3 video-item">
            <div class="thumbnail">
                <div class="thumbnail__image">
                    <img src="${video_data.snippet.thumbnails.high.url}">
                </div>
                <div class="thumbnail__time-video">
                    <span>9:46</span>
                </div>
                <a href="./../../detail.html" class="video-item-zoom" data-id="${video_data.id}" style="text-decoration: none">
                    <div class="thumbnail">
                        <div class="thumbnail__image">
                            <img src="${video_data.snippet.thumbnails.high.url}">
                        </div>
                        <div class="thumbnail__time-video">
                            <span>9:46</span>
                        </div>
                    </div>
                    <div class="video__title">
                        <div class="image-channel">
                            <img src="${video_data.channelThumbnail}" alt="">
                        </div>
                        <div class="video__intro">
                            <div class="video__intro--description">
                                <span>${video_data.snippet.title}</span>
                            </div>
                            <div class="video__intro--channel">
                                <span>${video_data.snippet.channelTitle}</span>
                            </div>
                            <div class="viewtime">
                                <span class="video__intro--views">173k views</span>
                                <span class="dots">
                                    <div class="dot">.</div>
                                </span>
                                <span class="video__intro--time-public">3 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div class="" style="padding:8px">
                        <div class="watch-add-btn--wrap" style="margin-bottom: 8px">
                            <div class="watch-add-btn watch-later" style="">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 20px; height: 20px;"><g class="style-scope yt-icon"><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z" class="style-scope yt-icon"></path></g></svg>
                                <span>WATCH LATER</span>
                            </div>
                        </div>
                        <div class="watch-add-btn--wrap">
                            <div class="watch-add-btn watch-later" style="">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 20px; height: 20px;"><g class="style-scope yt-icon"><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z" class="style-scope yt-icon"></path></g></svg>
                                <span>ADD TO QUEUE</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="video__title">
                <div class="image-channel">
                    <img src="${video_data.channelThumbnail}" alt="">
                </div>
                <div class="video__intro">
                    <div class="video__intro--description">
                        <span>${video_data.snippet.title}</span>
                    </div>
                    <div class="video__intro--channel">
                        <span>${video_data.snippet.channelTitle}</span>
                    </div>
                    <div class="viewtime">
                        <span class="video__intro--views">173k views</span>
                        <span class="dots">
                            <div class="dot">.</div>
                        </span>
                        <span class="video__intro--time-public">3 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

$(document).on("click", ".video-item-zoom", function () {
    var videoItem = $(this).attr('data-id');
    var imageChannel = $(this).find('.image-channel img').attr('src');
    var titleVideo = $(this).find('.video__intro--description span').text();
    var channelName = $(this).find('.video__intro--channel span').text();
    var formSave = {
        videoItem,
        imageChannel,
        titleVideo,
        channelName
    }
    console.log(formSave);
    localStorage.setItem('InfoVideo', JSON.stringify(formSave));
});


