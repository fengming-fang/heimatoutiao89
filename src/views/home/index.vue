<template>
<el-container>

<!-- 使用左侧组件 -->
<el-aside style="background-color:#353b4e;height:100vh;width:229px">
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

export default {

  components: {

  }

}
</script>

<style lang='less' scoped>

</style>
