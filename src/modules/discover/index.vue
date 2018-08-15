<template>
  <div class="shareItem discoverIndex">
    <!-- <myHeader
    :leftBool="false"
    text="共享服务平台"></myHeader> -->
    <div class="discoverIndex-top">
      <ul class="discoverIndex-top-ul">
        <li :class="{nactiv: isshare === '1'}" @click="isshareFun('1')">共享</li>
        <li  :class="{nactiv: isshare === '2'}" @click="isshareFun('2')">需求</li>
      </ul>
    </div>

    <div class="discoverIndex-box">
        <p class="title">新的发现</p>
        <ul class="discoverIndex-box-list"  v-if="listItem">
          <li class="discoverIndex-box-list-item" v-for="(item, index) in listItem" :key="index"  @click="detailsRoterFun(item.id, item.type)">
            <div class="leftimgBox"><img :src="`${serverPath}${item.image_url}`"></div>
            <div class="righttextBox">
              <p class="righttextBox-title">{{item.name}}</p>
              <p class="righttextBox-text"><span v-if="item.city_msg">{{item.city_msg.name}}</span>
              <!-- <span class="zhon">已共享： 33次</span> -->
              </p>
              <p>
                <span class="money">￥{{item.price}}元/{{item.time_type_name}}</span>
              </p>
              <p class="righttextBox-pingfen">
                <gradeView :gradeNumber="item.score"></gradeView>
              </p>
            </div>
          </li>
        </ul>
        <div v-else style="text-align: center; line-height: 10rem;">没有数据</div>
    </div>
    <myfooter :routNumber="2"></myfooter>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myfooter from '@/components/footer';
import myHeader from '@/components/header';
import gradeView from '@/components/grade-view';
import mixIndex from '@/utils/mixins/mix-index';

export default {
  mixins: [mixIndex],
  components: {
    shaIcon,
    myfooter,
    myHeader,
    gradeView
  },
  methods: {
    isshareFun(val) {
      this.isshare = val;
      if (val === '1') {
        this.listItem = this.findListData;
      } else {
        this.listItem = this.needListData;
      }
    },
    detailsRoterFun(id, type) {
      this.$router.push({
        name: 'house-details',
        query: {
          type,
          id
        }
      });
    }
  },
  watch: {
    findListData(val) {
      this.listItem = val;
    }
  },
  data() {
    return {
      isshare: '1',
      findListData: [],
      needListData: [],
      listItem: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";

.discoverIndex {
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
          margin-top: 1rem;
      background: #ffffff;
      &-item {
        display: flex;
        padding: 1rem;
        .leftimgBox {
          width: 10rem;
          height: 7rem;
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
              float: right;
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
