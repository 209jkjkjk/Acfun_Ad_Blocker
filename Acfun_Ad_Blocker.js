// ==UserScript==
// @name         Acfun Ad Helper 魔改版
// @namespace    http://tampermonkey.net/
// @icon         https://tx-free-imgs.acfun.cn/content/2020_4_5/1.5860178587515075E9.png
// @version      0.23
// @description  屏蔽暂停广告
// @author       原作者：zyl315
// @match        *://www.acfun.cn/v/*
// @exclude      *://www.acfun.cn/v/list**
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let timer = setInterval(function () {
        if ($('.pause-display').length != 0) {
            move_pause_ad();
            window.clearInterval(timer);
        }
    }, 1000);

    $(document).ready(function () {
        setTimeout(function () {
            window.clearInterval(timer);
        }, 8000);
    });
})();

function move_pause_ad() {
    let pause_ad = $('.pause-display')
    pause_ad.css({
        'display': 'none'
    });
}
