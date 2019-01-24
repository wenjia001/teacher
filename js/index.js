/*--LOADING--*/
let loadingRender = (function ($) {
    let $loadingBox = $('.loadingBox'),
        $run = $loadingBox.find('.run');

    //=>我们需要处理的图片
    // let imgList = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png", "img/10.png", "img/11.png", "img/12.png", "img/13.png", "img/14.png", "img/15.png", "img/16.png", "img/17.png", "img/18.png", "img/19.png", "img/20.png", "img/21.png", "img/22.png", "img/23.png", "img/24.png", "img/25.png", "img/26.png", "img/27.png", "img/28.png", "img/29.png", "img/30.png", "img/31.png", "img/32.png", "img/33.png", "img/34.png", "img/35.png", "img/36.png", "img/37.png", "img/38.png", "img/39.png", "img/40.png", "img/41.png", "img/42.png", "img/43.png", "img/44.png"];
    let imgList = ["img/1.png"];

    //=>控制图片加载进度
    let total = imgList.length,
        cur = 0;
    let computed = function () {
        imgList.forEach(function (item) {
            let tempImg = new Image;
            tempImg.src = item;
            tempImg.onload = function () {
                tempImg = null;
                cur++;
                runFn();
            }
        });
    };

    //=>计算滚动条加载长度
    let runFn = function () {
        $run.css('width', cur / total * 100 + '%');
        if (cur >= total) {
            let delayTimer = setTimeout(()=> {
                $loadingBox.remove();
                detailRender.init();
                clearTimeout(delayTimer);
            }, 1500);
        }
    };

    return {
        init: function () {
            $loadingBox.css('display', 'block');
            computed();
        }
    }
})(Zepto);



/*--DETAIL--*/
let detailRender = (function ($) {
    let $detailBox = $('.detailBox');

    return {
        init: function () {
            $detailBox.css('display', 'block');
            var swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                loop : true,
            });
        }
    }
})(Zepto);

loadingRender.init();
