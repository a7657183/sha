import { postFindList, getIndexGoods } from '@/api/modules/mine';
export default {
  data() {
    return {
      findListData: [],
      needListData: []
    };
  },
  created() {
    this.postFindListFun();
  },
  methods: {
    postFindListFun() {
      const bool = this.$route.name === 'homePage';
      const data = {
        cityname: localStorage.getItem('cityObjSet')
      };
      const api = bool ? getIndexGoods(data) : postFindList();
      api.then(res => {
        this.findListData = res.data.share;
        this.needListData = res.data.need;
      }).catch(err => {
        console.log(err);
      });
    }
  }
};
