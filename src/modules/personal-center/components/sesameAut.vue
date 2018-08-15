<template>
    <div class="sesameAut">
      <myHeader :leftBool="true" text="芝麻实名认证"></myHeader>
      <div class="sesameAut-cont">
        <ul>
          <li>请输入您的真实资料用于认证</li>
          <li><p>姓名：</p><input type="text" v-model="nameVal" placeholder="请输入姓名"></li>
          <li><p>身份证：</p><input type="text" v-model="identityCard " placeholder="请输入证件号"></li>
          <li><input class="btn" type="button" value="立即授权" @click="subClick" /></li>
        </ul>
      </div>
      <div class="Aut-bottom">
          <ul>
            <li><sha-icon type="wenhao" style="margin-right:1rem;color:#478bff;"></sha-icon>什么是芝麻实名认证？</li>
            <li>使用芝麻实名认证的用户需提供姓名，身份证等信息，即可核实认证人身份的真实性！</li>
          </ul>
        </div>
    </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import jumplist from '@/components/jump-list';
import { postAuthentication } from '@/api/modules/mine';
export default {
  components: {
    shaIcon,
    myHeader,
    jumplist
  },
  data() {
    return {
      single: true,
      nameVal: '',
      identityCard: ''
    };
  },
  methods: {
    subClick() {
      postAuthentication({
        cardno: this.identityCard,
        realname: this.nameVal
      }).then(res => {
        console.log(res);
      });
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
.Aut-bottom {
  margin: 0 2rem;
  ul {
    li {
      width: 100%;
      text-align: center;
      margin: 0.5rem 0;
    }
  }
}
.sesameAut-cont {
  margin-top: 3.5rem;
  ul {
    background: #fff;
    li {
      width: 100%;
      line-height: 3rem;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: center;
      .btn {
        width: 70%;
        margin: 3rem;
        height: 3rem;
        background: #478bff;
        border-radius: 0.4rem;
        color: #fff;
      }
      input {
        border: none;
      }
      p {
        width: 5rem;
      }
    }
  }
}
</style>
