<template>
  <h1 :class="slideStatus?'put':'open'">logo</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LogoItem',

  computed: {
    ...mapState(['slideStatus'])
  },

}
</script>

<style scoped lang="less">
  h1 {
    line-height: 50px;
    text-align: center;
    background-color: #2b2f3a;

    &.open {
      width: 210px;
    }

    &.put {
      width: 60px;
    }
  }
</style>
