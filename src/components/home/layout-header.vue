<template>
  <el-row class="layout-header" type='flex' justify='space-between' align='middle'>
    <el-col :span='6' class="top-left">

      <i class="el-icon-s-fold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>

    <el-col :span='8' class="top-right" >

      <el-row type='flex' justify="end" align="middle">
        <!-- <el-input size='small' placeholder="请输入搜索的文章内容" prefix-icon="el-icon-search"  v-model="input2">
        </el-input> -->

        <img src="../../assets/img/header.jpg" alt="">

        <el-dropdown>
           <span>岂由天哉</span>
                 <!-- 下拉菜单  具名插槽 -->
                 <el-dropdown-menu slot="dropdown">
                     <!-- 下拉内容 -->
                      <el-dropdown-item>个人信息</el-dropdown-item>
                      <el-dropdown-item>Git地址</el-dropdown-item>
                      <el-dropdown-item>退出</el-dropdown-item>
                 </el-dropdown-menu>
        </el-dropdown>
     </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang='less' secped>
  .layout-header{
    height: 50px;
    .top-right{
        img{
          width: 40px;
          height: 40px;
          border-radius: 20px
        }
    }
  }
</style>
