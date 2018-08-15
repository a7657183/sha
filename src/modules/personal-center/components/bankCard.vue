<template>
  <div class="bankCard-all">
    <!-- <myHeader :leftBool="true" text="银行卡" rightIcon="more" routerName="mywalletbankC"/> -->
    <div class="bankCard">
      <ul>
        <li class="BKlist" v-if="dataObje.bankName">
          <div class="list-top">
            <!-- <img src="~@/assets/img/weixin.png"> -->
            <div class="lt-r">
              <span>{{dataObje.bankName}}</span>
              <span>{{dataObje.bankName}}</span>
            </div>
          </div>
          <div class="list-bottom">{{dataObje.bankcard}}</div>
        </li>
        <li v-else style="text-align: center; width: 100%" @click="topRightFun">
          请先绑定银行卡<sha-icon type="qianjin" size="2" style="top: 0.4rem; position: relative"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myfooter from '@/components/footer';
import myHeader from '@/components/header';
import { showBankMsg } from '@/api/modules/personalcenter';
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
  created() {
    window.topLeftFun = this.topLeftFun;
    window.topRightFun = this.topRightFun;
  },
  methods: {
    topRightFun() {
      this.$router.push({
        name: 'mywalletbankC'
      });
    },
    topLeftFun() {
      this.$router.back(-1);
    }
  },
  beforeRouteEnter(to, from, next) {
    showBankMsg().then(res => {
      next(vm => {
        vm.dataObje = res.data;
        // if (!(res.data.bankName)) {
        //   vm.$Message.error('请先绑定银行卡！');
        //   vm.$router.push({
        //     name: 'mywalletbankC'
        //   });
        // }
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";
html{background: #fff;}
.bankCard{
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 1rem;
  .BKlist{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 7rem;
    padding: 0.5rem;
    background: #32639e;
    color: #fff;
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
    .list-top{
      height: 3rem;
      display: flex;
      width: 100%;
      font-weight: 0;
      img{
        height: 3rem;
        width: 3rem;
        border-radius: 25%;
      }
      .lt-r{
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 3rem;
      }
    }
    .list-bottom{
      height: 3rem;
      width: 100%;
      font-size: 2rem;
      padding: 0 1rem;
      font-weight: 0;
    }
  }
}
</style>
