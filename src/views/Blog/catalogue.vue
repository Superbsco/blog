<template>
  <div>{{ $route.params.name }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {
  private setData() {
    if(this.$route.params.name === 'css') {
      console.log()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
