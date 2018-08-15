<template>
  <div class="headerBox">
    <div class="headerBox-left" v-if="leftBool" @click="$router.back(-1)"><sha-icon type="houtui" size="1"  color="#ffffff"></sha-icon></div>
    <div :class="['headerBox-center', {fouon: textBotton}]">
      <span class="fouonClass">{{text}}</span>
      <span class="textBotton">{{textBotton}}</span>
      <div class="header-seach" v-if="zhonBool">
        <sha-icon type="search header-seach-icon" size="1.2" color="#b8b8b8"></sha-icon>
        <i-input v-model="seachVal"  placeholder="请输入..." clearable @on-change="changeFun"></i-input>
      </div>
    </div>
    <div class="headerBox-right" @click="topRouterFun" v-if="rightText || rightIcon">
      {{rightText}}
      <sha-icon :type="rightIcon" v-if="rightIcon" size="1.2" color="#ffffff"></sha-icon>
    </div>
  </div>
</template>
<script>
import shaIcon from '@/components/sha-icon';
export default {
  props: {
    leftBool: Boolean,
    text: String,
    rightText: String,
    rightIcon: String,
    routerName: String,
    textBotton: String,
    zhonBool: Boolean,
    seachFun: {
      default: () => undefined,
      type: Function
    },
    topRightFun: {
      default: () => undefined,
      type: Function
    }
  },
  components: {
    shaIcon
  },
  data() {
    return {
      seachVal: ''
    };
  },
  methods: {
    changeFun() {
      this.seachFun(this.seachVal);
    },
    topRouterFun() {
      if (this.routerName === 'subfunClick') {
        this.topRightFun();
        return;
      }
      this.$router.push({
        name: this.routerName
      });
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.headerBox {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: @header-size;
  line-height: @header-size;
  background: @primary-color;
  color: white;
  z-index: 100;

  .header-seach {
    position: relative;
    width: 70%;
    margin: auto;
    padding: 1rem;
    display: flex;
    background: #ffffff;
    border-radius: 4px;
    height: 30px;
    padding: 0px;
    overflow: hidden;
    .ivu-input-wrapper {
      flex: 1;
    }
    .ivu-input {
      border: none;
    }
    .ivu-input:focus {
      box-shadow: none;
    }
    &-icon {
      z-index: 2;
      top: 1rem;
      height: 32px;
      line-height: 30px;
      margin-left: 8px;
    }
    .seachBut {
      line-height: 32px;
      margin-left: 1rem;
    }
  }
  &-left {
    width: 1rem;
    padding-left: 1rem;
    position: absolute;
  }
  .fouon {
    line-height: 2.6rem;
    .fouonClass{
      position: relative;
      top: -0.4rem;
    }
  }
  &-center {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: Center;
    height: 3.5rem;
    .textBotton {
      position: absolute;
      top: 1.3rem;
      left: 50%;
      width: 5rem;
      text-align: center;
      font-size: 0.6rem;
      margin-left: -2.5rem;
    }
  }
  &-right {
    position: absolute;
    right: 0px;
    top: 0px;
    padding-right: 1rem;
  }
}
</style>
