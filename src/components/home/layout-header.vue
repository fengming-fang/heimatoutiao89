<template>
  <el-row class="layout-header" type='flex' justify='space-between' align='middle'>
    <el-col :span='6' class="top-left">

      <i class="el-icon-s-fold"></i>
      <span >江苏传智播客教育科技股份有限公司</span>
    </el-col>

    <el-col :span='12' class="top-right" >

      <el-row type='flex' justify="end" align="middle">

        <!-- <el-col :span=10>
        <el-input size='small' placeholder="请输入搜索的文章内容" prefix-icon="el-icon-search"  >
        </el-input>
        </el-col> -->

        <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">

        <el-dropdown >
              <span>{{ userInfo.name }}</span>
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
  data () {
    return {
      userInfo: {}, // 用户信息
      defaultImg: require('../../assets/img/header.jpg')// 先把地址转化为变量
    }
  },
  created () {
    let token = window.localStorage.getItem('user-token') // 获取令牌
    // 查询数据
    this.$axios({
      url: '/user/profile',
      //   headers参数
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data // 获取用户个人信息
    })
  }

}
</script>

<style lang='less' scoped>
  .layout-header{
    height: 60px;
    .top-right{

        img{
          width: 40px;
          height: 40px;
          border-radius: 20px;

        }
    }
    .top-left{
    margin-right: 20px;
      .el-icon-s-fold{
        margin-right: 5px;
      }
    }

  }
</style>
