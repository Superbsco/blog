<template>
  <div class="blog">
    <blog-slide :isShow="isShow"></blog-slide>
    <div class="main">
      <blog-header @isOpenDrawer="isOpenDrawer()"></blog-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BlogHeader from './Blog/components/BlogHeader.vue'; // @ is an alias to /src
import BlogSlide from './Blog/components/BlogSlide.vue';

@Component({
  components: {
    BlogHeader,
    BlogSlide,
  },
})

export default class Blog extends Vue {
  private isShow : boolean = true;

  // private data() {
  //   return {};
  // }

  private isOpenDrawer() {
    this.isShow = !this.isShow;
  }
}
</script>

<style lang="scss" scoped>
.blog {
  display: flex;

  .slide-enter-active {
    width: 300px;
    transition: all .2s ease;
  }

  .slide-leave-active {
    width: 300px;
    transition: all .2s ease;
  }

  .slide-enter, .slide-leave-to {
    width: 256px;
    margin-left: -260px;
  }

  .drawer {
    width: 300px;
    height: 100vh;
    background-color: $background-color;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
    box-shadow: $box-shadow;
    overflow: auto;
  }

  .main {
    flex: 1;
  }

  .show {
    margin-left: 0;
  }
}
</style>
