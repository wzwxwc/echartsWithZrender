/**
 * Created by zcG460 on 2016/8/3.
 */

define(["jquery", "echarts"], function ($, echarts) {
    var temp = function (jsonArgsUser) {
        var jsonArgs = {
            parent: "",             //必须
            chartDataArray: [],     //必须
            width: "300px",         //可选：优先级：jsonArgsUser.width > parent.width >jsonArgs.width
            height: "300px"         //可选：优先级：同上
        }
        $.extend(jsonArgs, jsonArgsUser);
        fnUpdateWidthAndHeight();
        fnCreateView();

        //创建视图
        function fnCreateView() {
            //在这里最好判断一下parentNode是jquery对象还是dom对象！
            var div = document.createElement("div");
            div.style.height = jsonArgs.height;
            div.style.width = jsonArgs.width;
            div.style.backgroundColor = "yellow";
            jsonArgs.parent.appendChild(div);
            var myChart = echarts.init(div);
            myChart.setOption({
                legend: {
                    bottom: 10,
                    data: ['搜索引擎', '直接访问', '邮件营销', '联盟广告', '视频广告']
                },
                series: [{
                    name: "访问来源",
                    type: "pie",
                    radius: "55%",
                    data: jsonArgs.chartDataArray
                }]
            })
        }

        /**
         * 根据优先级规则，来得到需要的width和height
         * 优先级：jsonArgsUser.width > parent.width >jsonArgs.width
         */
        function fnUpdateWidthAndHeight() {
            if (!jsonArgsUser.width) {
                if ($(jsonArgsUser.parent).width() > 0) {
                    jsonArgs.width = $(jsonArgsUser.parent).width() + "px";
                }
            }
            if (!jsonArgsUser.height) {
                if ($(jsonArgsUser.parent).height() > 0) {
                    jsonArgs.height = $(jsonArgsUser.parent).height() + "px";
                }
            }
        }

    }
    return temp;

})

/*
 改进;
 如果可以的话
 暴露出图例或这chart上的点击事件，或者回调用户传入的event handle
 * */