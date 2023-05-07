let menubtn = document.querySelector(".yt-menu-btn");
let sidebar = document.querySelector(".yt-side-bar");
let videoscontainer = document.querySelector(".yt-videos-container");


menubtn.onclick = function() {
    sidebar.classList.toggle("resize-yt-side-bar");
    videoscontainer.classList.toggle("widen-yt-videos-container");
}