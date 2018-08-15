<template>
    <div class="particularsFooterBox">
      <div class="particularsFooterBox-item">
        <shaIcon type="gouwuche iconClass"></shaIcon>
        <span class="money">￥{{moneyNumber}}</span>
        <span class="text"><shaIcon type="xingzhuang97kaobei5" size="1.6"></shaIcon> {{text}}</span>
      </div>
    </div>
</template>
<script>
import shaIcon from '@/components/sha-icon';
export default {
  props: {
    moneyNumber: Number,
    text: String
  },
  components: {
    shaIcon
  },
  data() {
    return {
      list: []
    };
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.particularsFooterBox {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 3rem;
  background: #2a2a2e;
  color: white;
  &-item {
    position: relative;
    width: 100%;
    height: 100%;
    .iconClass {
      position: absolute;
      top: -2rem;
      font-size: 4rem;
      left: 0.5rem;
      color: @primary-color;
    }
    .money {
      font-size: 1.6rem;
      line-height: 3rem;
      padding-left: 5rem;
    }
    .icon-xingzhuang97kaobei5 {
      position: relative;
      top: 4px;
    }
    .text {
      position: absolute;
      width: 8rem;
      background: #498fff;
      height: 4rem;
      line-height: 4rem;
      right: 0;
      bottom: 0;
      border-radius: 1rem 0 0 0;
      text-align: center;
    }
  }
}
</style>
