<template>
  <div class="header-bar">
    <div class="left-item">
      <i :class="slideStatus?'el-icon-s-unfold':'el-icon-s-fold'" @click="toggleStatus"></i>
      <bread></bread>
    </div>

    <div class="right-item">
      <el-dropdown @command="handle">
        <el-avatar shape="square" src="http://cdn.wangyankai.top/img/xb.jpg"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>1</el-dropdown-item>
          <el-dropdown-item>2</el-dropdown-item>
          <el-dropdown-item divided command="logoutUser">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { modalMixin } from '@/mixins/commonMixin';
import Bread from '@/components/Bread/Bread'

export default {
  name: 'HeaderBar',

  mixins: [modalMixin],

  components: {
    Bread
  },

  data() {
    return {
      slideStatus: false,
    }
  },

  methods: {
    ...mapMutations(['setSlideStatus', 'logout']),

    toggleStatus() {
      this.slideStatus = !this.slideStatus
      this.$tools.saveS('slideStatus', this.slideStatus, 2)
      this.setSlideStatus(this.slideStatus)
    },

    handle(type) {
      console.log(type)
      this[type]()
    },

    logoutUser() {
      this.$modal({
        title: '退出登录',
        content: '确认退出登录吗',
        confirmHandle: () => {
          this.logout()
          this.$router.replace('/login')
            .then(() => {
              this.$message.success('退出成功')
            })
        }
      })

    }

  }

}
</script>

<style scoped lang="less">
  .header-bar {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 20px;

    i {
      font-size: 20px;
      cursor: pointer;
      margin-right: 30px;
    }

    .el-avatar {
      cursor: pointer;
    }

    .left-item, .right-item {
      display: flex;
      align-items: center;
    }
  }
</style>
