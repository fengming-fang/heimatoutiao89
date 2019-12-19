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
右侧头部

  </el-header>

  <el-main>
右侧主体

  </el-main>
</el-container>

</el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside' // 引入

export default {
  // 局部注册
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style lang='less' scoped>

</style>
