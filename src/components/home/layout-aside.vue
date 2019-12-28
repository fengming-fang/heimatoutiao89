<template>
<div class="layout-aside">
  <div class="title">
       <img src="../../assets/img/logo_admin.png" alt="">
  </div>
    <el-menu router background-color="#353b4e" text-color="#fff" active-text-color="#ffd04b" style="width:231px">
        <el-menu-item index='/home'>
            首页
        </el-menu-item>
        <!-- 第一个二级导航 -->
        <el-submenu index='1'>
              <template slot="title">
                 <span> 内容管理</span>
              </template>
              <el-menu-item index="/home/publish">发布文章</el-menu-item>
              <el-menu-item index="/home/articles">内容列表</el-menu-item>
              <el-menu-item  index="/home/comment">评论列表</el-menu-item>
              <el-menu-item index="/home/material">素材管理</el-menu-item>
        </el-submenu>
        <!-- 第二个二级导航 -->
        <el-submenu index='2'>
              <template slot="title">
                 <span> 粉丝管理</span>
              </template>
              <el-menu-item index="/home/picture">图文数据</el-menu-item>
              <el-menu-item index="/home/fansinfo">粉丝概括</el-menu-item>
              <el-menu-item index="/home/fanslife">粉丝画像</el-menu-item>
              <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
        </el-submenu>
        <el-menu-item index='/home/account'>
            账户信息
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.layout-aside{
  width: 230px;
  overflow: hidden;
  .title{
  background-color: #2e2f32;
  text-align: center;
  padding: 10px 0;
   width: 229px;

    img {
      height: 35px
    }
}
}

</style>
