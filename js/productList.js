$(function () {

    $("#newBookUp .bookRight>ul>li").mouseover(function () { //注册鼠标移入事件

        $(this).siblings().find("div").removeClass("active"); //其他li 下的 div去除激活样式

        $(this).find("div").addClass("active"); //给当前li 下的 div添加激活样式

        $(this).siblings().find("h4").removeClass("on") //其他h4 添加激活样式

        $(this).find("h4").addClass("on"); //去除当前 h4的激活样式




    })




    //初始化轮播图
    $(".slider1").slidebox({
        boxh: 570, //盒子的高度
        w: 1200, //图片的宽度
        h: 500, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12, //控制按钮宽度
        controlsH: 12, //控制按钮高度
        radius: 6 //控制按钮圆角度数
    });


    // 猜你喜欢

    //定义变量保存
    let num = 0;

    //获取猜你喜欢喜欢下 List 的长度
    let len = $("#bigBox .ul .List").length;

    //给换一批注册鼠标点击事件
    $("#guessLove .newBook .right>li:nth-child(2)").click(function () {

         

        //思路：当点击 换一批按钮是 页面向上切换到下一个页面

        //需求：点击一下就更换一个页面


        //页面自增
        num++;

        //判断
        if (num === len) {

            num = 1; //赋值
            $("#bigBox .ul").css("top", 0); //回到首页


        }

        $("#bigBox .ul").stop().animate({
            "top": -num * $("#bigBox .ul .List").outerHeight() + "px"
        }, 300)







    });



 //注册滚动条滚动事件
 $(window).scroll(function () {

    let sTop = $("html,body").scrollTop(); //获取滚动条距离顶部的距离


    if (sTop > 3000) { //判断

        $('#goTop').css({
            "display": "block"
        }); //滚动条距顶部距离大于3000时显示



    } else {


        $('#goTop').css({
            "display": "none"
        }); //滚动条距顶部距离小于3000时隐藏

    }


});


$("#goTop").click(function () { //注册点击事件

    $("html,body").animate({
        scrollTop: 0
    }, 500)


});



$("#lingQC .two").mouseover(function () {

    $("#lingQC .one").slideDown(); //显示


}).mouseleave(function () {


    $("#lingQC .one").slideUp(2000);



});

//定义数组保存颜色
let bg = ["#93d46f", "#f65727", "#bb9dee", "#ff7394", "#c2ec51"]

//注册鼠标移入事件
$("#floor li").hover(function () {

    //获取楼层的索引
    let index = $(this).index();

    //设置当前楼层的cs 样式
    $(this).css({
        "background-color": bg[index], //添加背景颜色

        "width": "80px", //加宽

        "background-position-x": "-40px" //精灵图位移·
    })

}, function () {

    $(this).css({
        "background-color": "", //恢复背景颜色

        "width": "", //变为原来的宽度

        "background-position-x": "" //精灵图位移归位

    });

}).click(function () {

    //获取当前楼层的索引
    let index = $(this).index();

    //找到对应楼层的盒子
     let sTop=$(".floorBox").eq(index).offset().top

    //设置滚动条的位置
    $("body,html").animate({"scrollTop":sTop},800) ;



});

// 固定顶部搜索框


//注册滚动条滚动事件
$(window).scroll(function(){

//获取当前滚动条距离顶部的距离
let sTop=$("body,html").scrollTop();


//判断
if(sTop>900){

$("#headBox").css({"display":"block"})  //显示

//把 explore 框追加到 headBox里面
$(".search").appendTo("#headBox");


}else{

$("#headBox").css({"display":"none"});//隐藏


//将 explore 追加到 search（原来的位置）;
$(".search").appendTo(".explore");

}









});











































})