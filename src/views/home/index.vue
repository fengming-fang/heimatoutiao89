<template>
<el-container>

<!-- 使用左侧组件 -->
<el-aside :style="{ width: collaspse ? '60px' : '230px' }" style="transition:all 0.3s; background-color:#353b4e;min-height:100vh;">
<!-- 导航组件 -->
<layout-aside :collaspse="collaspse">

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
import eventBus from '../../utils/eventBus'
export default {

  data () {
    return {
      collaspse: false // 是否折叠
    }
  },
  components: {
  },

  created () {
    // 开启监听
    eventBus.$on('changeCollapse', () => {
      this.collaspse = !this.collaspse
    })
  }

}
</script>

<style lang='less' scoped>

</style>
