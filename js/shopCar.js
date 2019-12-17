//文档加载事件
$(function () {





    // 思路：当我点击全选是表单中的所有选项都选中，当我取消全选时，表单中的选择框就未选择

    //给 input框注册事件
    $(".allChose").change(function () {

        //获取当前框的选中状态
        let bool = $(this).prop("checked");

        // 统一所有input框的选中状态
        let num = $(this).closest("tr").siblings().find("input").prop("checked", bool)


    });



    // 需求：当input框没有全部选中时  取消全选


    //思路：获取每一个单选框的选中状态 判断 如果单选框的数量等于全选的数量就全选，反之，全选取消。


    $(".singleChose").change(function () {

        //定义标杆
        let flag = true;


        //遍历所有的单选框
        $(".singleChose").each(function () {

            //获取每一个单选框的选中状态
            let bool = $(this).prop("checked");


            console.log(bool);



            //判断
            if (!bool) {

                flag = false; //赋值

                return false; //返回

            }


        })

        if (flag) { //判断

            $(".allChose").prop("checked", true); //全选


        } else {

            $(".allChose").prop("checked", false);
            取消全选

        }


    });



    //需求：点击加号是 input里面的数字要自增1

    //思路:当点击+时  ，通过父亲级找到input里面的 val 值 自增1


    //注册点击事件
    $("#form table tr td .add").click(function () {

        let num = $(this).closest("tr").find(".proNum").val();

        //自增1
        num++;

        $(this).closest("tr").find(".proNum").val(num); //追加

        //计算小计
        let xiaoJi = $(this).closest("tr").find(".xiaoJi").text()

        xiaoJi = num * xiaoJi;

        xiaoJi = xiaoJi.toFixed(2); //保留两位小数



        $(this).closest("tr").find(".xiaoJi").text(xiaoJi); //追加


        //计算总价
        totalPrice();

    });


    $("#form table tr td .reduce").click(function () {

        let num = $(this).closest("tr").find(".proNum").val();

        //自增1
        num--;

        //判断
        if (num < 1) { //判断

            mum = 1;

            return num; //返回值
        }

        $(this).closest("tr").find(".proNum").val(num); //追加


        //计算小计
        let xiaoJi = $(this).closest("tr").find(".xiaoJi").text()

        xiaoJi = num * xiaoJi;

        xiaoJi = xiaoJi.toFixed(2); //保留两位小数



        $(this).closest("tr").find(".xiaoJi").text(xiaoJi); //追加

        //计算总价
        totalPrice();



    });


    //给 input 框注册键盘输入事件
    $(".proNum").keyup(function () {


        //获取当前 input 框框的 val值
        let num = parseInt($(this).val());


        $(this).val(num);


        //计算总价
        totalPrice();


    });


    //总计
    function totalPrice() {

//定义变量保存总价
 let  allPrice=0;


let singlePrice= $(".singlePrice:checked").closest("tr").find(".singlePrice").text();

 console.log(singlePric);
 









    }






























})