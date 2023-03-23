// ==UserScript==
// @name        New script - 172.16.110.252
// @namespace   Violentmonkey Scripts
// @match       https://172.16.110.252:4444/webconsole/webpages/*
// @grant       none
// @version     1.0
// @author      -
// @description 23.3.2023, 18:52:14
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==
var $ = unsafeWindow.jQuery;

;(function ($, window) {

var intervals = {};
var removeListener = function(selector) {

    if (intervals[selector]) {

        window.clearInterval(intervals[selector]);
        intervals[selector] = null;
    }
};
var found = 'waitUntilExists.found';


$.fn.waitUntilExists = function(handler, shouldRunHandlerOnce, isChild) {

    var selector = this.selector;
    var $this = $(selector);
    var $elements = $this.not(function() { return $(this).data(found); });

    if (handler === 'remove') {

        removeListener(selector);
    }
    else {

        $elements.each(handler).data(found, true);

        if (shouldRunHandlerOnce && $this.length) {

            removeListener(selector);
        }
        else if (!isChild) {

            intervals[selector] = window.setInterval(function () {

                $this.waitUntilExists(handler, shouldRunHandlerOnce, true);
            }, 500);
        }
    }

    return $this;
};

}(jQuery, window));

function setTitletoinnerHTML() {
      $('.two-line-ellipses').each(function(i, obj) {if ($(obj).attr('title') !== undefined && $(obj).attr('title')) {$(obj).text($(obj).attr('title'))}});
      $('.fg-rule-name').each(function(i, obj) {if ($(obj).attr('title') !== undefined && $(obj).attr('title')) {$(obj).text($(obj).attr('title'))}});
      $('.fg-rule-subtitle').each(function(i, obj) {if ($(obj).attr('title') !== undefined && $(obj).attr('title')) {$(obj).text($(obj).attr('title'))}});
      console.log("script applied");
}

function setHTTPSHeading() {
  $('[id$="th-httpscategoryaction-liner"]').text("HTTPS");
}

function setHTTPHeading() {
  $('[id$="th-httpcategoryaction-liner"]').text("HTTP");
}


$('.two-line-ellipses').waitUntilExists(setTitletoinnerHTML);
$('[id$="th-httpscategoryaction-liner"]').waitUntilExists(setHTTPSHeading);
$('[id$="th-httpcategoryaction-liner"]').waitUntilExists(setHTTPHeading);






