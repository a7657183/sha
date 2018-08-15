<template>
    <div class="shareItemCen">
      <myHeader :leftBool="true" text="共享服务平台"></myHeader>
      <div class="uset-top">
          <img src="~@/assets/img/user-logo.png">
          <div>
            <h5>用户名占位</h5>
            <h5>用户ID占位</h5>
          </div>
      </div>
      <div class="msg-list">
        <jumplist v-for="(item, index) in list" :key="index" :listname="item.name" :rul="item.url"></jumplist>
      </div>
      <div class="uset-bottom" @click="secedeClick">
          退出当前账户
      </div>
    </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import jumplist from '@/components/jump-list';
export default {
  components: {
    shaIcon,
    myHeader,
    jumplist
  },
  data() {
    return {
      list: [
        { name: '我的收货地址', url: 'shippingadd' },
        { name: '账户与安全', url: '1' },
        { name: '隐私', url: '1' },
        { name: '问题反馈', url: '1' },
        { name: '关于我们', url: '1' }
      ]
    };
  },
  methods: {
    secedeClick() {
      localStorage.setItem('token', '');
      this.$router.push({
        name: 'login'
      });
    },
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
.shareItemCen {
  width: 100%;
  .uset-bottom {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    background: #ff4d4d;
    text-align: center;
    color: #fff;
    font-size: 1.25rem;
    // font-weight: 600;
  }
  .msg-list {
    display: block;
    float: left;
    width: 100%;
    height: 19.75rem;
    margin-top: 0.67rem;
    background: #fff;
  }
  .uset-top {
    display: block;
    float: left;
    width: 100%;
    height: 5.78rem;
    line-height: 5.78rem;
    background: #fff;
    padding-top: 0.61rem;
    box-sizing: border-box;
    img {
      display: block;
      float: left;
      margin-left: 1.57rem;
      margin-right: 1rem;
      width: 4.5rem;
      height: 4.5rem;
    }
    h5 {
      height: 1.92rem;
      line-height: 1.92rem;
      width: 100%;
      margin-top: 0.2rem;
    }
  }
}
</style>
