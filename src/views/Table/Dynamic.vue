<template>
  <div>
    <el-checkbox-group v-model="checkTableList">
      <el-checkbox label="name">姓名</el-checkbox>
      <el-checkbox label="age">年龄</el-checkbox>
      <el-checkbox label="gender">性别</el-checkbox>
    </el-checkbox-group>

    <el-table
        :data="tableData1"
        border
        style="width: 100%">
      <el-table-column
          v-for="item in checkTableList"
          :key="item"
          :label="item">
        <template slot-scope="scope">
          {{ scope.row[item] }}
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'Dynamic',

  data() {
    return {
      checkTableList: ['name', 'age'],

      tableData1: [
        {
          name: '小明',
          age: 18,
          gender: '男',
        },
        {
          name: '小霞',
          age: 18,
          gender: '女',
        },
      ]
    }
  },
}
</script>

<style scoped lang="less">
  .el-checkbox-group {
    margin-bottom: 20px;
  }
</style>
