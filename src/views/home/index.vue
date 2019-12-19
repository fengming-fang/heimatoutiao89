<template>
<el-container>

<!-- 使用左侧组件 -->
<el-aside style="background-color:#353b4e;height:100vh;width:230px">
<!-- 导航组件 -->
<layout-aside>

</layout-aside>
</el-aside>

<el-container>

<!-- 右侧区域 -->
  <el-header>
  <layout-header></layout-header>
  </el-header>

  <el-main>
右侧主体

  </el-main>
</el-container>

</el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside' // 引入左侧导航栏
import layoutHeader from '../../components/home/layout-header' // 引入头部
export default {
  // 局部注册
  components: {
    'layout-aside': layoutAside, // 注册左侧导航
    'layout-header': layoutHeader// 注册头部
  }

}
</script>

<style lang='less' scoped>

</style>
