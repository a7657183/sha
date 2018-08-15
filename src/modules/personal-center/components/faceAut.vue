<template>
    <div class="faceAut">
      <myHeader :leftBool="true" text="指纹识别认证"></myHeader>
      <div class="faceAut-cont">
        <p></p>
        <span>请根据提示进行指纹录入</span>
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
.faceAut-cont {
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
  p {
    height: 13rem;
    width: 13rem;
    margin: 4rem 0;
    background: #eee;
    border-radius: 50%;
  }
  span {
    margin-bottom: 60rem;
  }
}
</style>
