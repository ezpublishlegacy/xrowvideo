/* do: set player options */

$(document).ready(function(){
    var playerVideo = $(".leanback-player-video");
    var initSubtitle = false;
    var defaultSubtitleLanguage = 'de';
    if( playerVideo.is("[data-init_sub]") && playerVideo.data('init_sub') == "1") {
        initSubtitle = true;
    }
    if( playerVideo.is("[data-def_lang]") ) {
        defaultSubtitleLanguage = playerVideo.data('def_lang');
    }
    LBP.options = {
        focusFirstOnInit: false, // focus first (video) player on initialization
        showSources: true, // if switch between available video qualities should be possible
        defaultTimerFormat: "PASSED_HOVER_REMAINING", // default timer format, could be "PASSED_DURATION" (default), "PASSED_REMAINING", "PASSED_HOVER_REMAINING"
        defaultSubtitleLanguage: defaultSubtitleLanguage,
        defaultLanguage: 'de',
        showSubtitles: true,
        initSubtitle: initSubtitle,
        subtitles: {show: true, ckbx: true},
        hideControls: false
    };
});

/*Feature #5636*/
$(document).ready(function(){
    function supports_video() { return !!document.createElement('video').canPlayType; }
    if (!supports_video()) 
    {
        $('.video_with_html5').hide();
        $('.video_with_nohtml5').css("display","block");
    }
   
    $('.video-download').bind('click', function()
    {
           $('.download-info').toggle();
           $('.download-info').css("float","left");
           $('.download-info').css("cursor","hand");
    });
    
    var bro=$.browser;
    var binfo="";
    if(navigator.appVersion.indexOf("MSIE") !== -1) {binfo="Microsoft Internet Explorer";}
    //if(bro.mozilla) {binfo="Mozilla Firefox";}
    //if(bro.safari) {binfo="Apple Safari";}
    //if(bro.opera) {binfo="Opera";}
    if(binfo == "Microsoft Internet Explorer")
    {
        $('.extra-flash-video').attr("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");
    }
});
