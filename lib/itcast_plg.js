function itcast(dom) {
    var obj = {
        tap: function (callback) {
            var startTime;
            var startX, startY;
            /* 按下事件 */
            dom.addEventListener("touchstart", function (e) {
                //1 判断屏幕中按下的手指不能超过1个
                if (e.touches.length > 1) {
                    return;
                }
                //2 记录按下的时间
                startTime = Date.now();
                //3 记录开始的坐标
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                //  console.log(startX,startY);
            });
            /* 离开事件 */
            dom.addEventListener("touchend", function (e) {
                //1 判断手指不能超过1个
                if (e.changedTouches.length > 1) {
                    return;
                }
                //2 记录离开的时间
                endTime = Date.now();
                //2.1 判断按下的时长
                if (endTime - startTime > 600) {
                    return;
                }
                //3 获取松开手时的坐标
                var endX = e.changedTouches[0].clientX;
                var endY = e.changedTouches[0].clientY;
                //3.1 判断滑动的距离 5px,一定要加上绝对值,因为有可能是负坐标
                if (Math.abs(endX - startX) > 5 || Math.abs(endY - startY) > 5) {
                    return;
                }
                //4 通过验证,此时可以触发tab的点击逻辑了
               callback&&callback(e);
            })
        },
        swipe: function (callback) {
            var startTime;
            var startX, startY;
            /* 按下 */
            dom.addEventListener("touchstart", function (e) {
                // console.log(e);
                //1 判断手指的个数
                if (e.touches.length > 1) {
                    return;
                }
                //2 记录按下的时间
                startTime = Date.now();
                //3 坐标
                startX = e.targetTouches[0].clientX;
                startY = e.targetTouches[0].clientY;
                // console.log(startTime,startX,startY);
            });
            /* 离开 */
            dom.addEventListener("touchend", function (e) {
                //1 判断手指
                if (e.changedTouches.length > 1) {
                    return;
                }
                //2 获得离开时的时间和坐标
                var endTime = Date.now();
                //2.1 判断
                if (endTime - startTime > 800) {
                    return;
                }
                //3 距离和反向
                var endX = e.changedTouches[0].clientX;
                var endY = e.changedTouches[0].clientY;
                //3.1 滑动的反向
                var direction;
                //3.2 判断距离
                if (Math.abs(endX - startX) > 5) {
                    //可以确定在水平轴上发生了移动
                    direction = endX > startX ? "right" : "left";
                } else if (Math.abs(endY - startY) > 5) {
                    //可以确定在垂直轴上发生了移动
                    direction = endY > startY ? "down" : "up";
                } else {
                    //没有发生移动
                    return;
                }
                //4 触发滑动的逻辑
                // console.log(direction);
                callback&&callback(direction);
            })
        }
    };
    return obj;
}