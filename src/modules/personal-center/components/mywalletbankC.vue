<template>
  <div class="bankcard-all">
    <!-- <myHeader :leftBool="true" text="银行卡实名认证"/> -->
    <div class="bankmsg">
      <ul>
        <li style="justify-content: center; line-height:3.5rem">提示：后续实名认证只允许该持卡人认证</li>
        <li><span>银行卡号：</span><Input v-model="cardNo" placeholder="请输入您的银行卡卡号" /></li>
        <li><span>持卡人姓名：</span><Input  v-model="name" placeholder="请输入持卡人姓名"/></li>
        <li><span>持卡人身份证号：</span><Input v-model="idNo" placeholder="请输入持卡人身份证号"/></li>
        <li><span>手机号码：</span><Input v-model="phoneNo" placeholder="请输入手机号码"/></li>
      </ul>
    </div>
    <div class="textBox">
      <p>验证码为共享APP发送，与银行无关，请放心使用！</p>
      <div class="bank-bottom">
        <input type="button" @click="impower" value="立即授权" />
      </div>
    </div>

  </div>
</template>

<script>
import myHeader from '@/components/header';
import { mywalletbankC } from '@/api/modules/personalcenter';
export default {
  components: {
    myHeader
  },
  data() {
    return {
      cardNo: '',
      idNo: '',
      name: '',
      phoneNo: ''
    };
  },
  created() {
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
    impower() {
      if (!this.cardNo || !this.idNo || !this.name || !this.phoneNo) {
        this.$Message.error('请输入完整信息');
        return;
      }
      const data = {
        cardNo: this.cardNo,
        idNo: this.idNo,
        name: this.name,
        phoneNo: this.phoneNo
      };
      mywalletbankC(data).then(res => {
        if (res.data.respCode === '0000') {
          this.$Message.success('实名认证成功！');
          this.$router.push({
            name: 'personal-center'
          });
        } else {
          this.$Message.error('实名认证失败，请确认用户信息正确！');
        }
      }).catch(() => {
        this.$Message.error('认证失败，请核对信息');
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";
.bankcard-all{
  .ivu-input{
    border: none;
    height: 3.5rem;
    line-height: 3.5rem;
  }
  .ivu-input:focus{
    box-shadow: none;
  }
  .textBox{
    p{
      flex: 1 1 0%;padding: 0px 1rem;font-size: 0.8rem;height: 3.5rem;
    }
  }
  .bank-bottom {
    width: 100%;
    padding: 0 2rem;
    input {
      height: 3rem;
      background: #478bff;
      color: #fff;
      border-radius: 0.5rem;
      border: none;
      width: 100%;
    }
  }
  .bankmsg {
    margin-bottom: 0.5rem;
    background: #fff;
    ul {
      width: 100%;
      li {
        height: 3.5rem;
        line-height: 3.5rem;
        display: flex;
        flex: 1;
        padding: 0 1rem;
        border-bottom: 1px solid #f6f6f6;
        overflow: hidden;
        input{font-size: 1rem;}
        ::-webkit-input-placeholder{font-size: 1rem;}
        .ivu-input-type{
          height: 3.5rem;
          line-height: 3.5rem;
        }
        span {
          width: 13rem;
        }
      }
    }
  }
}
</style>
