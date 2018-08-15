<template>
    <div class="spall">
      <myHeader :leftBool="true" text="我的收货地址" rightText="添加新地址"></myHeader>
      <div class="shippinglist">
        <ul>
          <li @click="indexRouterFun('editadd')"><img src="~@/assets/img/user-logo.png"><div><div style="display: flex;flex: 1;"><span class="sp1"><i>名字占位</i>13800138000</span></div><span class="sp4"><i>[标签][占位]</i>地址占位地址占位地址占位地址占位地址占位</span></div><span class="sp3">编辑</span></li>
          <li @click="indexRouterFun('editadd')"><img src="~@/assets/img/user-logo.png"><div><div style="display: flex;flex: 1;"><span class="sp1"><i>名字占位</i>13800138000</span></div><span class="sp4"><i>[标签][占位]</i>地址占位地址占位地址占位地址占位地址占位</span></div><span class="sp3">编辑</span></li>
          <li @click="indexRouterFun('editadd')"><img src="~@/assets/img/user-logo.png"><div><div style="display: flex;flex: 1;"><span class="sp1"><i>名字占位</i>13800138000</span></div><span class="sp4"><i>[标签][占位]</i>地址占位地址占位地址占位地址占位地址占位</span></div><span class="sp3">编辑</span></li>
        </ul>
      </div>
    </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
export default {
  components: {
    shaIcon,
    myHeader
  },
  methods: {
    indexRouterFun(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
i {
  font-style: normal;
}
.shippinglist {
  margin-top: 3.5rem;
  width: 100%;
  ul {
    li {
      display: flex;
      width: 100%;
      height: 5.78rem;
      line-height: 5.78rem;
      background: #fff;
      border-bottom: 1px solid @text-lightest;
      .sp1 {
        line-height: 2rem;
      }
      .sp2 {
        width: 11.71rem;
        line-height: 2.5rem;
      }
      .sp3 {
        justify-content: center;
        flex: 1;
        height: 5.78rem;
        line-height: 5.78rem;
        border-left: 1px solid #B0B0B0;
        text-align: center;
      }
      .sp4 {
        height: 4.14rem;
        padding-top: 0.5rem;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span {
        display: block;
        float: left;
        height: 1.71rem;
        line-height: 1.71rem;
        // padding-top: 0.71rem;
        box-sizing: border-box;
      }
      img {
        width: 2.85rem;
        height: 2.85rem;
        margin: 1.42rem 0.5rem 1.42rem 0.42rem;
        border-radius: 50%;
      }
      div{
        width: 65%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
