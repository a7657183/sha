<template>
  <SlideView v-model="show" class="mapFanBox">
    <div class="mapFanBoxId" id="container"></div>
  </SlideView>

</template>
<script>
import { tmap } from './tmap';
import SlideView from '../sha-modal/slide-view';
export default {
  components: {
    SlideView
  },
  props: {
    value: false,
    cityName: {}
  },
  data() {
    return {
      show: this.value
    };
  },
  watch: {
    value(val) {
      this.show = val;
      if (val) {
        this.tmapFun();
      }
    },
    show(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    tmapFun() {
      tmap().then(qq => {
        /* eslint-disable */
        const map = new qq.maps.Map(document.getElementById('container'), {
          // 地图的中心地理坐标。
          center: new qq.maps.LatLng(39.916527, 116.397128),
          zoom: 12
        });
        const searchService = new qq.maps.SearchService({
            panel:document.getElementById('container'),
            map : map
        });
        // console.log(广东省深圳市光明新区光明街道);
        if (this.cityName) {
          const cityNameList = this.cityName.split(",");
          const cityText = `${cityNameList[0]}${cityNameList[1]}${cityNameList[2]}`
          searchService.setLocation(cityText);
          searchService.search('房产小区:住宅区:住宅小区');
        }
        setTimeout(function() {
          map.zoomTo(12);
        }, 1500);
        // geocoder.getLocation(this.cityVal);
        /* eslint-disable */
      });
    }
  }
};
</script>
<style lang="less">
.mapFanBox {
  .smnoprint{
    left: 0px;
  }
  .ivu-modal-close{
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    .ivu-icon{
      line-height: 3rem;
    }
  }
  .mapFanBoxId{
    position: relative;
    width: 100%;
    min-height: 100%;
  }
}
</style>
