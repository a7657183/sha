<template>
  <div class="shareItemCen releaseList">
    <!-- <myHeader
    :leftBool="true"
    text="我的发布"></myHeader> -->
    <div class="releaseList-top">
      <ul class="releaseList-top-ul">
        <li :class="{nactiv: isshare === '1'}" @click="isshareFun('1')">共享</li>
        <li  :class="{nactiv: isshare === '2'}" @click="isshareFun('2')">需求</li>
      </ul>
    </div>
    <div class="releaseList-box" style="padding-top: 4.2rem;">
        <ul class="releaseList-box-list" v-if="releaseData">
          <li class="releaseList-box-list-item" @click="detailsRoterFun(item.id, item.type)"
            v-for="(item, index) in releaseData" :key="index">
            <div class="leftimgBox"><img :src="`${serverPath}${item.image_url}`"></div>
            <div class="righttextBox">
              <p class="righttextBox-title">{{item.name}}</p>
              <p class="righttextBox-text"><span class="money">￥{{item.price}}元/{{item.time_type_name}}</span></p>
            </div>
          </li>
        </ul>
        <div v-else class="noDataClass">
          没有数据
        </div>
    </div>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myfooter from '@/components/footer';
import myHeader from '@/components/header';
import gradeView from '@/components/grade-view';
import { postMyGoods } from '@/api/modules/mine';

export default {
  components: {
    shaIcon,
    myfooter,
    myHeader,
    gradeView
  },
  data() {
    return {
      releaseData: [],
      isshare: '1'
    };
  },
  created() {
    this.postMyGoodsFun();
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    detailsRoterFun(id, type) {
      this.$router.push({
        name: 'house-details',
        query: {
          type,
          id
        }
      });
    },
    topLeftFun() {
      this.$router.back(-1);
    },
    isshareFun(val) {
      this.isshare = val;
      this.postMyGoodsFun();
    },
    postMyGoodsFun() {
      postMyGoods({isshare: this.isshare}).then(res => {
        this.releaseData = res.data;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";

.releaseList {
  background: #f8f8f8 !important;
  &-top {
    padding: 1rem 0px;
    position: fixed;
    background: #f8f8f8 !important;
    width: 100%;
    z-index: 2;
    &-ul {
      width: 10rem;
      margin: auto;
      background: #ffffff;
      border-radius: 5px;
      text-align: center;
      line-height: 2.2rem;
      height: 2.2rem;
      border: 1px solid @primary-light-color;
      display: flex;
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
          height: 6rem;
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
          &-text {
            font-size: 0.8rem;
            line-height: 2.5rem;
            position: relative;
            .zhon {
              padding-left: 1rem;
            }
            .money {
              color: @warning-color;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
