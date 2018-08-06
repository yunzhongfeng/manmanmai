$(function(){
    // 公共js
    /* 返回顶部 */
    goTop();

    function goTop() {
        var goTop = document.getElementById('goTop');
        // 获取被卷去的高度   scroll 监听滚轮事件
        window.onscroll = function () {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            //   console.log(scrollTop);
            scrollTop > 480 ? goTop.style.display = "block" : goTop.style.display = "none";
        }
    }
    /* app点击消失 */
    var app = document.querySelector(".app-promotion-bar");
    var closefix = document.querySelector('.closefix');
    itcast(closefix).tap(function(){
        app.style.opacity = "0";
        // console.log(111);
    });
})