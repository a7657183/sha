<template>
  <SlideView v-model="show" class="cityBox">
    <div class="header">{{provinceBool ? '省份' : '城市'}}列表</div>
    <div class="cityBox-item">
      <Row>
          <i-col :span="baseWidthFun" class="listClass" v-for="(item, index) in cityList" :key="index" @click.native="cityClickFun(item)">
          <span>{{item.name}}</span></i-col>
      </Row>
    </div>
    <div class="cityBox-bot"  @click="provinceClickFun"><shaIcon type="qiehuan"></shaIcon>切换省份</div>
  </SlideView>
</template>
<script>
import shaIcon from '@/components/sha-icon';
import SlideView from './slide-view';
import city from '@/utils/mixins/city';

const baseWidth = document.documentElement.clientWidth;
export default {
  mixins: [city],
  components: {
    shaIcon,
    SlideView
  },
  props: {
    value: false,
    cityFun: {
      default: () => undefined,
      type: Function
    }
  },
  data() {
    return {
      show: this.value,
      cityList: [],
      provinceBool: true
    };
  },
  computed: {
    baseWidthFun() {
      return baseWidth > 370 ? '8' : '12';
    }
  },
  methods: {
    cityClickFun(item) {
      if (item.level === '1') {
        this.provinceBool = false;
        this.getRegion(item.id);
      } else {
        this.cityFun(item);
        this.show = false;
      }
    }
  },
  watch: {
    value(val) {
      this.show = val;
      if (val) {
        this.getRegion('0', '1');
      }
    },
    show(val) {
      this.$emit('input', val);
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.cityBox {
  &-bot {
    position: fixed;
    bottom: 0px;
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 3rem;
    background: @border-color-simple;
    color: @text-color;
  }
  .header {
    height: 3.5rem;
    background: @primary-color;
    color: #ffffff;
    text-align: center;
    line-height: 3.5rem;
  }
  &-item {
    height: 85%;
    overflow: auto;
    .listClass {
      text-align: center;
      padding: 1rem 0px;
      :active{
        background: @primary-color;
        color: #ffffff;
      }
      span {
        border-radius: 3rem;
        border: 1px solid @border-color-gray;
        padding: 0.5rem 2.2rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 80%;
        display: block;
        margin: auto;
      }
    }
  }
}
</style>
