function onPlayerReady(e) {
    var t = e.target.getVideoData(),
        a = t.video_id + ":" + t.title;
    e.target.ulabel = a, console.log(a + " is ready!")
}

function onPlayerError(e) {
    console.log("[onPlayerError]")
}

function onPlayerStateChange(e) {
    var t = e.target.ulabel;
    e.data == YT.PlayerState.PLAYING && (console.log({
        event: "youtube",
        action: "play:" + e.target.getPlaybackQuality(),
        label: t
    }), pauseOthersYoutubes(e.target)), e.data == YT.PlayerState.PAUSED && console.log({
        event: "youtube",
        action: "pause:" + e.target.getPlaybackQuality(),
        label: t
    }), e.data == YT.PlayerState.ENDED && console.log({
        event: "youtube",
        action: "end",
        label: t
    }), e.data == YT.PlayerState.BUFFERING && (e.target.uBufferingCount ? ++e.target.uBufferingCount : e.target.uBufferingCount = 1, console.log({
        event: "youtube",
        action: "buffering[" + e.target.uBufferingCount + "]:" + e.target.getPlaybackQuality(),
        label: t
    }), YT.PlayerState.UNSTARTED == e.target.uLastPlayerState && pauseOthersYoutubes(e.target)), e.data != e.target.uLastPlayerState && (console.log(t + ":state change from " + e.target.uLastPlayerState + " to " + e.data), e.target.uLastPlayerState = e.data)
}

function initYoutubePlayers() {
    ytplayerList = null, ytplayerList = [];
    for (var e = document.getElementsByTagName("iframe"), t=0;t<e.length;t++) /youtube.com\/embed/.test(e[t].src) && (ytplayerList.push(initYoutubePlayer(e[t])), console.log("create a Youtube player successfully"))
}

function pauseOthersYoutubes(e) {
    if (e)
        for (var t = ytplayerList.length; t--;) ytplayerList[t] && ytplayerList[t] != e && ytplayerList[t].pauseVideo()
}

function initYoutubePlayer(e) {
    console.log("have youtube iframe");
    var t = new YT.Player(e, {
        events: {
            onStateChange: onPlayerStateChange,
            onError: onPlayerError,
            onReady: onPlayerReady
        }
    });
    return e.ytp = t, t
}

function onYouTubeIframeAPIReady() {
    console.log("YouTubeIframeAPI is ready"), initYoutubePlayers()
}
var ytplayerList, tag = document.createElement("script");
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // JavaScript Document