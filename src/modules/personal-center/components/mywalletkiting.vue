<template>
  <div class="mywalletpay-all">
    <!-- <myHeader :leftBool="true" text="零钱提现"/> -->
    <div class="mpay-centent">
      <div class="topleft">储蓄卡</div>
      <div class="topright">
        <div class="trlist1"><span class="tt1">
          <sha-icon type="charge-" size="1.5" /><p style="width: 70%;">{{bankmsgObj.bankName}}</p>
          </span></div>
        <div class="trlist2">当日交易限额￥50000.00</div>
      </div>
    </div>
    <div style="margin: 0 1rem;background: #fff;padding-left: 2rem;height: 4.6rem;line-height: 4.6rem;">提现金额</div>
    <div class="mpay-money">
      <span style="background:#fff;padding-left: 2rem;font-size: 2rem;">￥</span>
       <InputNumber v-model="money" style="width: 80%"></InputNumber>
    </div>
    <div class="mpay-bottom">
      <!-- <input style="color: #fff;opacity: 0.6;background: #478bff;height: 3rem;width: 84%;border-radius: 0.5rem;margin: 2rem;" type="button" value="下一步"> -->
      <Button type="primary" @click="subClick" class="subBottom">下一步</Button>
    </div>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import { postAddTixian } from '@/api/modules/mine';
import { showBankMsg } from '@/api/modules/personalcenter';

export default {
  components: {
    shaIcon,
    myHeader
  },
  data() {
    return {
      money: 0,
      bankmsgObj: {}
    };
  },
  created() {
    this.showBankMsgFun();
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    showBankMsgFun() {
      showBankMsg().then(res => {
        this.bankmsgObj = res.data;
      });
    },
    topLeftFun() {
      this.$router.back(-1);
    },
    subClick() {
      postAddTixian({price: this.money}).then(res => {
        console.log(res);
      });
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
.mywalletpay-all{
      background: #ffffff;
  .mpayInput{
    flex: 1;
  }
  .subBottom{
    width: 80%;
    margin-left: 10%;
  }
  .mpay-bottom {
    margin: 0 1rem;
    background: #fff;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    padding-bottom: 1rem;
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
    // margin-top: 3.5rem;
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
}
</style>
