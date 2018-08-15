<template>
    <div class="register-all shareItemCen">
      <!-- <myHeader :leftBool="true" text="注册用户"></myHeader> -->
      <div class="register">
        <ul>
          <li><p>帐号：</p><Input v-model="phone" placeholder="请输入手机号码"/></li>
          <li class="resetpassw-ul-li">
            <p style="width: 14rem;">验证码：</p>
            <Input v-model="verify_code" placeholder="请输入验证码"/>
            <input class="setbtn" type="button" :value="counVal" @click="verificationClick" style="width: 13rem;"  />
          </li>
          <li><p>密码：</p><Input type="password"  v-model="password" placeholder="请输入密码"/></li>
          <li><p>确认密码：</p><Input type="password" @on-blur="blurFun" v-model="passwordTwo" placeholder="请重新输入密码"/></li>
          <span style="color:red;" v-if="!passwordBool">两次密码不一致</span>
          <!-- <li><p>验证码：</p><input style="width:40%" type="text"><img style="width:7rem;height:3rem;" src="~@/assets/img/yanzhen.png"><p>看不清？</p></li>
          <span style="color:red;">验证码错误</span> -->
          <li style="border-bottom:none;justify-content: center;"><Checkbox v-model="single"></Checkbox>
          <p @click="xieyiClick" style="text-decoration: underline;">同意共享平台协议</p></li>
          <!-- <input class="register-btn"  :disabled="" type="button" value="注册"> -->
          <Button type="primary" :disabled="!single" @click="postverifyFun"  style="width: 80%">注册</Button>
        </ul>
      </div>
      <Modal
          v-model="xieyiBool"
          title="共享平台协议"
          @on-ok="modalOkFun">
          <p>我是协议我是协议我是协议我是协议我是协议我是协议我是协议我是协议我是协议我是协议我是协议我是协议我是协议我是协议</p>
      </Modal>
    </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import { register, postsend, postverify } from '@/api/modules/login';
import { settime } from './settime';
export default {
  components: {
    shaIcon,
    myHeader
  },
  data() {
    return {
      phone: '',
      password: '',
      passwordTwo: '',
      single: false,
      xieyiBool: false,
      blurBool: false,
      verify_code: '',
      countdown: 90,
      counVal: '获取验证码'
    };
  },
  computed: {
    passwordBool() {
      if (this.password && this.passwordTwo && this.blurBool) {
        return this.password === this.passwordTwo;
      }
      return true;
    },
    phoneFun() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      return !reg.test(this.phone);
    }
  },
  created() {
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    postverifyFun() {
      if (!this.phone && !this.verify_code) {
        this.$Message.error('请填写完整');
      }
      postverify({phone: this.phone, code: this.verify_code}).then(() => {
        this.regClick();
      }).catch(() => {
        this.$Message.error('验证码验证失败！');
      });
    },
    verificationClick() {
      this.$Message.destroy();
      if (this.phoneFun) {
        this.$Message.error('手机号码不正确');
        return;
      }
      postsend({phone: this.phone}).then(res => {
        settime(this);
      });
    },
    topLeftFun() {
      this.$router.back(-1);
    },
    blurFun() {
      this.blurBool = true;
    },
    modalOkFun() {
      this.single = true;
    },
    xieyiClick() {
      this.xieyiBool = true;
    },
    regClick() {
      this.$Message.destroy();
      if (!this.phone && !this.password && !this.passwordTwo) {
        this.$Message.error('请填写完整');
        return;
      }
      if (!this.passwordBool) {
        this.$Message.error('两次输入密码不一致');
        return;
      }
      if (this.phoneFun) {
        this.$Message.error('请输入正确的手机号码');
        return;
      }
      const data = {
        phone: this.phone,
        user_password: this.password
      };
      register(data).then(res => {
        this.$Message.success('登陆成功！');
        localStorage.setItem(
          'token',
          res.data.share_token
        );
        this.$router.push({
          name: 'homePage'
        });
      }).catch(err => {
        this.$Message.error(err.msg);
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
.register-all{
  height: 100%;
  position: fixed;
  width: 100%;
  background: #ffffff;
  .setbtn{
    background: #478bff;
    color: #fff;
    margin: 0.2rem 0;
    padding: 0 0.5rem;
    border-radius: 0.3rem;
    line-height: 2rem;
    border: none;
  }
  .ivu-input{
    height: 3rem;
    line-height: 3rem;
    border: none;
  }
  .register {
    .register-bottom{
      position: fixed;
      bottom: 0;
      left: 0;
      background: #fff;
      width: 100%;
      .bottom{
        display: flex;
        .left{
          width: 50%;
          text-align: center;
          img{width: 2rem;}
        }
      }
      .line{
        margin: 20px 0;
        line-height: 1px;
        border-left: 9rem solid #ececec;
        border-right: 9rem solid #ececec;
        text-align: center;
      }
    }
    ul {
      padding-top: 9rem;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      color: #bababa;
      .register-btn {
        width: 80%;
        height: 2.5rem;
        border: none;
        background: #478bff;
        color: #fff;
        border-radius: 0.2rem;
      }
      li {
        width: 80%;
        display: flex;
        height: 3rem;
        line-height: 3rem;
        padding-bottom: 1px;
        border-bottom:1px solid #bababa;
        overflow: hidden;
        p {
          width: 9rem;
          text-align: justify;
        }
      }
    }
  }

}
</style>
