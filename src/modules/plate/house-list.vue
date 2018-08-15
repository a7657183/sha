<template>
  <div class="shareItemCen truckSpace">
    <!-- <myHeader
    :leftBool="true"
    :zhonBool="true"
    routerName="subfunClick"
    :seachFun="seachFun"
    :topRightFun="topRightFun"
    rightText="筛选"></myHeader> -->
    <topMuneView :list="muneList" :boolNub="boolNub" :topMuneFun="topMuneFun"></topMuneView>
    <div class="truckSpace-box">
        <ul class="truckSpace-box-list" v-if="itemList">
          <Scroll :on-reach-bottom="handleReachBottom" :distance-to-edge="[10, 10]" height="100%" :loading-text="loadingName">
              <li class="truckSpace-box-list-item bottomBor" v-for="(item, index) in itemList" :key="index"  @click="routerFun(item.id)">
                <div class="leftimgBox"><img :src="`${serverPath}${item.image_url}`"></div>
                <div class="righttextBox">
                  <p class="righttextBox-title">{{item.name}}</p>
                  <p class="righttextBox-laberClass">{{item.addr}}</p>
                  <!-- <p class="righttextBox-laberBut">
                    <span>近地铁</span><span>配套全</span><span>物业安全</span>
                  </p> -->
                  <p class="righttextBox-laberClass">
                    <!-- 好评率： 98% -->
                    <!-- <span class="zhon"><giveALike v-model="upvoteCount" :boot="true"></giveALike></span> -->
                    <span class="money">￥{{item.price}}元/{{item.time_type_name}}</span></p>
                </div>
              </li>
          </Scroll>
        </ul>
        <div v-else class="noDataClass">没有数据</div>
    </div>
    <modalCity v-model="modalCityBool" :cityFun="cityFun" style="z-index: 1001; position: fixed;"></modalCity>
    <modalFiltrate v-model="modalFiltrateBool"
    :distriFunClick="distriFunClick"
    :cityItem="cityItem"
    :listCityClickFun="listCityClickFun"></modalFiltrate>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import gradeView from '@/components/grade-view';
import giveALike from '@/components/give-a-like';
import topMuneView from '@/components/topMuneView';
import modalCity from '@/components/sha-modal/modal-city';
import modalFiltrate from '@/components/sha-modal/modal-filtrate';
import { postGoodsList } from '@/api/modules/mine';

function dataFun() {
  return {
    page: 0,
    type: '1',
    timeType: '',
    price: '',
    isshare: '',
    dataObje: {},
    loadingName: '加载中',
    distriCityId: ''
  };
}
export default {
  components: {
    shaIcon,
    myHeader,
    gradeView,
    giveALike,
    topMuneView,
    modalCity,
    modalFiltrate
  },
  data() {
    return {
      upvoteCount: 1234,
      boolNub: 1,
      modalCityBool: false,
      modalFiltrateBool: false,
      itemList: [],
      seachVal: '',
      cityItem: {
        id: '',
        name: localStorage.getItem('cityObjSet')
      },
      ...dataFun()
    };
  },
  created() {
    this.distriCityId = this.cityItem.id;
    this.postGoodsListFun();
    window.topRightFun = this.topRightFun;
    window.seachFun = this.seachFun;
    window.topLeftFun = this.topLeftFun;
  },
  computed: {
    muneList() {
      switch (this.$route.query.type) {
        case '1':
          return ['私家车位', '写字楼', '公共车位'];
        case '2':
          return ['公寓', '私家房', '酒店', '民宿'];
        case '3':
          return ['老师辅助', '游戏达人', '兼职'];
        case '4':
          return ['超市小票', '电影票', '演唱会票', '其他'];
        case '5':
          return ['汽车', '顺风车', '单车', '电动车', '婴儿车', '轮椅'];
        default:
          return ['公寓', '私家车', '酒店', '民宿'];
      }
    }
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
    seachFun(val) {
      this.seachVal = val;
      this.postGoodsListFun();
    },
    distriFunClick(val, textVal, timeVal) {
      if (val) {
        this.distriCityId = val.id;
      } else {
        this.price = textVal;
        this.timeType = timeVal;
      }
      this.postGoodsListFun();
    },
    topMuneFun(val) {
      this.type = val;
      this.boolNub = val;
      this.page = 0;
      this.postGoodsListFun();
    },
    handleReachBottom() {
      if (this.dataObje.next_flag === 2) {
        this.loadingName = '没有更多数据';
        return;
      }
      return new Promise(resolve => {
        this.page++;
        this.postGoodsListFun(true);
        resolve();
      });
    },
    postGoodsListFun(bool) {
      const {type, timeType, price, isshare, page, seachVal} = this;
      const data = {
        name: seachVal,
        type,
        time_type: timeType,
        price,
        isshare,
        page,
        cityname: this.cityItem.name,
        cityId: this.distriCityId,
        length: '10'
      };
      postGoodsList(data, this.$route.query.type).then(res => {
        this.dataObje = res.data;
        if (bool) {
          this.itemList.push(res.data.list);
          return;
        }
        this.itemList = res.data.list;
      });
    },
    routerFun(id) {
      this.$router.push({
        name: 'house-details',
        query: {
          type: this.$route.query.type,
          id
        }
      });
    },
    listCityClickFun() {
      this.modalCityBool = true;
    },
    topRightFun() {
      this.modalFiltrateBool = true;
    },
    cityFun(item) {
      this.cityItem = item;
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
    position: fixed;
    bottom: 0;
    height: 100%;
    padding-top: 5rem;
    width: 100%;
    .title {
      line-height: 3rem;
      padding: 0px 1rem;
    }
    &-list {
      background: #ffffff;
      height: 100%;
      .ivu-scroll-wrapper{
        height: 100%;
      }
      .ivu-scroll-container{
        height: 100%;
      }
      &-item {
        display: flex;
        padding: 1rem;
        .leftimgBox {
          width: 8.8rem;
          height: 6.5rem;
          min-width: 8.8rem;
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
              // float: right;
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
