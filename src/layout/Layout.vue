<template>
  <el-container class="layout-wrap" :class="[slideStatus?'hide-slide':'show-slide']">

    <el-aside>
      <Menu></Menu>
    </el-aside>

    <el-container class="layout-container">

      <el-header height="auto" :class="[isFixHeader?'fix-header':'scroll-header']">
        <header-bar></header-bar>
        <tag-view></tag-view>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <!--<el-footer>-->
      <!--</el-footer>-->

    </el-container>

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
    ...mapState(['slideStatus', 'isFixHeader'])
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
    min-height: 100vh;
    position: relative;
  }

  .el-header {
    padding: 0;
  }

  .el-aside {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 211px !important;
    height: 100vh;
    background-color: #1d1e23;
    color: rgb(191, 203, 217);
    overflow: hidden;
    transition: width .3s ease-in-out;
  }

  .layout-container {
    margin-left: 211px;
    transition: margin-left .3s ease-in-out;
  }

  .el-main {
    margin-top: 5px;
    background-color: #fff;
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

  .hide-slide {
    .el-aside {
      width: 60px !important;
    }

    .layout-container {
      margin-left: 60px;
    }

    .fix-header {
      width: calc(100% - 60px);
    }

    .scroll-header {
      width: 100%;
    }

  }

  .show-slide {

    .fix-header {
      width: calc(100% - 211px);
    }

    .scroll-header {
      width: 100%;
    }

  }

  .fix-header {
    &.el-header {
      position: fixed;
      right: 0;
      top: 0;
      z-index: 2;
       transition: width .3s ease-in-out;

      .tab {
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
      }
    }

    + .el-main {
      margin-top: 104px;
    }
  }

</style>
