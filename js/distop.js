$(function () {
    // 拼接字符串
    function getSearchObj() {
        var qs = location.search.length > 0 ? location.search.substr(1) : '',
            args = {},
            items = qs.length > 0 ? qs.split('&') : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;

        for (i = 0; i < len; i++) {
            item = items[i].split('=');
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);

            if (name.length) {
                args[name] = value;
            }
        }
        return args;
    }
    //获取传过来的brandtitleid和品牌名称
    var brand = getSearchObj();
    // console.log(brand);
    var brandtitleid = brand.id;
    //获取name 
    var infoName = brand.name;
    var currntName = infoName.replace("十大品牌", "");
    $('.subnav span').text(currntName + "哪个牌子好");
    $('.model_title > h3').text(currntName + "哪个牌子好");
    $('.Product_title > h3').text(currntName + "产品销量排行");
    $('.hot_title > h3').text(currntName + "用户最新评论");
    // 品牌标题对应的十大品牌api  
    $.get("http://193.112.55.79:9090/api/getbrand", {"brandtitleid": brandtitleid}, function (res) {
        //用模板渲染页面
        // console.log(res);
        var htmlStr = template("tmpl", res);
        $('.model_content > ul').html(htmlStr);
    }, 'json');

    //品牌标题对应的十大品牌的销量排行商品列表api
    $.get("http://193.112.55.79:9090/api/getbrandproductlist", {"brandtitleid": brandtitleid}, function (res) {
            var data = res.result;
              console.log(data);
            if (data.length != 0) {
                $('.hot_list .tit').text(data[0].productName);
                $('.hot_list .pic').html(data[0].productImg);
                var productid =data[0].productId;
                getProductid(productid);
                //用模板渲染页面
                var resStr = template("tp", {
                    'data': data
                });
                //  console.log(resStr);
                $(".Product_content > ul").html(resStr);
            }
        }, "json")
        
   /* 销量排行商品的评论api */
   function getProductid(productid) {
         $.ajax({
             "url":"http://193.112.55.79:9090/api/getproductcom",
             "type": "get",
             "data": {"productid":productid},
             "success": function(res){
                 if(res.result.length >0){
                      //用模板渲染页面
                      var array = template("tp",{"res":res.result});
                      $('.hot_list ul').html(array);
                 }
             },
             "dataType": 'json'
         });
   }

});