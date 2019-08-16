<template>
  <div class="home">
    <div class="bg"></div>
    <div class="mask"></div>
    <svg-icon iconClass="super" class="logo"></svg-icon>
    <h1 class="slogan">The Future Of Possible</h1>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1355762 */
  src: url('//at.alicdn.com/t/font_1355762_03gdlwek6z3b.eot');
  src: url('//at.alicdn.com/t/font_1355762_03gdlwek6z3b.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1355762_03gdlwek6z3b.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1355762_03gdlwek6z3b.woff') format('woff'),
  url('//at.alicdn.com/t/font_1355762_03gdlwek6z3b.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1355762_03gdlwek6z3b.svg#iconfont') format('svg');
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
}

.bg {
  // background: url(https://sp-webfront.skypixel.com/skypixel/v2/public/website/assets/1535027674204-f6eca6369ec03e70262b58b0e25cda7b.jpg);
  background-size: cover;
  position: fixed;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  filter: blur(15px);
  z-index: -1;
}

.logo {
  font-size: 110px;
  color: greenyellow;
}

.slogan {
  color: red;
  margin-top: 24px;
  font-size: 36px;
  font-weight: 400;
}

.mask {
  width: 340px;
  height: 196px;
  // animation: move 3s infinite;

  background-image: url(https://sp-webfront.skypixel.com/skypixel/v2/public/website/assets/1535027674204-f6eca6369ec03e70262b58b0e25cda7b.jpg);
  background-size: cover;
  // mask: url(http://www2.djicdn.com/assets/images/v3/logo-black2-145dcb13c56f36a65d084180a42136fa.svg);
  mask: url(https://at.alicdn.com/t/font_1355762_03gdlwek6z3b.svg);
  mask-size: cover;
}
</style>
