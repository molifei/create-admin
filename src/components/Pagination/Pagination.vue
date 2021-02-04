<template>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
  </el-pagination>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    total: {
      required: true,
      type: Number,
    },

    currentPage: {
      type: Number,
    }

  },

  data() {
    return {}
  },

  methods: {}

}
</script>

<style scoped lang="less">

</style>
