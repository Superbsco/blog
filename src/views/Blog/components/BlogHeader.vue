<template>
  <div class="blog-header">
    <div class="drawer-pull" @click="isOpenDrawer()">
      <svg-icon iconClass="pull-left" class="icon-pull"></svg-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({})
export default class BlogHeader extends Vue {
  @Emit('isOpenDrawer')
  private isOpenDrawer():any {}
}
</script>

<style lang="scss" scoped>
  .blog-header {
    height: 30px;
    display: flex;
    align-items: center;
    padding: 17px;

    .drawer-pull {
      .icon-pull {
        color: $sub-color;

        &:hover,
        &:active {
          color: $hover-color;
        }
      }
    }
  }
</style>
