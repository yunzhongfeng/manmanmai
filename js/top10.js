$(function () {
    $.ajax({
        "url": "http://193.112.55.79:9090/api/getbrandtitle",
        "type": "get",
        "dataType": "json",
        "success": function (res) {
            // console.log(res); 
            //调用模板引擎渲染数据
            var htmlStr = template('tmpl', res);
            //   console.log(htmlStr); 
            $('.view_content').html(htmlStr);
        }
    });
})