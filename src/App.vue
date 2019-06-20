<template>
  <div id="app">
    <a-button>按钮</a-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <!-- <Authority :authority="['admin']">
      <div>123</div>
    </Authority> -->
    <div v-admin="abc">authority</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abc: 'admin'
    };
  }
};
</script>

<style lang="less"></style>
