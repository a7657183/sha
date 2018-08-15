<template>
  <div class="mapItem" id="container">
  </div>
</template>
<script>
import { tmap } from './tmap';
export default {
  props: {
    cityVal: String,
    vityAddr: String
  },
  mounted() {
    tmap().then(qq => {
      /* eslint-disable */
      const map = new qq.maps.Map(document.getElementById('container'), {
        // 地图的中心地理坐标。
        center: new qq.maps.LatLng(39.916527, 116.397128),
        zoom: 12
      });
      const geocoder = new qq.maps.Geocoder({
        complete(result) {
          map.setCenter(result.detail.location);
          const marker = new qq.maps.Marker({
            map: map,
            position: result.detail.location
          });
        }
      });
      geocoder.getLocation(this.cityVal + this.vityAddr);
      /* eslint-disable */
    });
  }
};
</script>
<style lang="less">
.mapItem {
  width: 100%;
  height: 12rem;
}
</style>
