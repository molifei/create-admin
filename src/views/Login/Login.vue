<template>
  <section>
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-form">

      <h1>系统登录</h1>

      <el-form-item prop="name">
        <el-input v-model.trim="loginForm.name" prefix-icon="el-icon-user" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model.trim="loginForm.password" prefix-icon="el-icon-key"
                  placeholder="用户名"></el-input>
      </el-form-item>

      <el-button type="primary" @click="doLogin('loginForm')">登录</el-button>

    </el-form>
  </section>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: 'admin',
        password: '123456',
      },

      loginRules: {
        name: [
          { required: true, message: '请输入账户', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },


    }
  },

  methods: {
    ...mapMutations(['setUserState']),
    doLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let user = {
            user: this.$refs[formName].name,
            userName: '小明',
            token: 'zheshitoken'
          }
          this.$tools.saveS('user', this.$refs[formName].name, 2)
          this.$tools.saveS('userName', '小明', 2)
          this.$tools.saveS('token', user.token, 2)
          this.setUserState(user)
          this.$router.replace('/')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped lang="less">
  section {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
  }

  /deep/ .login-form {
    width: 400px;
    margin: 200px auto;

    h1 {
      text-align: center;
      font-weight: bold;
      color: #fff;
      font-size: 26px;
      letter-spacing: .1em;
      margin-bottom: 20px;
    }

    .el-input__inner {
      background-color: rgba(0, 0, 0, .1);
      color: #fff;
      letter-spacing: .2em;
    }

    .el-button {
      width: 100%;
    }
  }
</style>
