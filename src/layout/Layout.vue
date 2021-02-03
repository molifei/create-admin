<template>
  <el-container class="layout-wrap">

    <el-aside :class="slideStatus?'put':'open'">
      <Menu></Menu>
    </el-aside>

    <el-container>

      <el-header height="auto">
        <header-bar></header-bar>
        <tag-view></tag-view>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <!--<el-footer>-->
      <!--  132-->
      <!--</el-footer>-->

    </el-container>

    <div
        class="on-off"
        :class="drawerVisible?'on':'off'"
        @click="drawerVisible=!drawerVisible">
      <i class="el-icon-circle-plus-outline"></i>
    </div>

    <el-drawer
        class="setting-drawer"
        :show-close="false"
        :visible.sync="drawerVisible">

    </el-drawer>
  </el-container>
</template>

<script>

import Menu from '@/layout/Menu/Menu'
import HeaderBar from '@/layout/HeaderBar';
import TagView from '@/components/TagView/TagView';
import { mapState } from 'vuex'

export default {
  name: 'Layout',

  components: {
    Menu,
    HeaderBar,
    TagView
  },

  computed: {
    ...mapState(['slideStatus'])
  },

  data() {
    return {
      drawerVisible: false,
    }
  }
}
</script>

<style scoped lang="less">
  .layout-wrap {
    height: 100vh;
    position: relative;
  }

  .el-header {
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    padding: 0;
  }

  .el-aside {
    background-color: #1d1e23;
    color: rgb(191, 203, 217);
    overflow: hidden;
    transition: width .3s ease-in-out;

    &.put {
      width: 60px !important;
    }

    &.open {
      width: 211px !important;
    }
  }

  .on-off {
    position: fixed;
    right: 0;
    top: 25%;
    width: 45px;
    height: 45px;
    background-color: #1d1e23;
    border-radius: 6px 0 0 6px;
    text-align: center;
    cursor: pointer;


    i {
      color: rgb(246, 202, 157);
      font-size: 20px;
      line-height: 45px;
    }

    &.on {
      i {
        transform: rotate(45deg);
      }
    }
  }

  /deep/ .setting-drawer {
    overflow: visible;

    .el-drawer {
      overflow: visible;
      width: 260px !important;
    }
  }
</style>
