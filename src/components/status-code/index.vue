<template>
  <Modal v-model="show"
   class="statusCode">
    <sha-icon type="dui" size="5" color="#2CCC06"></sha-icon>
    <p class="text2">{{firstTimeFun ? '下单成功' : '支付成功'}}</p>
    <p class="text"><span @click="routerFun('homePage')">返回首页</span><span  @click="routerFun('order')">查看订单</span></p>
  </Modal>
</template>
<script>
import shaIcon from '@/components/sha-icon';
export default {
  components: {
    shaIcon
  },
  props: {
    firstTimeFun: Boolean,
    value: false
  },
  data() {
    return {
      show: this.value
    };
  },
  methods: {
    routerFun(name) {
      this.$router.push({
        name
      });
    }
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit('input', val);
    }
  }
};
</script>
<style lang="less">
.statusCode {
  // position: fixed;
  // top: 0px;
  // left: 0px;
  // right: 0px;
  // bottom: 0px;
  // background: #ffffff;
  // z-index: 10000;
  // text-align: center;
  // padding-top: 6rem;
  .ivu-modal{
    width: 100% !important;
    height: 100% !important;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: 0px;
    .ivu-modal-content{
          padding-top: 6rem;
      height: 100%;
      border-radius: 0px;
      text-align: center;
    }
  }
  .ivu-modal-footer{
    display: none;
  }
  .text {
    font-size: 1rem;
    line-height: 4rem;
    span{
      padding: 1rem;
    }
  }
  .text2 {
    font-weight: 600;
    font-size: 1.4rem;
  }
}
</style>
