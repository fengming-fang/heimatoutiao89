<template>
<!-- 二级路由 -->
  <div class="home">
      <!-- 图表的盒子 -->
      <div ref="myChart" class='echarts'></div>
      <!-- <div ref="myChart2" class='echarts'></div> -->
  </div>
</template>

<script>
import echarts from 'echarts'
export default {

  mounted () {
    // console.log(this.$refs.myChart)
    let myChart2 = echarts.init(this.$refs.myChart) // 获取到实例对象

    // let myChart2 = echarts.init(this.$refs.myChart2) // 获取到实例对象
    // 第一个echerts的数据
    var data = []
    for (var i = 0; i <= 100; i++) {
      var theta = i / 100 * 360
      var r = 5 * (1 + Math.sin(theta / 180 * Math.PI))
      data.push([r, theta])
    }

    myChart2.setOption(
      {
        title: {
          text: '我知道你会来，所以我在等'
        },
        legend: {
          data: ['line']
        },
        polar: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
        },
        series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          data: data
        }]
      }
    )
  }

}
</script>

<style lang='less' scoped>
    .home{
        // background-image: url('../../assets/img/home6.jpg');
        height: 100vh;
        background-size: cover;
        display: flex;
        justify-content: center;
        .echarts{
          width: 700px;
          height: 700px;
        }
    }
</style>
