/*====================
; Title: Presentations JS
; Author: George Henderson
; Date: 29 March 2021
; Description: This is the js for the presentations page.
;====================*/

// Index of name in array corresponds to the same index URL
var presentationNames = [
    "Representational State Transfer",
    "RESTful APIs",
    "SOAP"
];
// Relative URLs to videos
var baseURL = "./restful-api-presentations/";
var presentationURLs = [
    baseURL + "henderson_presentation_1.3.mp4",
    baseURL + "henderson_presentation_2.2.mp4",
    baseURL + "henderson_presentation_3.3.mp4"
];

// Index for the video currently displayed
var videoIndex = 0;
/* Function: Updates video playing based on the current videoIndex */
function updateVideo() {
    var $title = $("#videoTitle");
    var $video = $("#video");
    var $source = $("#video source");
    var $positionText = $("#videoPosition");

    $title.text(presentationNames[videoIndex]);
    $positionText.text(videoIndex + 1);
    $source.attr("src", presentationURLs[videoIndex]);
    $video[0].load();
}
// Previous Button
$(".videoTitleRow .previous").click(function() {
    if (videoIndex > 0) {
        let $sidebarVideos = $("#videosSidebar video");
        // Subtract one from videoIndex
        videoIndex--;
        $sidebarVideos.removeClass("activeVideo");
        $sidebarVideos[videoIndex].classList.add("activeVideo");
        updateVideo();
    }
});
// Next Button
$(".videoTitleRow .next").click(function() {
    if (videoIndex < presentationURLs.length - 1) {
        let $sidebarVideos = $("#videosSidebar video");
        // Add one to videoIndex
        videoIndex++;
        $sidebarVideos.removeClass("activeVideo")
        $sidebarVideos[videoIndex].classList.add("activeVideo")
        updateVideo();
    }
});
// Set up event Handlers for videos in sidebar
for (let i = 0; i < presentationURLs.length; i++) {
    $("#videosSidebar video")[i].addEventListener("click", function() {
        videoIndex = i;
        $("#videosSidebar video").removeClass("activeVideo");
        $(this).addClass("activeVideo");        
        updateVideo();
    });
}

$(function() {
    // Change the video position
    $("#videoPosition").after("/" + presentationNames.length);
})