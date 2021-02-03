<template>
  <div class="home">
    首页 {{ $store.state.userName }}
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="less">
  #dv {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
  }
</style>
