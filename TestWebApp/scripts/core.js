var canPlayPause = true;

$(document).ready(function () {
    var p = $("#video_player");
    p.prop("volume", 1)

    $(".video_container > .overlay").click(function (e) {
        playPause($(this), p);
    });

    document.addEventListener("keyup", function (e) {
        if (e.keyCode == 75)
            playPause($(".video_container > .overlay").get(0), p);
    });
});

function playPause(el, player)
{
    if (canPlayPause)
    {
        canPlayPause = false;

        var playVideo = $(el).data("play");

        if (playVideo == true) {
            $(el).stop().animate({
                opacity: 0
            }, 500, function () {
                player.get(0).play();
                $(el).html("<i class=\"fa fa-pause-circle-o col-xs-12\" aria-hidden=\"true\"></i>");
                $(el).data("play", false);
                canPlayPause = true;
            });
        }
        else {
            player.get(0).pause();

            $(el).stop().animate({
                opacity: 1
            }, 200, function () {
                $(el).html("<i class=\"fa fa-play-circle-o col-xs-12\" aria-hidden=\"true\"></i>");
                $(el).data("play", true);
                canPlayPause = true;
            });
        }
    }
}