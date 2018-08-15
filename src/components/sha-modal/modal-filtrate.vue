<template>
  <SlideView v-model="show" class="filtrateBox">
    <div class="header">筛选</div>
    <div class="filtrateBox-but bottomBor">
      <Row>
        <i-col span="12" :class="{aivct: cityPrice}" @click.native="navClickFun('0')">{{cityItem.name}}<shaIcon type="xiala"></shaIcon></i-col>
        <i-col span="12"  v-if="!releaseBool" :class="{aivct: !cityPrice}" @click.native="navClickFun('1')">价格区间<shaIcon type="xiala"></shaIcon></i-col>
    </Row>
    </div>
    <div class="filtrateBox-item" v-if="cityPrice">
      <div class="leftBox">
        <ul>
          <li v-for="item in cityList" :class="['bottomBor', {noCityIdClass: noCityId === item.id}]" :key="item.id" @click="cityDistrict(item)">{{item.name}}</li>
        </ul>
      </div>
      <div class="rightBox">
        <ul>
          <li v-for="item in cityDistrictList" class="rightLiClass" :key="item.id" @click="distriFun(item)">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="filtrateBox-bot"  v-if="cityPrice" @click="cityClickFun"><shaIcon type="qiehuan"></shaIcon> 切换城市</div>
    <div class="filtrateBox-price">
        <ul class="filtrateBox-price-time">
          <li :class="['priceBut', {priceButOn: timeId === item.id}]"
          v-for="item in timeList"
          @click="timeClick(item.id)"
          :key="item.id"><span>{{item.name}}</span></li>
        </ul>
      <div classs="sliderClass" style="padding: 1.5rem">
       <Slider v-model="sliderVal"></Slider>
       <span class="sliderLeft">1k</span><span class="sliderRight">100k</span>
      </div>
      <Button type="primary" style="width: 80%; margin-left: 10%;" @click.native="distriFun(false)">确定</Button>
    </div>
  </SlideView>
</template>
<script>
import SlideView from './slide-view';
import shaIcon from '@/components/sha-icon';
import city from '@/utils/mixins/city';
import { getTimeType } from '@/api/modules/mine';
function dataFun() {
  return {
    cityPrice: true,
    sliderVal: 0,
    cityDistrictList: [],
    noCityId: '',
    timeList: [],
    timeId: ''
  };
}
export default {
  mixins: [city],
  components: {
    SlideView,
    shaIcon
  },
  props: {
    releaseBool: Boolean,
    value: false,
    cityItem: Object,
    distriFunClick: {
      default: () => undefined,
      type: Function
    },
    listCityClickFun: {
      default: () => undefined,
      type: Function
    }
  },
  data() {
    return {
      show: this.value,
      cityList: [],
      ...dataFun()
    };
  },
  methods: {
    timeClick(val) {
      this.timeId = val;
    },
    getTimeTypeFun() {
      getTimeType().then(res => {
        this.timeList = res.data;
      });
    },
    cityDistrict(item) {
      this.noCityId = item.id;
      this.getRegion(item.id, '', true);
    },
    cityClickFun() {
      this.listCityClickFun();
    },
    navClickFun(val) {
      if (val === '0') {
        this.cityPrice = true;
      } else {
        this.cityPrice = false;
      }
    },
    distriFun(item) {
      this.distriFunClick(item, this.sliderVal, this.timeId);
      this.show = false;
    }
  },
  watch: {
    value(val) {
      this.show = val;
      if (val) {
        this.getTimeTypeFun();
        this.getRegion(this.cityItem.id, '');
      } else {
        Object.assign(this, dataFun());
      }
    },
    cityList(val) {
      this.getRegion(val[0].id, '', true);
    },
    cityItem(val) {
      this.getRegion(val.id, '');
    },
    show(val) {
      this.$emit('input', val);
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.filtrateBox {
  .header {
    height: 3.5rem;
    background: @primary-color;
    color: #ffffff;
    text-align: center;
    line-height: 3.5rem;
    position: fixed;
    top: 0px;
    width: 100%;
  }
  &-price {
    padding-top: 9rem;
    .sliderRight {
      float: right;
    }
    .priceBut {
      text-align: center;
      line-height: 4rem;
      margin: 0px 1rem;
      span {
        padding: 0.5rem 1rem;
        border: 1px solid @border-color-gray;
        border-radius: 5px;
      }
    }
    .priceButOn{
      span{
        background: @primary-color;
        color: #ffffff;
        border-color: @primary-color;
      }
    }
  }
  &-but {
    position: fixed;
    height: 3.5rem;
    top: 3.5rem;
    width: 100%;
    background: @border-color-simple;
    text-align: center;
    color: @text-light;
    line-height: 3.5rem;
    .aivct {
      color: @primary-color;
    }
    .icon {
      margin-left: 0.5rem;
    }
  }
  &-item {
    padding-top: 7rem;
    padding-bottom: 3rem;
    height: 100%;
    display: flex;
    .leftBox {
      .noCityIdClass{
        background: @primary-color;
        color: #ffffff;
      }
      .bottomBor {
        border-right: 1px solid @border-color-simple;
      }
    }
    .rightBox {
      background: @border-color-simple;
      .rightLiClass:active{
        color: @primary-color;
      }
    }
    .leftBox,
    .rightBox {
      flex: 1;
      width: 50%;
      height: 100%;
      overflow: auto;
      max-width: 50%;
      ul {
        li {
          overflow: hidden;
          display: block;
          line-height: 3rem;
          text-align: center;
        }
      }
    }
  }
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
}
</style>
