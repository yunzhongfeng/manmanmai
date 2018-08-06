# 1 移动web第3天	

目录

[](#day01)

```	 触屏事件需求:
触屏事件需求:
```

    1 鼠标事件不能模拟多指触控事件 
    2 click单击事件在移动端上存在延迟 -> 体验->抢票->抢手机-电脑 秒杀-> 
    
    触屏事件 => 
    3个触屏事件
      touchstart 按下
      touchmove 在移动
      touchend 离开屏幕 
    
      on+ 事件名 touchstart 存在绑定不上问题
      建议用 dom.addEventListener   绑定触屏事件!!! 


    使用3个触屏事件来封装手势事件
    0 pc端的点击事件 click 
    1 移动端的点击事件 tap 
      移动端原生 不存在tap点击事件 tap 由 3个触屏事件自己实现的封装!!! 



# day01


​	