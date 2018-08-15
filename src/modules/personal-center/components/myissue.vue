<template>
  <div class="shareItem release">
    <myHeader :leftBool="true" text="我的发布"/>
    <div class="release-top">
      <ul class="release-top-ul"><li class="nactiv">共享</li><li>需求</li></ul>
    </div>
    <div class="myissue-all">
      <ul>
        <li class="myissue-list" @click="indexRouterFun('parking-details')">
          <img class="listimg" src="~@/assets/img/myis01.png">
          <ul class="llist">
            <li class="ll1">花园城数码大厦停车位共享acascas</li>
            <li class="ll2">进行中</li>
            <div class="llistd1">
              <li class="ll3">南山区</li>
              <li class="ll4">已共享：33次</li>
              <li class="ll5">￥99起</li>
            </div>
            <div class="llistd2">
              <ul>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(185, 185, 185);"></i></li>
              </ul>
              <li class="ll7">4.1分</li>
            </div>
          </ul>
        </li>
        <li class="myissue-list" @click="indexRouterFun('parking-details')">
          <img class="listimg" src="~@/assets/img/myis01.png">
          <ul class="llist">
            <li class="ll1">花园城数码大厦停车位共享acascas</li>
            <li class="ll2">进行中</li>
            <div class="llistd1">
              <li class="ll3">南山区</li>
              <li class="ll4">已共享：33次</li>
              <li class="ll5">￥99起</li>
            </div>
            <div class="llistd2">
              <ul>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(185, 185, 185);"></i></li>
              </ul>
              <li class="ll7">4.1分</li>
            </div>
          </ul>
        </li>
        <li class="myissue-list" @click="indexRouterFun('parking-details')">
          <img class="listimg" src="~@/assets/img/myis01.png">
          <ul class="llist">
            <li class="ll1">花园城数码大厦停车位共享acascas</li>
            <li class="ll2">进行中</li>
            <div class="llistd1">
              <li class="ll3">南山区</li>
              <li class="ll4">已共享：33次</li>
              <li class="ll5">￥99起</li>
            </div>
            <div class="llistd2">
              <ul>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(255, 105, 76);"></i></li>
                <li><i class="icon iconfont icon-shoucang" style="font-size: 1.5rem; color: rgb(185, 185, 185);"></i></li>
              </ul>
              <li class="ll7">4.1分</li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
    <myfooter :routNumber="3"></myfooter>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myfooter from '@/components/footer';
import myHeader from '@/components/header';

export default {
  components: {
    shaIcon,
    myfooter,
    myHeader
  },
  methods: {
    authenticationFun(name) {
      this.$router.push({
        name
      });
    },
    indexRouterFun(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";
.release {
  &-top {
    padding: 1rem 0px;
    &-ul {
      width: 10rem;
      margin: auto;
      background: #ffffff;
      border-radius: 5px;
      text-align: center;
      line-height: 2.2rem;
      border: 1px solid @primary-light-color;
      li {
        width: 50%;
        color: @primary-light-color;
      }
      .nactiv {
        background: @primary-light-color;
        color: #ffffff;
      }
    }
  }
  &-menu {
    padding: 1rem 0px;
    background: white;
    &-col {
      text-align: center;
      padding: 0.5rem 0px;
      img {
        width: 50%;
      }
    }
  }
}
.myissue-all {
  width: 100%;
  background: #fff;
  ul {
    overflow: hidden;
    .myissue-list {
      display: flex;
      width: 100%;
      height: 9.21rem;
      border-bottom: 1px solid @success-light-color;
      img {
        display: block;
        float: left;
        width: 10.07rem;
        height: 7.07rem;
        margin: 0.64rem 0 1.5rem 0.78rem;
      }
      .llist {
        flex: 1;
        height: 9.21rem;
        padding: 0.64rem 0 0 0.78rem;
        box-sizing: border-box;
        position: relative;
        .ll1 {
          height: 1.5rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 12rem;
        }
        .ll2 {
          position: absolute;
          top: 0.5rem;
          right: 0;
          width: 2.85rem;
          height: 1.5rem;
          line-height: 1.5rem;
          border-top-left-radius: 0.64rem;
          border-bottom-left-radius: 0.64rem;
          background: @warning-color;
          text-align: right;
          font-size: 0.64rem;
          color: #fff;
        }
        .ll5 {
          color: @primary-light-color;
        }
        .ll7 {
          color: @warning-color;
        }
        .llistd1 {
          height: 4.21rem;
          line-height: 4.21rem;
          display: flex;
          justify-content: space-between;
          padding-right: 1rem;
        }
        .llistd2 {
          height: 1.35rem;
          line-height: 1.35rem;
          display: flex;
          justify-content: space-between;
          padding-right: 1rem;
        }
      }
    }
  }
}
</style>
