<template>
    <div class="faBox">
        <div class="brother">
            <i class="el-icon-date fl"></i>
            <el-breadcrumb separator="/" class="fl">
                <el-breadcrumb-item :to="{ path: '/schart' }">图表</el-breadcrumb-item>
                <el-breadcrumb-item>基础图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="under">
            <div class="underTop">
                vue-schart：vue.js封装sChart.js的图表组件。 访问地址：
                <a href="https://v-charts.js.org/#/line">vue-schart</a>
            </div>
            <div class="underCenter">
                <div class="flow ">
                    <div class="test">中国地图</div>
                    <ve-map :data="chartDataFour" class="chart chartFour"></ve-map>
                </div>
                <div class="flow ">
                    <div class="test">柱状图</div>
                    <ve-histogram :data="chartData" class="chart chartOne"></ve-histogram>
                </div>
                <div class="flow ">
                    <div class="test">折线图</div>
                    <ve-line :data="chartData" :settings="chartSettings" class="chart chartTwo"></ve-line>
                </div>
                <div class="flow ">
                    <div class="test">饼图</div>
                    <ve-pie :data="chartDataThree" class="chart chartThree"></ve-pie>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      metrics: ["访问用户", "下单用户",'下单率'],//指标
      dimension: ["日期"]//维度
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323},
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      chartDataThree:{
          columns:['日期','访问用户'],
          rows:[
              { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
      },
      chartDataFour:{
          columns: ['位置', '税收', '人口', '面积'],
          rows: [
            { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
            { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
            { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
            { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 },
            { '位置': '广东', '税收': 3875, '人口': 5123, '面积': 58253 },
          ]
      }
    };
  }
};
</script>

<style scoped lang="less">
.faBox {
  .brother {
    &:after {
      //清楚浮动的影响
      display: block;
      clear: both;
      content: "";
      visibility: hidden;
      height: 0;
    }
    .fl {
      float: left;
      margin-right: 15px;
    }
  }
  .under {
    margin-top: 15px;
    padding: 30px 50px 50px 20px;
    background-color: #fff;
    .underTop {
      height: 50px;
      line-height: 50px;
      margin-left: 15px;
      background-color: rgb(238, 241, 246);
      text-align: left;
      padding-left: 15px;
      > a {
        color: blue;
      }
    }
    .underCenter {
      margin-top: 30px;
      .flow {
        display: inline-block;
        width: 45%;
        .chart {
          box-sizing: border-box;
          padding-top: 10px;
          width: 100%;
        }
        .chartOne{
            background-color: rgb(249, 239, 204);
        }
        .chartTwo{
            background-color: rgb(213, 228, 235);
        }
        .chartThree{
            background-color: rgb(130, 157, 202);
        }
        .chartFour{
            background-color: rgb(130, 157, 170);
        }
      }
    }
  }
}
</style>


