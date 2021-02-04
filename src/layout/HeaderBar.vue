<template>
  <div class="header-bar">
    <div class="left-item">
      <i id="menu-fold" :class="slideStatus?'el-icon-s-unfold':'el-icon-s-fold'" @click="toggleStatus"></i>
      <bread id="bread"></bread>
    </div>

    <div class="right-item">
      <el-dropdown @command="handle">
        <el-avatar
            id="avatar"
            shape="square"
            src="http://cdn.wangyankai.top/img/pkq.png"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>1</el-dropdown-item>
          <el-dropdown-item>2</el-dropdown-item>
          <el-dropdown-item divided command="logoutUser">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <i
          id="set"
         class="el-icon-more" @click="drawerVisible=!drawerVisible"></i>

    </div>

    <el-drawer
        class="setting-drawer"
        title="配置"
        :visible.sync="drawerVisible"
        :modal="false"
    >

      <el-switch
          @change="fixHeader"
          v-model="isFixHeader"
          active-text="固定头部">
      </el-switch>

    </el-drawer>

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
      // 侧边栏收起状态
      slideStatus: this.$store.state.slideStatus || false,

      // 抽屉收起状态
      drawerVisible: false,

      // 固定头部
      isFixHeader: true,

    }
  },

  created() {
    this.fixHeader()
  },

  mounted() {
    this.screenResize()
  },

  methods: {
    ...mapMutations(['setSlideStatus', 'logout', 'setIsFixHeader']),

    toggleStatus() {
      this.slideStatus = !this.slideStatus
      this.saveSlideStatus()
    },

    saveSlideStatus() {
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

    },

    // 固定头部
    fixHeader() {
      this.setIsFixHeader(this.isFixHeader)
    },

    // 屏幕改变
    screenResize() {
      window.onresize = () => {
        let screenWidth = document.documentElement.clientWidth
        if (screenWidth < 1000) {
          this.slideStatus = true
          this.saveSlideStatus()
        }
      }
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
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

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

    .left-item {

    }

    .right-item {
      i {
        margin-left: 10px;
        margin-right: 10px;
      }
    }

  }

  /deep/ .el-drawer__body {
    padding: 0 20px;
  }
</style>
