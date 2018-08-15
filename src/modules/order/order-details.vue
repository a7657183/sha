<template>
    <div class="shareItemCen order-all">
      <!-- <myHeader :leftBool="true" text="订单详情" routerName="register"></myHeader> -->
      <!-- <div class="order-top">{{dataObje.name}}</div> -->
      <div class="order-cont">
        <ul>
          <li class="mycollect-list" @click="detailsRouterFun">
            <img class="listimg" :src="`${serverPath}${dataObje.image_url}`" />
            <ul class="llist">
              <li class="lsl1">{{dataObje.name}}</li>
            <li class="ll2" v-if="timeTypeFun">1/{{timeTypeFun}}</li><li class="ll3"><span>￥{{dataObje.price}}</span>
            <span style="color:#717171;margin-right: 2rem;">x{{dataObje.num}}</span></li></ul>
          </li>
        </ul>
      </div>
      <div class="odmid">
        <span>下单时间：{{momentDate}}</span>
        <span>订单编号：{{dataObje.good}}</span>
        <span>我的留言：{{dataObje.desc}}</span>
      </div>
      <div class="b-bottom bottomBor">
        <span>共1件商品</span>
        <span>小计：<i style="color:red;">￥{{dataObje.price}}</i></span>
      </div>
      <div  class="odbottom" v-if="dataObje.order_status === '1'">
        <div id="payHtml" v-html="payHtmlVal"></div>
        <Button type="primary" style="width: 100%; margin-top:2rem" @click="payClick">去支付</Button>
      </div>
      <div class="odbottom" v-if="!(dataObje.is_comment) && dataObje.order_status !== '1'">
        <div class="b-top">商品评分：</div>
        <grade :gradeNumber="gradeNumber" :gradeFun="gradeFun"></grade>
        <div class="b-cont">
          <Input type="textarea" v-model="commentVal" placeholder="请输入你的评论" />
        </div>
        <Button type="primary" style="width: 100%; margin-top:2rem" @click="addCommentClick">评论</Button>
      </div>
      <div v-if="dataObje.comment_msg" style="padding: 1rem">
        <p>我的评价</p>
        <gradeView :gradeNumber="Number(dataObje.comment_msg.score)"></gradeView>
        <p>评价的内容： {{dataObje.comment_msg.content}}</p>
      </div>
      <shaModalPay v-model="shaModalPayBool"
      :modalPayFun="modalPayFun"></shaModalPay>
    </div>
</template>

<script>
import gradeView from '@/components/grade-view';
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import shaModalPay from '@/components/sha-modal/modal-pay';
import { orderDetail, addComment, postPayOrder } from '@/api/modules/order';
// import moment from 'moment';
import grade from '@/components/grade-view/grade';

export default {
  components: {
    gradeView,
    shaIcon,
    myHeader,
    grade,
    shaModalPay
  },
  data() {
    return {
      dataObje: {},
      shaModalPayBool: false,
      commentVal: '',
      gradeNumber: 5,
      payHtmlVal: '',
      itemData: {
        info: {}
      }
    };
  },
  created() {
    this.orderDetailFun();
    window.topLeftFun = this.topLeftFun;
  },
  computed: {
    momentDate() {
      return new Date(parseInt(this.dataObje.addtime) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    },
    timeTypeFun() {
      switch (this.dataObje.time_type) {
        case '1':
          return '时';
        case '2':
          return '日';
        case '3':
          return '月';
        case '4':
          return '年';
        default:
          return '';
      }
    }
  },
  methods: {
    modalPayFun(val) {
      const fromVal = (val === 'alipay') ? '1' : '2';
      postPayOrder({
        pay_type: val,
        order_id: this.dataObje.order_id,
        from: fromVal
      }).then(res => {
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
    payClick() {
      this.shaModalPayBool = true;
    },
    topLeftFun() {
      this.$router.back(-1);
    },
    addCommentClick() {
      const data = {
        title: '订单评论',
        order_id: this.dataObje.order_id,
        content: this.commentVal,
        goods_type: this.dataObje.type,
        goods_id: this.dataObje.good_id,
        score: this.gradeNumber
      };
      addComment(data).then(() => {
        this.$Message.success('评论成功');
        this.$router.push({
          name: 'order'
        });
      });
    },
    gradeFun(val) {
      this.gradeNumber = val;
    },
    detailsRouterFun() {
      this.$router.push({
        name: 'house-details',
        query: {
          type: this.dataObje.type,
          id: this.dataObje.good_id
        }
      });
    },
    orderDetailFun() {
      orderDetail({order_id: this.$route.query.id}).then(res => {
        this.dataObje = res.data;
      });
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.order-all{
  background: #ffffff;
  padding-bottom: 2rem;
  .b-bottom{
    justify-content: flex-end;
    text-align: right;
    padding: 1rem;
    span{
      margin-left: 1rem;
    }
  }
  .odbottom{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0 1rem;
    line-height: 3rem;
    .b-top{
      line-height: 2rem;
    }
    .b-cont{
      width: 100%;
      height: 6rem;
      border-radius: 0.5rem;
      .ivu-input-wrapper{
        .ivu-input{
          height: 6rem;
          background: #eee;
        }
      }
    }
  }
  .odmid{
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    background: #fff;
    line-height: 3rem;
    padding: 0 1rem;
    justify-content: space-between;
    span{
      display: block;
    }
  }
  .order-top{
    margin-top: 3.5rem;
    height: 1.5rem;
    line-height: 2rem;
    background: #fff;
    color: #717171;
    padding-left: 1rem;
  }
  .order-cont {
    width: 100%;
    background: #fff;
    ul {
      width: 100%;
      .mycollect-list {
        display: flex;
        width: 100%;
        height: 9.21rem;
        img {
          width: 10.07rem;
          height: 7.07rem;
          margin: 0.64rem 0 1.5rem 0.78rem;
        }
        .llist {
          height: 9.21rem;
          padding: 0.64rem 0 0 0.78rem;
          box-sizing: border-box;
          overflow: hidden;
          .lsl1 {
            width: 100%;
            height: 2rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 1.5rem;
          }
          .ll2 {
            width: 100%;
            font-size: 0.8rem;
            height: 3rem;
            line-height: 3rem;
            color: @text-lightest;
          }
          .ll3 {
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            color: red;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
