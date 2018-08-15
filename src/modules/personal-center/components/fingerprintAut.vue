<template>
    <div class="fingerAut">
      <myHeader :leftBool="true" text="指纹识别认证"></myHeader>
      <div class="fingerAut-cont">
        <img src="~@/assets/img/finger.png">
        <span>请根据提示进行指纹录入</span>
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
      single: true
    };
  },
  methods: {
    authenticationFun(name) {
      this.$router.push({
        name
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
.fingerAut-cont {
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
  img {
    height: 4rem;
    width: 4rem;
    margin: 4rem 0;
  }
  span {
    margin-bottom: 60rem;
  }
}
</style>
