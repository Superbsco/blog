<template>
  <div class="slide">
    <transition name="slide">
      <div class="drawer" v-if="isShow">
        123
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {
  @Prop() private isShow!: Boolean;
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
