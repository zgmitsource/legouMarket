$(function () { //文档加载事件


    //注册点击事件
    $("#jd .content .register ul li:first").click(function () {

        $("#jd .content .register .dForm").hide();

        $("#jd .content .register .one,.two,.phone").show();

        //给当前对象添加颜色
        $(this).find("a").addClass("active");

        //其他兄弟去除字体颜色
        $(this).siblings().find("a").removeClass("active");



    });


    //注册鼠标移入事件事件
    $("#jd .content .register ul .one").mouseover(function () {



        //运动
        $(this).find("img").stop(false).animate({
            "left": 10 + "px"
        }, 500)



        //显示
        $("#jd .content .register ul li .right").stop().show(1000)


    }).mouseout(function () { //鼠标ichu事件

        //隐藏
        $("#jd .content .register ul li .right").stop().hide()


        //运动
        $(this).find("img").stop(false, false).animate({
            "left": 80 + "px"
        }, 500)



    })





    $("#jd .content .register ul li:nth-child(2)").click(function () {

        $("#jd .content .register .one,.two,.phone").hide(); //隐藏扫码界面


        $("#jd .content .register .dForm").show(); //添加激活样式



        //给当前对象添加颜色
        $(this).find("a").addClass("active");

        //其他兄弟去除字体颜色
        $(this).siblings().find("a").removeClass("active");




    });

































})