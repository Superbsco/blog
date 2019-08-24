<template>
  <div class="header">
    <router-link to="/">主页</router-link>|
    <router-link to="/blog">博客</router-link>|
    <router-link to="/about">关于</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.header {
  padding: 30px;
  background: $theme-color;
  color: #abc;
  a {
    font-weight: bold;
    // color: #2c3e50;
    color: #abc;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
