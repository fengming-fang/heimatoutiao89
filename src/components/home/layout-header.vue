<template>
  <el-row class="layout-header" type='flex' justify='space-between' align='middle'>
    <el-col :span='6' class="top-left">

      <i @click="collaspseOrOpen" :class="{'el-icon-s-unfold': collaspse,'el-icon-s-fold': !collaspse}"></i>
      <span >江苏传智播客教育科技股份有限公司</span>
    </el-col>

    <el-col :span='12' class="top-right"  v-cloak>

      <el-row type='flex' justify="end" align="middle">

        <!-- <el-col :span=10>
        <el-input size='small' placeholder="请输入搜索的文章内容" prefix-icon="el-icon-search"  >
        </el-input>
        </el-col> -->

        <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">

        <el-dropdown  @command="handle">
              <span>{{ userInfo.name }}</span>
                 <!-- 下拉菜单  具名插槽 -->
                 <el-dropdown-menu slot="dropdown">
                     <!-- 下拉内容 -->
                      <el-dropdown-item command='info'>个人信息</el-dropdown-item>
                      <el-dropdown-item command='git'>Git地址</el-dropdown-item>
                      <el-dropdown-item command='lgout'>退出</el-dropdown-item>
                 </el-dropdown-menu>
        </el-dropdown>

     </el-row>
    </el-col>
  </el-row>
</template>

<script>
import eventBus from '../../utils/eventBus.js' // 引入公共实例
export default {

  data () {
    return {
      collaspse: false, // 是否折叠
      userInfo: {}, // 用户信息
      defaultImg: require('../../assets/img/home4.jpg')// 先把地址转化为变量
    }
  },

  created () {
    // let token = window.localStorage.getItem('user-token')  获取令牌  这个就不用了
    // 查询数据
    this.getUserInfo()
    // 实例创建完毕 立刻监听
    eventBus.$on('updateUserInfoSuccess', () => {
      // 别人告诉你 它更新了数据 应该立刻处理
      this.getUserInfo()
    })
  },

  methods: {

    collaspseOrOpen () {
      // 直接取反
      this.collaspse = !this.collaspse // 直接返回
      // 通知要改变宽度的组件
      eventBus.$emit('changeCollapse') // 改变了折叠状态
    },

    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      //   headers参数
      }).then(result => {
        this.userInfo = result.data // 获取用户个人信息
      })
    },

    handle (commad) {
      // 区分点击的菜单项
      if (commad === 'lgout') {
        //   退出
        window.localStorage.removeItem('user-token') // 删除用户的令牌
        this.$router.push('/login')
      } else if (commad === 'git') {
        window.location.href = 'https://github.com/fengming-fang/heimatoutiao89'
      } else if (commad === 'info') {
        this.$router.push('/home/account') // 跳转到账户信息页面
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .layout-header{
    height: 60px;
    .top-right{
      [cloak]{
        display: none
      }
        img{
          width: 40px;
          height: 40px;
          border-radius: 20px;

        }
    }
    .top-left{
    margin-right: 20px;
        i{
            font-size:22px;
        }
      .el-icon-s-fold{
        margin-right: 5px;
      }
    }

  }
</style>
