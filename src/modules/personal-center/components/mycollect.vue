<template>
  <div class="shareItem release">
    <!-- <myHeader :leftBool="true" text="我的收藏"/> -->
    <!-- <div class="arrway">
      <ul>
        <li class="nactiv">按类别</li>
        <li style="border-left:1px solid #000;border-right:1px solid #000;">按价格</li>
        <li>按距离</li>
      </ul>
    </div> -->
    <!-- <topMuneView :list="['筛选', '写字楼',  '公共车位']" :boolNub="boolNub"></topMuneView> -->
    <div class="mycollect-all">
      <ul v-if="dataObje">
        <li class="mycollect-list" v-for="(item, index) in dataObje" :key="index">
          <div style="display: flex;width: 80%;" @click="indexRouterFun(item.goods_id,item.type)">
            <img class="listimg" :src="`${serverPath}${item.img}`" />
            <ul class="llist"><li class="lsl1">{{item.name}}</li><li class="ll2">{{item.goodsNum}}次收藏</li><li class="ll3">${{item.price}}元</li></ul>
          </div>
          <span class="llistDl" @click="deletcollect(item.id)"><sha-icon type="shanchu" size="1.5" style="color:#000;"></sha-icon></span>
        </li>
      </ul>
      <div v-else class="noDataClass">没有数据</div>
    </div>
    <myfooter :routNumber="3"></myfooter>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myfooter from '@/components/footer';
import myHeader from '@/components/header';
import topMuneView from '@/components/topMuneView';
import { myCollect, delCollect } from '@/api/modules/personalcenter';

export default {
  components: {
    shaIcon,
    myfooter,
    myHeader,
    topMuneView
  },
  data() {
    return {
      dataObje: {},
      boolNub: 0
    };
  },
  created() {
    this.myCollectFun();
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
    myCollectFun() {
      myCollect().then(res => {
        this.dataObje = res.data;
      });
    },
    deletcollect(id) {
      delCollect({id: id}).then(res => {
        this.$Message.success('已删除！');
        this.myCollectFun();
      });
    },
    authenticationFun(name) {
      this.$router.push({
        name
      });
    },
    indexRouterFun(id, type) {
      this.$router.push({
        name: 'house-details',
        query: {
          type,
          id
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";
.nactiv {
  color: #277aff;
}
.arrway {
  width: 100%;
  height: 3.35rem;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      display: block;
      float: left;
      width: 33%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
    }
  }
}
.mycollect-all {
  width: 100%;
  ul {
    background: #fff;
    width: 100%;
    .mycollect-list {
      display: flex;
      width: 100%;
      height: 9.21rem;
      border-bottom: 1px solid @success-light-color;
      img {
        width: 10.07rem;
        height: 7.07rem;
        min-width: 10.07rem;
        margin: 0.64rem 0 1.5rem 0.78rem;
      }
      .llistDl{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #eee;
      }
      .llist {
        width: 40%;
        height: 9.21rem;
        padding: 0.64rem 0 0 0.78rem;
        box-sizing: border-box;
        .ll1 {
          width: 100%;
          height: 1.5rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .ll2 {
          width: 100%;
          font-size: 0.8rem;
          height: 4rem;
          line-height: 1.5rem;
          color: @text-lightest;
        }
        .ll3 {
          width: 100%;
          height: 1.5rem;
          line-height: 1.5rem;
          color: red;
        }
      }
    }
  }
}
</style>
