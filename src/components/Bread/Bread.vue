<template>
  <div>
    <el-breadcrumb>
      <el-breadcrumb-item
          v-for="item in breadLink"
          :to="{path:item.path}"
          :data-item="item.path"
          :key="item.path"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>

    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        // console.log(to)
        this.breadLink = to.matched
      }
    }
  },

  data() {
    return {
      breadLink: []
    }
  }

}
</script>

<style scoped lang="less">

</style>
