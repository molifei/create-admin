<template>
  <el-submenu
      v-if="routeItem.children &&
       routeItem.children.length>0 &&
       !routeItem.meta.hide"
      :index="routeItem.path">
    <template slot="title">
      <i :class="routeItem.meta.icon"></i>
      <span>{{ routeItem.meta.title }}</span>
    </template>
    <menu-item-bar
        v-for="(subMenu, subIndex) in routeItem.children"
        :routeItem="subMenu"
        :index="subIndex"
        :key="subIndex.name"
    ></menu-item-bar>
  </el-submenu>

  <el-menu-item
      v-else-if="!routeItem.meta.hide &&
             !routeItem.children"
      :index="routeItem.path">
    <i :class="routeItem.meta.icon"></i>
    <span slot="title">{{ routeItem.meta.title }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'MenuItemBar',

  props: {
    routeItem: {
      required: true,
    },
    index: {
      required: true
    },
    key: {
      required: true
    }
  },

  mounted() {
    // console.log(this.routeItem)
  }


}
</script>

<style scoped lang="less">

</style>
