<template>
    <div class="certification">
      <!-- <myHeader :leftBool="true" text="共享服务平台"></myHeader> -->
      <div class="certification-cont">
        <ul>
          <!-- <li @click="indexRouterFun('sesameAut')"><sha-icon type="danxuanxuanzhong" color="#478bff" style="margin-right: 1rem;"></sha-icon>芝麻实名认证</li> -->
          <li @click="indexRouterFun('fingerprintAut')"><sha-icon type="danxuanxuanzhong" color="#478bff" style="margin-right: 1rem;"></sha-icon>指纹识别认证</li>
          <li @click="indexRouterFun('faceAut')"><sha-icon type="danxuanxuanzhong" color="#478bff" style="margin-right: 1rem;"></sha-icon>人脸识别认证</li>
          <li @click="indexRouterFun('mywalletbankC')"><sha-icon type="danxuanxuanzhong" color="#478bff" style="margin-right: 1rem;"></sha-icon>银行卡实名认证</li>
        </ul>
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
  created() {
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
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
html{background: #fff;}
.certification-cont {
  // padding: 4.5rem 0;
  background: #fff;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      width: 50%;
      height: 3rem;
      line-height: 3rem;
    }
  }
}
</style>
