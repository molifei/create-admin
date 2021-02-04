<template>
  <div>
    <el-alert
        title="引导"
        type="info"
        description="引导页使用"
        show-icon>
    </el-alert>
    <el-button
        icon="el-icon-edit"
        type="success"
        @click="openGuide"
    >
      打开引导
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Guide',

  data() {
    return {
      options: [
        {
          element: '#menu-fold',
          popover: {
            title: '侧边栏伸缩按钮',
            description: '可以选择伸缩侧边栏',
            position: 'right'
          }
        },
        {
          element: '#bread',
          popover: {
            title: '面包屑导航',
            description: '展示当前层级',
            position: 'right'
          }
        },
        {
          element: '#avatar',
          popover: {
            title: '头像',
            description: '鼠标放入可展示菜单',
            position: 'left'
          }
        },
        {
          element: '#set',
          popover: {
            title: '配置',
            description: '可配置系统样式',
            position: 'left'
          }
        },
      ]
    }
  },

  methods: {
    openGuide() {
      this.$driver.defineSteps(this.options);
      this.$driver.start();
    }
  }

}
</script>

<style scoped lang="less">
  .el-alert {
    margin-bottom: 10px;
  }
</style>
