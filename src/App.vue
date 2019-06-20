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
// import axios from 'axios';
import request from '@/utils/request';

export default {
  data() {
    return {
      abc: 'admin'
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      request({
        url: '/api/dashboard/chart1',
        method: 'get',
        params: { ID: 12345 }
      })
        .then(res => {
          console.log('get res', res);
        })
        .catch(err => {
          alert(err);
        });
      // axios
      //   .get('/api/dashboard/chart', { params: { ID: 12345 } })
      //   .then(res => {
      //     console.log('res', res)
      //   })
    }
  }
};
</script>

<style lang="less"></style>
