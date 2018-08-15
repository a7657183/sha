<template>
  <Modal
      title="确认付款"
      class="payModalBox"
      v-model="show">
      <p v-if="firstTimeFun" style="line-height: 4rem;">由于你是第一次购买可享用先用否付款</p>
      <RadioGroup v-model="vertical" vertical class="radioItem" v-else>
          <Radio label="alipay" class="bottomBor">
              <span> 支付宝 </span>
              <shaIcon type="umidd17" color="#1296db"></shaIcon>
          </Radio>
          <Radio label="wxpay">
              <span> 微信 </span>
              <shaIcon type="weixin" color="#0ad416"></shaIcon>
          </Radio>
          <!-- <Radio label="wxpay">
              <span> 余额 </span>
              <shaIcon type="z-balance" color="#F5451C"></shaIcon>
          </Radio> -->
      </RadioGroup>
      <Input type="textarea" v-model="desc" placeholder="留言给卖家"/>
      <div slot="footer">
        <i-button type="primary" class="primaryBut" @click.native="subClick">立即付款</i-button>
      </div>
  </Modal>
</template>
<script>
import shaIcon from '@/components/sha-icon';
export default {
  components: {
    shaIcon
  },
  props: {
    value: false,
    firstTimeFun: Boolean,
    modalPayFun: {
      default: () => undefined,
      type: Function
    }
  },
  data() {
    return {
      show: this.value,
      vertical: 'alipay',
      desc: ''
    };
  },
  methods: {
    subClick() {
      if (this.firstTimeFun) {
        this.modalPayFun('0', this.desc);
        return;
      }
      this.modalPayFun(this.vertical, this.desc);
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
@import "~@/assets/styles/variables";
  @media (max-width: 768px) {
    body .ivu-modal{
        width: auto!important;
        margin: 10px 20px;
    }
  }
.payModalBox {
  .ivu-modal-close .ivu-icon-ios-close-empty {
    color: #ffffff;
  }
  .ivu-modal-content {
    .ivu-modal-header {
      background: @primary-color;
      border-radius: 5px 5px 0 0;
      .ivu-modal-header-inner {
        color: #ffffff;
      }
    }
    .ivu-modal-footer {
      border: none;
    }
    .ivu-radio-checked .ivu-radio-inner {
      color: @primary-color;
    }
  }
  .primaryBut {
    width: 100%;
  }
  .radioItem {
    width: 100%;
    .ivu-radio-group-item {
      width: 100%;
      line-height: 4rem;
      height: 4rem;
      .icon {
        float: right;
        font-size: 2rem;
      }
    }
  }
}
</style>
