<template>
  <div class="shareItem homePage">
    <!-- <myHeader
    :leftBool="false"
    text="共享服务平台"></myHeader> -->

    <div class="homePage-seach">
      <sha-icon type="search homePage-seach-icon" size="1"></sha-icon>
      <i-input v-model="seachVal"  placeholder="请输入..." clearable></i-input>
      <div class="seachBut" @click="seachValFun">确定</div>
    </div>

    <div class="homePage-menu">
       <Row>
        <i-col span="8" class="homePage-menu-col" @click.native="topRoterFun('1')">
          <img src="~@/assets/img/icon-p.png">
          <p>车位</p>
        </i-col>
        <i-col span="8" class="homePage-menu-col" @click.native="topRoterFun('2')">
          <img src="~@/assets/img/icon-f.png">
          <p>房屋</p>
        </i-col>
        <i-col span="8" class="homePage-menu-col" @click.native="topRoterFun('3')">
          <img src="~@/assets/img/icon-r.png">
          <p>人力</p>
        </i-col>
        <i-col span="8" class="homePage-menu-col" @click.native="topRoterFun('4')">
          <img src="~@/assets/img/icon-pj.png">
          <p>票据</p>
        </i-col>
        <i-col span="8" class="homePage-menu-col" @click.native="topRoterFun('5')">
          <img src="~@/assets/img/icon-c.png">
          <p>出行</p>
        </i-col>
        <!-- <i-col span="8" class="homePage-menu-col" @click.native="topRoterFun('6')">
          <img src="~@/assets/img/icon-q.png">
          <p>其他</p>
        </i-col> -->
    </Row>
    </div>

    <div class="homePage-box">
        <p class="title">附近车位</p>
        <ul class="homePage-box-list"  v-if="findListData.length > 0">
          <li class="homePage-box-list-item" v-for="(item, index) in findListData" :key="index" @click="detailsRoterFun(item.id, item.type)">
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
        <div v-else class="noDataClass">没有数据</div>
    </div>
    <myfooter :routNumber="1"></myfooter>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myfooter from '@/components/footer';
// import myHeader from '@/components/header';
import gradeView from '@/components/grade-view';
import { getIndexGoods } from '@/api/modules/mine';
import mixIndex from '@/utils/mixins/mix-index';

let cityObj = '';
/* eslint-disable */
function showPosition(position) {
  cityObj =  position, null, 4;
  localStorage.setItem(
    'cityObjSet',
    cityObj.city
  );
};

function showErr() {
  cityObj =  ''
};

function mayClick() {
  var geolocation = new qq.maps.Geolocation('OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77', 'myapp');
  var positionNum = 0;
  var options = {timeout: 8000};
  geolocation.getLocation(showPosition, showErr, options)
}

/* eslint-disable */
export default {
  mixins: [mixIndex],
  components: {
    shaIcon,
    myfooter,
    // myHeader,
    gradeView
  },
  data() {
    return {
      findListData: [],
      cityObje: '',
      seachVal: ''
    };
  },
  created() {
    mayClick();
    if(this.$route.query.share_token) {
      localStorage.setItem(
        'token',
        this.$route.query.share_token
      );
    }
    window.topMayFun = this.topMayFun;
  },
  methods: {
    topMayFun() {
      mayClick();
      return cityObj.city;
    },
    seachValFun() {
      getIndexGoods({name: this.seachVal}).then(res => {
        this.findListData = res.data.share;
      });
    },
    detailsRoterFun(id, type) {
      this.$router.push({
        name: 'house-details',
        query: {
          type,
          id
        }
      });
    },
    topRoterFun(val) {
      if (val === '6') {
        this.$Message.destroy();
        this.$Message.error('功能暂未开放');
        return;
      }
      this.$router.push({
        name: 'house-list',
        query: {
          type: val
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";

.homePage {
  background: #f8f8f8 !important;
  &-seach {
    position: relative;
    padding: 1rem;
    display: flex;
    .ivu-input-wrapper {
      flex: 1;
    }
    &-icon {
      position: absolute;
      z-index: 2;
      top: 1rem;
      height: 2.5rem;
      line-height: 2.5rem;
      margin-left: 8px;
    }
    .ivu-input {
      padding-left: 2rem;
    }
    .seachBut {
      line-height: 2.5rem;
      margin-left: 1rem;
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
          .money {
            color: @warning-color;
            font-size: 1rem;
          }
          &-title {
            font-size: 1.1rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 16rem;
          }
          &-text {
            font-size: 0.8rem;
            line-height: 2rem;
            position: relative;
            .zhon {
              padding-left: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
