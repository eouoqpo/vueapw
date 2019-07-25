(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = () => {
            // 设计稿是基于1080的尺寸做的
            var clientWidth = docEl.clientWidth || window.innerWidth;
            docEl.style.fontSize = clientWidth * (50 / 540) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
