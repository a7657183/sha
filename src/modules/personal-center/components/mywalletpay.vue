<template>
  <div class="mywalletpay-all">
    <!-- <myHeader :leftBool="true" text="零钱充值"/> -->
    <div class="mpay-centent">
      <div class="topleft">储蓄卡</div>
      <div class="topright">
        <div class="trlist1"><span class="tt1"><sha-icon type="charge-" style="font-size:1.5rem"></sha-icon><p style="width: 70%;">招商银行（0086）</p><sha-icon type="qianjin" style="font-size:2rem"></sha-icon></span></div>
        <div class="trlist2">当日交易限额￥50000.00</div>
      </div>
    </div>
    <div style="margin: 0 1rem;background: #fff;padding-left: 2rem;height: 4.6rem;line-height: 4.6rem;">充值金额</div>
    <div class="mpay-money">
      <span style="border-bottom: 1px solid #f7f7f7;background:#fff;padding-left: 2rem;font-size: 2rem;">￥</span>
      <span style="display: flex;flex: 1;border-bottom: 1px solid #f7f7f7;background:#fff;font-size: 2rem;">00.00</span>
    </div>
    <div class="mpay-bottom">
      <input style="color: #fff;opacity: 0.6;background: #478bff;height: 3rem;width: 84%;border-radius: 0.5rem;margin: 2rem;" type="button" value="下一步">
    </div>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';

export default {
  components: {
    shaIcon,
    myHeader
  },
  created() {
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
    authenticationFun(name) {
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
.mpay-bottom {
  margin: 0 1rem;
  background: #fff;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.mpay-money {
  width: 100%;
  padding: 0 1rem;
  height: 4.5rem;
  display: flex;
  box-sizing: border-box;
}
.mpay-centent {
  display: flex;
  flex: 1;
  padding: 1rem 1rem 0 1rem;
  .topright {
    display: flex;
    flex: 1;
    flex-direction: column;
    background: #fff;
    border-top-right-radius: 0.5rem;
    .trlist1 {
      overflow: hidden;
      .tt1 {
        display: flex;
        width: 100%;
        height: 2.42rem;
        justify-content: space-between;
        line-height: 3.42rem;
      }
    }
    .trlist2 {
      padding-left: 2.5rem;
      color: #747474;
    }
  }
  .topleft {
    width: 7rem;
    text-align: center;
    padding-top: 1rem;
    box-sizing: border-box;
    height: 4.85rem;
    background: #fff;
    border-top-left-radius: 0.5rem;
  }
}
</style>
