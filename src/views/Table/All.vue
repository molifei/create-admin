<template>
  <div>
    <el-form inline :model="searchForm" ref="searchForm">
      <el-form-item label="姓名：" prop="name">
        <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="年龄：" prop="age">
        <el-input-number v-model="searchForm.age" :min="1"></el-input-number>
      </el-form-item>
      <el-form-item label="性别：" prop="gender">
        <el-select v-model="searchForm.gender" placeholder="请选择">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="2">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="search">搜索</el-button>
        <el-button size="small" @click="resetForm('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>


    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column label="序号" type="index" width="50"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="性别" prop="gender"></el-table-column>
    </el-table>

    <pagination :total="tableData.length" :currentPage.sync="currentPage"></pagination>

  </div>
</template>

<script>

import Pagination from '@/components/Pagination/Pagination';

export default {
  name: 'All',

  components: {
    Pagination
  },

  data() {
    return {
      searchForm: {
        name: '',
        age: 0,
        gender: 1,
      },

      tableData: [
        { name: '小明', age: 18, gender: '男', },
        { name: '小霞', age: 18, gender: '女', },

      ]

    }
  },

  methods: {
    search() {
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  }


}
</script>

<style scoped lang="less">

</style>
