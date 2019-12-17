

$(function(){ //文档加载事件



    $("form").validate({
        //制定的规则
        rules: {
            //用户名
            user: {
                required: true,
                isUser: true
            },
            pwd: {
                required: true,
                isPwd: true
            },
            cpwd: {
                equalTo: "#pwd"
            }
        },
        //错误的提示信息
        messages: {
            //用户名
            user: {
                required: "请输入用户名"

            },
            pwd: {
                required: "请输入密码",
                isPwd: "输入正确的密码..."
            },
            cpwd: {
                equalTo: "两次密码不一致"
            }
        }
    });


    /* 
        1.改动三处
            
            第一处： 方法名 
                isZipCode === isUser

            第二处： 验证规则

                /^[0-9]{6}$/ === /^[A-z][a-zA-Z0-9_-]{4,11}$/

            第三处： 提示信息


            jQuery.validator.addMethod("isZipCode", function(value, element) {   
                var tel = /^[0-9]{6}$/;
                return this.optional(element) || (tel.test(value));
            }, "请正确填写您的邮政编码");
    
    */

    //自定义用户名验证规则   
    jQuery.validator.addMethod("isUser", function (value, element) {
        var tel = /^[A-z][a-zA-Z0-9_-]{4,11}$/;//5-12
        return this.optional(element) || (tel.test(value));
    }, "首字符字母开始5-12位用户名");



    //自定义密码验证规则   
    jQuery.validator.addMethod("isPwd", function (value, element) {
        var tel = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;//5-12
        return this.optional(element) || (tel.test(value));
    }, "最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符");



//注册点击事件
$("#register form .rbox .vBtn").click(function(){

let num=Math.floor(Math.random()*9000);//产生随机数
 
$("#register form .rbox .Math").val(num);//追加到网页
 

});

































})