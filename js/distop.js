$(function(){
    //获取传过来的brandtitleid
    var data = 1;
    $.get("http://193.112.55.79:9090/api/getbrand",{"brandtitleid":data},function(res){
              console.log(res);
    },'json');
})