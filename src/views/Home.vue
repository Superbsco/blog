<template>
  <div class="home">
    <div class="fullpage-wrapper">
      <div class="reactor-container">
        <div class="reactor-container-inner circle abs-center"></div>
        <div class="tunnel circle abs-center"></div>
        <div class="core-wrapper circle abs-center"></div>
        <div class="core-outer circle abs-center"></div>
        <div class="core-inner circle abs-center"></div>
        <div class="coil-container">
          <div class="coil coil-1"></div>
          <div class="coil coil-2"></div>
          <div class="coil coil-3"></div>
          <div class="coil coil-4"></div>
          <div class="coil coil-5"></div>
          <div class="coil coil-6"></div>
          <div class="coil coil-7"></div>
          <div class="coil coil-8"></div>
        </div>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.fullpage-wrapper {
  width: 80px;
  height: 80px;
  // background: radial-gradient(#353c44, #222931);
  // background: $theme-bg;
  display: flex;

  .reactor-container {
    width: 60px;
    height: 60px;
    margin: auto;
    border: 1px dashed #888;
    position: relative;
    border-radius: 50%;
    background-color: #384c50;
    border: 1px solid rgb(18, 20, 20);
    box-shadow: 0px 0px 32px 8px rgb(18, 20, 20), 0px 0px 4px 1px rgb(18, 20, 20) inset;
    .reactor-container-inner {
      height: 42px;
      width: 42px;
      background-color: rgb(22, 26, 27);
      box-shadow: 0px 0px 4px 1px #52fefe;
    }

    .circle {
      border-radius: 50%;
    }
    .abs-center {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
    .core-inner {
      width: 12px;
      height: 12px;
      border: 5px solid #1b4e5f;
      background-color: #ffffff;
      box-shadow: 0px 0px 7px 5px #52fefe, 0px 0px 10px 10px #52fefe inset;
    }
    .core-outer {
      width: 20px;
      height: 20px;
      border: 1px solid #52fefe;
      background-color: #ffffff;
      box-shadow: 0px 0px 2px 1px #52fefe, 0px 0px 10px 5px #52fefe inset;
    }
    .core-wrapper {
      width: 40px;
      height: 40px;
      background-color: #073c4b;
      box-shadow: 0px 0px 5px 4px #52fefe, 0px 0px 6px 2px #52fefe inset;
    }
    .tunnel {
      width: 40px;
      height: 40px;
      background-color: #ffffff;
      box-shadow: 0px 0px 5px 1px #52fefe, 0px 0px 5px 4px #52fefe inset;
    }

    .coil-container {
      position: relative;
      width: 100%;
      height: 100%;
      animation: 3s infinite linear reactor-anim;

      .coil {
        position: absolute;
        width: 15px;
        height: 8px;
        top: calc(50% - 36px);
        left: calc(50% - 5px);
        transform-origin: 5px 36px;
        background-color: #073c4b;
        box-shadow: 0px 0px 2px #52fefe inset;
      }

      .coil-1 {
        transform: rotate(0deg);
      }
      .coil-2 {
        transform: rotate(45deg);
      }
      .coil-3 {
        transform: rotate(90deg);
      }
      .coil-4 {
        transform: rotate(135deg);
      }
      .coil-5 {
        transform: rotate(180deg);
      }
      .coil-6 {
        transform: rotate(225deg);
      }
      .coil-7 {
        transform: rotate(270deg);
      }
      .coil-8 {
        transform: rotate(315deg);
      }
      @keyframes reactor-anim {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
