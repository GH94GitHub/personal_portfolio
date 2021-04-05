/*====================
; Title: Site JS
; Author: George Henderson
; Date: 29 March 2021
; Description: This is the js for the Home page.
;====================*/

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    // element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}
function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.0){
            clearInterval(timer);
            // element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 15);
}

 $(function() {
    fadeIn($('#footer')[0]);
});