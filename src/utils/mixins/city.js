import { getRegion } from '@/api/modules/mine';
export default {
  data() {
    return {
      citylevelItem: {}
    };
  },
  methods: {
    provinceClickFun() {
      this.provinceBool = true;
      this.getRegion(0, 1);
    },
    getRegion(val, levelVal, bool) {
      const data = {
        parent_id: val,
        level: levelVal
      };
      getRegion(data).then(res => {
        if (bool) {
          this.cityDistrictList = res.data.data;
          return;
        }
        this.cityList = res.data.data;
      }).catch(err => {
        console.log(err);
      });
    }
  }
};
