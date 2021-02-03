<template>
  <el-scrollbar class="list-scroll-wrap" :class="slideStatus?'put':'open'">
    <logo-item></logo-item>
    <el-menu
        :default-active="defaultActive"
        background-color="#1d1e23"
        text-color="hsla(0,0%,100%,.7)"
        active-text-color="#f6ca9d"
        :router="true"
        :collapse="slideStatus"
    >

      <menu-item
          class="sub-menu"
          v-for="(item,index) in options"
          :routeItem="item"
          :index="index"
          :key="item.path"
      ></menu-item>

    </el-menu>
  </el-scrollbar>
</template>

<script>
import LogoItem from './LogoItem'
import MenuItem from './MenuItem'
import { mapState } from 'vuex'

export default {
  name: 'Menu',

  components: {
    LogoItem,
    MenuItem,
  },

  computed: {
    ...mapState(['slideStatus']),
    // 首次进入页面时展开当前页面所属的菜单
    defaultActive() {
      return this.$route.path;
    },
  },

  data() {
    return {
      options: this.$router.options.routes.filter(item => item.name === 'Home')[0].children
    }
  },
}
</script>

<style scoped lang="less">
  @import "~@/assets/css/menu/menu.less";

  .list-scroll-wrap {
    width: 210px;
    height: 100%;
  }

  .el-scrollbar .el-scrollbar__wrap .el-scrollbar__view {
    white-space: nowrap;
    display: inline-block;
  }

  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
    overflow-y: auto;
    width: 210px;

    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }

  .open {
    .el-menu {

    }
  }

  .put {
    .el-menu {
      width: 60px!important;
    }
  }
</style>
