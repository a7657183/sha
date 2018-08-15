<template>
    <div class="footerBox">
      <ul class="footerBox-row">
          <li :class="{actice: routNumber === 1}" @click="indexRouterFun('homePage')">
            <sha-icon type="huabanfuben" size="1.6"></sha-icon>
              <div>首页</div>
          </li>
          <li :class="{actice: routNumber === 2}"   @click="indexRouterFun('discover')">
            <sha-icon type="faxian" size="1.6"></sha-icon>
              <div>城市圈</div>
          </li>
          <li class="footerBox-row-centre"  @click="indexRouterFun('release')">
              <img src="~@/assets/img/icon-add.png" alt="">
              <!-- <div>1.2</div> -->
          </li>
          <li :class="{actice: routNumber === 4}"   @click="indexRouterFun('news')">
            <sha-icon type="lingdang" size="1.6"></sha-icon>
              <div>消息</div>
          </li>
          <li :class="{actice: routNumber === 5}"  @click="indexRouterFun('personal-center')">
            <sha-icon type="yonghu" size="1.6"></sha-icon>
              <div>个人中心</div>
          </li>
      </ul>
    </div>
</template>
<script>
import shaIcon from '@/components/sha-icon';
export default {
  props: {
    routNumber: Number
  },
  components: {
    shaIcon
  },
  data() {
    return {
      list: []
    };
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
.footerBox {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: @header-size;
  background: white;
  &-row {
    width: 100%;
    text-align: center;
    display: flex;
    .actice {
      color: @primary-color;
    }
    li {
      width: 20%;
      color: @text-color;
      div {
        font-size: 0.8rem;
        position: relative;
        top: -0.3rem;
      }
    }
    &-centre {
      img {
        top: -1.2rem;
        width: 90%;
        position: relative;
      }
    }
  }
}
</style>
