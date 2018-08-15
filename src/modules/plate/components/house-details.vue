<template>
  <div class="shareItem details">
    <!-- <myHeader
    :leftBool="true"
    text="详情"
    routerName="subfunClick"
    :topRightFun="topRightFun"
    rightIcon="shoucang1" /> -->
     <Carousel autoplay class="carouselBox" :height="200">
        <Carousel-item v-for="(item, index) in itemData.goods_image" :key="index">
            <div class="demo-carousel">
              <img :src="`${serverPath}${item}`">
            </div>
        </Carousel-item>
    </Carousel>
    <p class="title bottomBor">{{itemData.info.name}}</p>

    <div class="details-item bottomBor">
        <p class="textClassTitle">介绍详情</p>
        <p  v-if="typeFun === '1'">开始时间 {{staDataFun}}</p>
        <p  v-if="typeFun === '1'">结束时间 {{endDataFun}}</p>
        <p class="textClass">{{itemData.info.descb}}</p>
    </div>

    <!-- 车位详情 -->
    <div class="parkingBox"  v-if="typeFun === '1'">
      <div class="details-item bottomBor cheweiItem">
        <p class="moneyClass">{{itemData.info.price}}/{{itemData.info.time_type_name}}</p>
        <div class="cheweiItemRignt">
          小时x
          <InputNumber v-model="cheweiNumber" :min="1"></InputNumber>
          <!-- <sha-icon type="add" size="2" color="#1296db" @click.native="numBerFun"/> -->
        </div>
      </div>
      <div class="details-item bottomBor cheweiItem">
        <p class="textClass" style="line-height: 2.5rem; padding-right: 1rem;">选择开始使用时间</p>
        <div class="cheweiItemRignt" style="flex: 1">
          <DatePicker type="datetime" v-model="statusData"
          placement="top-end"
          :options="disabledDateVal()"
          format="yyyy-MM-dd HH:mm:ss"
          placeholder="开始时间" style="width: 100%"></DatePicker>
          <!-- <sha-icon type="add" size="2" color="#1296db" @click.native="numBerFun"/> -->
        </div>
      </div>
      <div class="details-item bottomBor" v-if="itemData.info.user_info">
        <p class="textClass">联系信息</p>
        <div class="details-item-message">
          <div class="head-portrait">
            <!-- <img :src="`${serverPath}${itemData.info.user_info.img}`"> -->
            <img src="~@/assets/img/timg.jpg">
          </div>
          <div class="name">
            <!-- <p>{{itemData.info.user_info.user_name}}</p> -->
            <p>客服</p>
            <a :href="`tel:${companyTel}`" class="call">{{companyTel}}</a>
          </div>
          <div class="iconBox">
            <a :href="`tel:${companyTel}`" style="color: #ffffff"><shaIcon type="dianhua" size="1.4"></shaIcon> &nbsp;联系 TA</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 别的详情 -->
    <div v-if="typeFun !== '1'">
      <div class="details-item bottomBor" v-if="typeFun === '2'">
        <ul class="houseItem">
          <li><p class="moneyClass">{{itemData.info.housetype}}</p><p class="smallText">房型</p></li>
          <li><p class="moneyClass">{{itemData.info.areas}}平方米</p><p class="smallText">面积</p></li>
          <li><p class="moneyClass">{{itemData.info.price}}/{{itemData.info.time_type_name}}</p><p class="smallText">押二付一</p></li>
        </ul>
      </div>
      <!-- <div class="details-item bottomBor">
        <span class="gradeBoxLaber">好评度：</span> <gradeView :gradeNumber="4"></gradeView>
      </div> -->

      <div class="details-item bottomBor">
        <p class="textClassTitle">位置范围</p>
        <!-- <p class="textClass">小区.天坛人间</p> -->
        <!-- <p class="textClass">本小区租金参考价格 7000~8000/月</p> -->
        <mapItem :cityVal="itemData.info.city_info" :vityAddr="itemData.info.addr"></mapItem>
      </div>

      <div class="details-item bottomBor">
        <p class="textClassTitle">使用规范</p>
        <p class="textClass">如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p>
      </div>

      <div class="details-item bottomBor">
        <p class="textClassTitle">风险提示</p>
        <p class="textClass">如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p>
      </div>
    </div>
    <div id="payHtml" v-html="payHtmlVal"></div>
    <shaModalPay v-model="shaModalPayBool"
    :firstTimeFun="firstTimeFun"
    :modalPayFun="modalPayFun"></shaModalPay>
    <!-- :moneyNumber="Number(itemData.info.price) * cheweiNumber" -->
    <particularsFooter :moneyNumber="Number(itemData.info.price) * cheweiNumber"
    :text="firstTimeFun ? '先用后付款' : '马上支付'" @click.native="myPayFun"></particularsFooter>
    <statusCode v-model="statusCodeBool" :firstTimeFun="firstTimeFun"></statusCode>
    <Modal v-model="tishimodal" width="80%" class="tishiModal">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>正在使用的时间段</span>
        </p>
        <div style="text-align:center" v-for="(item, index) in tishiList" :key="index">
            <p>{{item.start_time}}</p>
            <p>{{item.end_time}}</p>
        </div>
        <div slot="footer" style="display: none;">
        </div>
    </Modal>
  </div>

</template>
<script>
import myHeader from '@/components/header';
import particularsFooter from '@/components/footer/particulars-footer';
import shaIcon from '@/components/sha-icon';
import gradeView from '@/components/grade-view';
import mapItem from '@/components/map-item';
import shaModalPay from '@/components/sha-modal/modal-pay';
import statusCode from '@/components/status-code';
import { postParticulars, postAddOrder, postAddCollect, isUserUsedCar, getTimeLegal } from '@/api/modules/mine';
import { delCollect, getKefuTel } from '@/api/modules/personalcenter';
import moment from 'moment';
// import { launchApp } from '@/assets/js/wxApp';

export default {
  components: {
    myHeader,
    shaIcon,
    particularsFooter,
    gradeView,
    mapItem,
    shaModalPay,
    statusCode
  },
  data() {
    return {
      statusData: '',
      shaModalPayBool: false,
      statusCodeBool: false,
      payHtmlVal: '',
      cheweiNumber: 1,
      firstTime: '',
      tishimodal: false,
      companyTel: '',
      tishiList: [],
      itemData: {
        info: {
          user_info: {}
        }
      }
    };
  },
  computed: {
    staDataFun() {
      return new Date(parseInt(this.itemData.info.start_time) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
      // return moment(new Date(this.itemData.info.start_time)).format('YYYY-MM-DD HH:mm:ss');
    },
    endDataFun() {
      return new Date(parseInt(this.itemData.info.end_time) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
      // return moment(this.itemData.info.end_time).format('YYYY-MM-DD HH:mm:ss');
    },
    orderStatusFun() {
      return this.$route.query.orderStatus;
    },
    firstTimeFun() {
      return this.$route.query.type === '1';
      // return this.firstTime === 1;
    },
    typeFun() {
      return this.$route.query.type;
    }
  },
  created() {
    if (this.$route.query.orderStatus === '2') {
      this.statusCodeBool = true;
    }
    // if (this.typeFun === '1') {
    //   this.isUserUsedCarFun();
    // }
    this.getKefuTelFun();
    this.postParticularsFun();
    window.topLeftFun = this.topLeftFun;
    window.topRightFun = this.topRightFun;
    window.collect = this.collect;
    window.wxURLFun = this.wxURLFun;
  },
  methods: {
    getKefuTelFun() {
      getKefuTel().then(res => {
        this.companyTel = res.data.value;
      });
    },
    disabledDateVal() {
      let timeDisable = new Date(this.staDataFun).getTime() - 86400000;
      return {
        disabledDate(date) {
          return date && date.valueOf() < timeDisable;
        }
      };
    },
    isUserUsedCarFun() {
      isUserUsedCar().then(res => {
        this.firstTime = res.data.status;
      });
    },
    collect() {
      return this.itemData.collect.is_collect;
    },
    topLeftFun() {
      this.$router.back(-1);
    },
    modalPayFun(val, text) {
      const fromVal = (val === 'alipay') ? '1' : '2';
      const info = this.itemData.info;
      let firstData = {};
      if (this.firstTimeFun) {
        const statusVal = moment(this.statusData).format('YYYY-MM-DD HH:mm:ss');
        firstData = {
          start_time: statusVal
        };
      }
      const data = {
        good_id: info.id,
        type: this.typeFun,
        num: this.cheweiNumber,
        price: info.price,
        pay_type: val,
        desc: text,
        from: fromVal,
        ...firstData
      };
      postAddOrder(data).then(res => {
        if (this.firstTimeFun) {
          this.statusCodeBool = true;
          return;
        }
        if (val === 'alipay') {
          this.payHtmlVal = res.data.pay;
          setTimeout(function() {
            document.forms['alipaysubmit'].submit();
          }, 400);
        } else {
          window.location = res.data.pay;
        }
      });
    },
    postParticularsFun() {
      const {id, type} = this.$route.query;
      postParticulars({id}, type).then(res => {
        this.itemData = res.data;
      });
    },
    myPayFun() {
      if (this.firstTimeFun) {
        const statusVal = moment(this.statusData).format('YYYY-MM-DD  HH:mm:ss');
        if (!(this.statusData)) {
          this.$Message.error('请填写开始时间！');
          return;
        }
        const data = {
          start_time: statusVal,
          num: this.cheweiNumber,
          goods_id: this.itemData.info.id
        };
        getTimeLegal(data).then(res => {
          const staVal = Number(res.data.status);
          if (staVal === 1) {
            this.shaModalPayBool = true;
          }
          // status:1可以用 status:2车位共享未开始 status:3车位共享时长不足 status:4与其他时间有冲突
          if (staVal === 2) {
            this.$Message.error('车位共享未开始');
          }
          if (staVal === 3) {
            this.$Message.error('车位共享时长不足');
          }
          if (staVal === 4) {
            this.tishimodal = true;
            this.$Message.error('与其他时间有冲突');
          }
        });
      } else {
        this.shaModalPayBool = true;
      }
    },
    topRightFun() {
      const collect = this.itemData.collect;
      if (Number(collect.is_collect) === 2) {
        const info = this.itemData.info;
        const data = {
          price: info.price,
          pricedesc: info.time_type_name,
          type: this.typeFun,
          img: this.itemData.goods_image[0],
          goods_id: info.id,
          name: info.name
        };
        postAddCollect(data).then(() => {
          this.postParticularsFun();
          this.$Message.success('收藏成功');
          this.collect();
        });
        return;
      }
      delCollect({id: collect.collect_id}).then(res => {
        this.$Message.success('已取消收藏');
        this.postParticularsFun();
        this.collect();
      });
    }
  }
};
</script>

<style lang="less">
@import "~@/assets/styles/variables";
.tishiModal{
  .ivu-modal-footer{
    display: none;
  }
}
.details {
  background: #ffffff;
  .title {
    font-size: 1.3rem;
    font-weight: 400;
    padding: 1rem;
  }
  .carouselBox {
    .demo-carousel {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .cheweiItem{
    display: flex;
    .moneyClass{
      flex: 1;
    }
    .cheweiItemRignt{
      float: right;
    }
  }
  &-item {
    padding: 1rem;
    overflow: hidden;
    .gradeBoxLaber {
      float: left;
      line-height: 2.5rem;
    }
    .houseItem {
      display: flex;
      li {
        width: 33.3%;
        flex: 1;
        text-align: center;
        .moneyClass{
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .smallText {
          font-size: 0.8rem;
          color: @text-light;
        }
      }
    }
    .moneyClass {
      color: @warning-color;
      font-size: 1.5rem;
    }
    .textClassTitle {
      font-size: 1rem;
      padding-bottom: 0.5rem;
      color: @text-color;
    }
    .textClass {
      font-size: 0.8rem;
      color: @text-light;
    }
    &-message {
      display: flex;
      padding: 1rem 0px;
      .head-portrait {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        flex: 1;
        margin-left: 1rem;
      }
      .iconBox {
        background: @primary-light-color;
        border-radius: 3px;
        color: #ffffff;
        height: 2.2rem;
        line-height: 2.2rem;
        padding: 0px 10px;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
