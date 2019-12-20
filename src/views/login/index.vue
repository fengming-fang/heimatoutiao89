<template>
  <div class="login">
      <el-card class="login-card">
          <div class="title">
              <img src="../../assets/img/logo_index.png" alt="">
          </div>
        <el-form style="margin-top:20px" :model='loginForm' :rules='loginRules' ref="myForm">

            <el-form-item prop='mobile'>
                <el-input placeholder='请输入手机号' v-model="loginForm.mobile"></el-input>
            </el-form-item>

             <el-form-item prop='code'>
                <el-input style="width:70%" placeholder='请输入验证码' v-model="loginForm.code"></el-input>
                <el-button style="float:right" plain>发送验证码</el-button>
            </el-form-item>

             <el-form-item prop='check'>
                 <!-- 同意选项 -->
                 <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>

              <el-form-item>
                  <!-- 登录按钮 -->
                  <!-- 注册一个点击事件 -->
                  <el-button @click="submitLogin"  type="primary" style="width:100%">登录</el-button>
              </el-form-item>

        </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  // 在data中定义表单数据对象
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否同意协议
      },
      loginRules: {
        // 决定着校验规则  key(字段名):value(对象数组) => 一个对象就是一个校验规则
        // required 为true 就表示该字段必填 如果不填 就会提示消息
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],
        code: [{ required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            // 认为校验通过，放过去
            callback() // 直接执行，认为通过
          } else {
            // 认为校验不通过，提示信息
            callback(new Error('孩子，赶紧打勾去'))
          }
        }
        }]
      }

    }
  },
  methods: {
    // 提交登陆表单
    submitLogin () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          this.$axios({
            url: '/authorizations', // 请求地址
            method: 'post',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token)// 前端缓存令牌
            this.$router.push('/home') // 验证成功跳转到主页面
          }).catch(() => {
            // elementUI的方法  输入错误弹出警告信息
            this.$message({
              message: '您的手机号或者验证码不正确',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}

</script>

<style lang='less' scoped>
//给每个style标签都设置一个`scoped`属性，这样各个单文件组件的html标签解析出来后都会带有一个
//与其他单组件标签不同的`data-v-xxx`的唯一属性，style样式设定也会自动与本身组件的`data-v-xxx`联系起来，
//这样就使得style样式只针对自己的组件起作用了
.login{
 background-image: url(../../assets/img/home4.jpg);
 height: 100vh;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
    .login-card{
        width:440px;
       height:340px;
         .title {
           text-align: center;
           img {
               height:45px;
           }
       }
    }
}
</style>
