<template>
    <div class="resetpassw-all shareItemCen">
      <!-- <myHeader :leftBool="true" text="密码重置"></myHeader> -->
      <div class="resetpassw">
        <ul class="resetpassw-ul">
          <li  class="resetpassw-ul-li"><Input v-model="phone" placeholder="手机号" /></li>

          <li class="resetpassw-ul-li">
            <Input v-model="verify_code" placeholder="请输入验证码"/>
           <input class="setbtn" type="button" :value="counVal" @click="verificationClick" style="width: 6rem;"  />
          </li>

          <li  class="resetpassw-ul-li" style="margin-bottom: 3rem;">
            <Input v-model="user_password" placeholder="设置新密码"/></li>
          <input class="resetpassw-btn" type="submit" @click="postverifyFun" value="提交" />
        </ul>
      </div>
    </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import { resetpassw, postsend, postverify } from '@/api/modules/login';
import { settime } from './settime';
export default {
  components: {
    shaIcon,
    myHeader
  },
  data() {
    return {
      phone: '',
      verify_code: '',
      user_password: '',
      boolPhone: false,
      countdown: 90,
      counVal: '获取验证码'
    };
  },
  created() {
    window.topLeftFun = this.topLeftFun;
  },
  computed: {
    phoneFun() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      return !reg.test(this.phone);
    }
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
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
    postverifyFun() {
      if (!this.phone && !this.verify_code) {
        this.$Message.error('请填写完整');
      }
      postverify({phone: this.phone, code: this.verify_code}).then(() => {
        this.setUserSubmit();
      }).catch(() => {
        this.$Message.error('验证码验证失败！');
      });
    },
    setUserSubmit() {
      if (!this.phone && !this.user_password) {
        this.$Message.error('请填写完整');
        return;
      }
      const data = {
        phone: this.phone,
        user_password: this.user_password
      };
      resetpassw(data).then(res => {
        if (res.ret === 200) {
          this.$Message.success('密码修改成功！');
          this.$router.push({
            name: 'login'
          });
        }
      }).catch(err => {
        if (err.data.length === 0) {
          this.$Message.error('密码修改失败，请重试！');
        }
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
.resetpassw-all{
  height: 100%;
  position: fixed;
  width: 100%;
  background: #ffffff;
  .resetpassw {
    &-ul {
      padding-top: 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .resetpassw-btn {
        width: 80%;
        height: 2.5rem;
        border: none;
        background: #478bff;
        color: #fff;
        border-radius: 0.2rem;
      }
      &-li {
        width: 80%;
        display: flex;
        height: 3rem;
        line-height: 3rem;
        border-bottom: 1px solid #cdcdcd;
        input{
          border: none;
        }
        .setbtn{
          background: #478bff;
          color: #fff;
          margin: 0.2rem 0;
          padding: 0 0.5rem;
          border-radius: 0.3rem;
          line-height: 2rem;
        }
        p {
          width: 4rem;
          text-align: justify;
        }
      }
    }
  }

}
</style>
