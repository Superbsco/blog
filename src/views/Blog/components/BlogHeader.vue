<template>
  <div class="blog-header">
    <div class="drawer-pull" @click="isOpenDrawer()">
      <svg-icon iconClass="pull-left" class="icon-pull"></svg-icon>
    </div>
    <p>{{$store.state.headTitle}}</p>
    <div class="share" @click="shareTo()">
      <svg-icon iconClass="share" class="icon-share"></svg-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({})
export default class BlogHeader extends Vue {
  @Emit('isOpenDrawer')

  private isOpenDrawer():any { console.log(this); }

  private shareTo():void { console.log(this); }
}
</script>

<style lang="scss" scoped>
  .blog-header {
    padding: 25px 17px;
    display: flex;
    justify-content: space-between;

  .icon-pull,
  .icon-share {
    color: $sub-color;
    font-size: 22px;

    &:hover,
    &:active {
      color: $hover-color;
    }
  }
}
</style>
