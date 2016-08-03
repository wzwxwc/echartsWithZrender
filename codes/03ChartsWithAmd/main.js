/**
 * Created by zcG460 on 2016/8/3.
 */
require.config({
    paths: {
        jquery: "/echartsWithZrender/deps/jquery",
        charts: "/echartsWithZrender/codes/03ChartsWithAmd/module/charts",
        echarts: "/echartsWithZrender/deps/echarts"
    },
    shim: {
        charts: ["echarts"]
    }
});
require(["charts"], function (charts) {
    var parentNode = document.getElementById("divChart");
    var chartDataArray = [
        {value: "400", name: "搜索引擎", code: "111"},
        {value: "335", name: '直接访问', code: "112"},
        {value: "310", name: '邮件营销', code: "113"},
        {value: "274", name: '联盟广告', code: "114"},
        {value: "235", name: '视频广告', code: "115"}
    ];
    var jsonArgs = {
        // parent: document.body,
        parent: parentNode,
        chartDataArray: chartDataArray
    };
    new charts(jsonArgs);
});