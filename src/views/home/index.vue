<template>
<el-container>

<!-- 使用左侧组件 -->
<el-aside style="background-color:#353b4e;min-height:100vh;width:229px">
<!-- 导航组件 -->
<layout-aside>

</layout-aside>
</el-aside>

<el-container>

<!-- 右侧区域 -->
  <el-header>
  <layout-header></layout-header>
  </el-header>

  <el-main style="padding:0">
<!-- 二级路由容器 -->
  <router-view>

  </router-view>
  </el-main>
</el-container>

</el-container>
</template>

<script>

export default {

  components: {

  }

}
</script>

<style lang='less' scoped>

</style>
