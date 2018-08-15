<template>
    <ul class="topMuneViewBox bottomBor">
      <li v-for="(item, index) in list" :key="index" :class="{boolNubClass: boolNub === (index +1)}" @click="muneClick(index + 1)">{{item}}</li>
    </ul>
</template>
<script>
export default {
  props: {
    list: Array,
    boolNub: Number,
    topMuneFun: {
      default: () => undefined,
      type: Function
    }
  },
  methods: {
    muneClick(val) {
      this.topMuneFun(val);
    }
  }
};
</script>

<style lang="less">
@import "~@/assets/styles/variables";
.topMuneViewBox {
  display: flex;
  background: #ffffff;
  padding: 1.5rem 0px;
  position: relative;
  z-index: 3;
  .boolNubClass {
    color: @primary-color;
  }
  li {
    flex: 1;
    text-align: center;
    border-left: 1px solid #808080;
    font-size: 1.2rem;
    line-height: 1rem;
  }
  :first-child {
    border: none;
  }
}
</style>
