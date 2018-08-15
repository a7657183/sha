<template>
  <div class="histories-all">
    <myHeader :leftBool="true" text="历史纪录"/>
    <div class="histories-top">
      <ul>
        <li class="nactiv">拨打记录</li>
        <li>预约记录</li>
        <li>订金记录</li>
        <li>待评价</li>
      </ul>
    </div>
    <div class="histories-content">
      <ul>
        <li class="histories-list" @click="indexRouterFun('parking-details')">
          <img class="listimg" src="~@/assets/img/myis01.png">
          <ul class="list1"><li>通话记录：2018年10月10日 10时10分</li><li>通话记录：2018年10月10日 10时10分</li><li>通话记录：2018年10月10日 10时10分</li></ul>
          <div>$25</div>
        </li>
        <li class="histories-list" @click="indexRouterFun('parking-details')">
          <img class="listimg" src="~@/assets/img/myis01.png">
          <ul class="list1"><li>通话记录：2018年10月10日 10时10分</li><li>通话记录：2018年10月10日 10时10分</li><li>通话记录：2018年10月10日 10时10分</li></ul>
          <div>$25</div>
        </li>
        <li class="histories-list" @click="indexRouterFun('parking-details')">
          <img class="listimg" src="~@/assets/img/myis01.png">
          <ul class="list1"><li>通话记录：2018年10月10日 10时10分</li><li>通话记录：2018年10月10日 10时10分</li><li>通话记录：2018年10月10日 10时10分</li></ul>
          <div>$25</div>
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
.histories-top {
  width: 100%;
  height: 5rem;
  margin-top: 3.5rem;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-around;
    background: #fff;
    border-bottom: 1px solid #efefef;
    box-sizing: border-box;
    li {
      display: block;
      float: left;
      width: 20%;
      height: 2.64rem;
      line-height: 2.64rem;
      text-align: center;
      background: #f9f9f9;
      border: 1px solid #ececec;
      border-radius: 0.35rem;
      overflow: hidden;
    }
    .nactiv {
      color: #fff;
      background: #3975ff;
      border: 1px solid #185eff;
      border-radius: 0.35rem;
    }
  }
}
.histories-content {
  width: 100%;
  background: #fff;
  ul {
    width: 100%;
    .histories-list {
      display: flex;
      width: 100%;
      height: 8.28rem;
      border-bottom: 1px solid @success-light-color;
      div {
        display: flex;
        flex: 1;
        margin: 0.64rem 1rem 0 0;
        color: red;
      }
      img {
        width: 8.57rem;
        height: 7.07rem;
        margin: 0.64rem 0 0 0.78rem;
      }
      .list1 {
        width: 12.85rem;
        margin: 0.64rem 0 0 0.78rem;
        li {
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 12rem;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
