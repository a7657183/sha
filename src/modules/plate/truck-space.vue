<template>
  <div class="shareItemCen truckSpace">
    <myHeader
    :leftBool="true"
    :zhonBool="true"
    routerName="subfunClick"
    rightText="筛选"></myHeader>
    <topMuneView :list="['筛选', '写字楼',  '公共车位']" :boolNub="boolNub"></topMuneView>
    <div class="truckSpace-box">
        <ul class="truckSpace-box-list">
          <li class="truckSpace-box-list-item bottomBor" v-for="item in 10" :key="item" @click="routerFun">
            <div class="leftimgBox"><img src="~@/assets/img/per-center-b.png"></div>
            <div class="righttextBox">
              <p class="righttextBox-title">花园城数码大花园城数码大花园城数码大花园城数码大花园城数码大花园城数码大</p>
              <p class="righttextBox-laberClass">2位 | 梅林关口 | 幸福花园</p>
              <p class="righttextBox-laberBut">
                <span>近地铁</span><span>配套全</span><span>物业安全</span>
              </p>
              <p class="righttextBox-laberClass">好评率： 98%
                <span class="zhon"><giveALike v-model="upvoteCount" :boot="true"></giveALike></span>
                <span class="money">￥99元</span></p>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import gradeView from '@/components/grade-view';
import giveALike from '@/components/give-a-like';
import topMuneView from '@/components/topMuneView';

export default {
  components: {
    shaIcon,
    myHeader,
    gradeView,
    giveALike,
    topMuneView
  },
  data() {
    return {
      upvoteCount: 1234,
      boolNub: 0
    };
  },
  methods: {
    routerFun() {
      this.$router.push({
        name: 'parking-details'
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";

.truckSpace {
  background: #f8f8f8 !important;
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
  &-box {
    .title {
      line-height: 3rem;
      padding: 0px 1rem;
    }
    &-list {
      background: #ffffff;
      &-item {
        display: flex;
        padding: 1rem;
        .leftimgBox {
          width: 10rem;
          height: 6.5rem;
          min-width: 10rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .righttextBox {
          margin-left: 1rem;
          flex: 1;
          color: @text-light;
          width: 50%;
          &-title {
            font-size: 1.1rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 16rem;
          }
          &-laberBut {
            margin-bottom: 0.6rem;
            span {
              background: @primary-color;
              color: #ffffff;
              padding: 2px 6px;
              margin-right: 10px;
              border-radius: 2px;
              font-size: 0.8rem;
            }
          }
          &-laberClass {
            font-size: 0.8rem;
            color: @text-lightest;
            .money {
              float: right;
              color: @warning-color;
              font-size: 1rem;
            }
            .zhon {
              margin-left: 6px;
            }
          }
        }
      }
    }
  }
}
</style>
