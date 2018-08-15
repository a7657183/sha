<template>
  <div class="mywallet-all">
    <div class="mywallet-top">
      <myHeader :leftBool="true" text="我的钱包" rightIcon="renminbi"/>
      <ul>
          <li>账户余额（元）</li>
          <li style="font-size:1.92rem;">{{dataObje.money}}</li>
        </ul>
    </div>
    <div class="mywallet-centent">
      <ul>
        <!-- <li @click="indexRouterFun('mywalletpay')"><sha-icon type="charge-" size="2"></sha-icon><p>充值</p><sha-icon type="qianjin" size="2"></sha-icon></li> -->
        <li @click="indexRouterFun('mywalletkiting')"><sha-icon type="tixian" size="2"></sha-icon><p>提现</p><sha-icon type="qianjin" size="2"></sha-icon></li>
        <li @click="indexRouterFun('bankCard')"><sha-icon type="creditcard" size="2"></sha-icon><p>银行卡</p><sha-icon type="qianjin" size="2"></sha-icon></li>
      </ul>
    </div>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myfooter from '@/components/footer';
import myHeader from '@/components/header';
import { mywallet } from '@/api/modules/personalcenter';
export default {
  components: {
    shaIcon,
    myfooter,
    myHeader
  },
  data() {
    return {
      dataObje: {}
    };
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
  },
  beforeRouteEnter(to, from, next) {
    mywallet().then(res => {
      next(vm => {
        vm.dataObje = res.data;
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";
.mywallet-all {
  width: 100%;
  .mywallet-centent {
    background: #fff;
    ul {
      li {
        height: 4.35rem;
        border-bottom: 1px solid #f6f6f6;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 1rem;
        p {
          width: 60%;
        }
      }
    }
  }
  .mywallet-top {
    width: 100%;
    height: 11.07rem;
    padding-top: 3.5rem;
    background-image: url(~@/assets/img/per-center-c.png);
    background-size: 100% 100%;
    ul {
      width: 100%;
      height: 8.21rem;
      // padding-top: 3.5rem;
      li {
        display: flex;
        flex: 1;
        color: #fff;
        padding-left: 1.78rem;
        height: 3.57rem;
        line-height: 3.57rem;
      }
    }
  }
  .headerBox {
    background: none;
  }
}
</style>
