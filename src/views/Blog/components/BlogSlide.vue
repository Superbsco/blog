<template>
  <div class="slide">
    <transition name="slide">
      <div class="drawer" v-if="isShow">
        <div class="title" @click="toIndex()">
          <svg-icon iconClass="super" class="logo"></svg-icon>
          <p>{{title}}</p>
        </div>
        <div class="search-container">
          <input id="search" type="search" autocomplete="off" :placeholder="placeholder"/>
          <label for="search">{{placeholder}}</label>
          <div class="bottom-line"></div>
        </div>
        <div class="menu">
          <!-- <div class="home">
            <router-link to="/">{{mainPage}}</router-link>
          </div> -->
          <div class="detail">
            <div class="detail-content" v-for="(o,index) in detailMenu" :key="index">
              <div class="detail-title" @click="isOpen(index)">
                <svg-icon :iconClass="o.icon" class="icon"></svg-icon>
                <span>{{o.title}}</span>
              </div>
              <transition-group name="show" tag="div" class="detail-title-small">
                <div v-for="(d, i) in o.detail" :key="i" v-if="o.isOpen">
                  <router-link :to="d.path">{{(index+1) + '.' + (i+1) + '、' + d.name}}</router-link>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {
  @Prop() private isShow!: Boolean;

  private title : String = 'Super\'s Blog';

  private placeholder : String = '输入并搜索';

  private mainPage : String = '返回主页';

  private detailMenu = [
    {
      title: '前端知识总结',
      icon: 'frontend',
      isOpen: true,
      detail: [
        {
          name: 'css实用样式',
          path: '/blog/css',
        },
        {
          name: 'JS Demo',
          path: '/blog/js',
        },
        {
          name: 'Vue Demo',
          path: '/blog/vue',
        },
      ],
    },

    {
      title: '后端知识总结',
      icon: 'rearend',
      isOpen: true,
      detail: [
        {
          name: 'python',
          path: '/blog/python',
        },
        {
          name: 'nodeJS',
          path: '/blog/nodejs',
        },
      ],
    },

    {
      title: '辅助工具记载',
      icon: 'tool',
      isOpen: true,
      detail: [
        {
          name: 'git',
          path: '/blog/git',
        },
        {
          name: '软件推荐',
          path: '/blog/recommend',
        },
      ],
    },

    {
      title: '工作日记',
      icon: 'work',
      isOpen: true,
      detail: [
        {
          name: '工作问题',
          path: '/blog/workproblem',
        },
        {
          name: '架构总结',
          path: '/blog/summary',
        },
      ],
    },

    {
      title: '随笔',
      icon: 'writing',
      isOpen: true,
      detail: [
        {
          name: '大城小事',
          path: '/blog/thinking',
        },
      ],
    },
  ];

  private isOpen(i : number):void {
    this.detailMenu[i].isOpen = !this.detailMenu[i].isOpen;
  }

  private toIndex():void {
    this.$router.replace('/');
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
    margin-left: -300px;
  }

  .slide-enter, .slide-leave-to {
    width: 300px;
    margin-left: -300px;
  }

  .drawer {
    width: 300px;
    height: 100vh;
    background-color: $background-color;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
    box-shadow: $box-shadow;
    overflow: auto;

    .title {
      font-size: 16px;
      height: 40px;
      margin-top: 20px;
      padding-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid $border-bottom-color;
      color: $title-color;
      cursor: pointer;

      .logo {
        color: $logo-color;
        font-size: 28px;
        margin-right: 10px;
      }
    }

    .search-container {
      width: $width;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-flow: column-reverse;
      flex-flow: column-reverse;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      margin: 10px auto;
    }

    .search-container input {
      -webkit-box-ordinal-group: 11;
      -ms-flex-order: 10;
      order: 10;
      outline: none;
      border: none;
      width: 100%;
      padding: 10px 15px;
      font-size: 14px;
      border-bottom: 1px solid $border-bottom-color;
      // text-indent: 15px;
      position: relative;
    }

    input[type=search]::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      background-color: $focus-border-color;
      background-image: url('../../../assets/close.png');
      background-size: 12px 12px;
      background-repeat: no-repeat;
      background-position-x: 3px;
      background-position-y: 3px;
      margin-left: 15px;
      cursor: pointer;
    }

    .search-container input::-moz-placeholder {
      opacity: 0;
    }

    .search-container input::-webkit-input-placeholder {
      opacity: 0;
    }

    .search-container input:-ms-input-placeholder {
      opacity: 0;
    }

    .search-container input, .search-container label {
      transition: all $transform-time;
    }

    .search-container label {
      -webkit-box-ordinal-group: 101;
      -ms-flex-order: 100;
      order: 100;
      font-size: 14px;
      color: $label-font-color;
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: translate(15px, 25px);
      transform: translate(15px, 25px);
    }

    .search-container .bottom-line {
      order: 2;
      width: 0;
      height: 2px;
      background: $focus-border-color;
      transition: all $transform-time;
    }

    .search-container input:focus {
      border-bottom-color: #fff;
    }

    .search-container input:focus ~ div, .search-container input:not(:placeholder-shown) ~ div {
      width: 100%;
    }

    .search-container input:focus + label, .search-container input:not(:placeholder-shown) + label {
      color: $label-focus-font-color;
      -webkit-transform: translate(15px) scale($scale);
      transform: translate(15px) scale($scale);
    }

    .menu {
      .home {
        height: 40px;
        line-height: 40px;
        padding-bottom: 10px;
        border-bottom: 1px solid $border-bottom-color;
      }

      .detail {
        text-align: left;
        font-size: 14px;

        .detail-content {
          .detail-title {
            padding: 20px 15px 10px;
            color: $meun-title-color;
            display: flex;
            align-items: center;

            .icon {
              font-size: 16px;
              margin-right: 5px;
            }
          }

          .open {
            height: 0;
          }

          .detail-title-small {
            div {
              padding: 10px 15px 10px 30px;

              a {
                text-decoration: none;
                color: $meun-title-detail-color;
              }

              a:hover,
              a:active {
                color: $focus-border-color;
              }
            }

            .show-enter-active {
              max-height: 600px;
              // animation: bounce-in .5s;
              transition: all .3s ease;
            }

            .show-leave-active {
              max-height: 600px;
              margin-left: -300px;
              transition: all .3s ease;
            }

            .show-enter, .show-leave-to {
              max-height: 600px;
              margin-left: -300px;
              transition: all .3s ease;
            }

            @keyframes bounce-in {
              0% {
                transform: scale(0);
              }
              50% {
                transform: scale(1.5);
              }
              100% {
                transform: scale(1);
              }
            }
          }
        }
      }
    }
  }

  .show {
    margin-left: 0;
  }
}
</style>
