<template>
    <div class="login-all">
      <!-- <myHeader :leftBool="true" rightText="注册" routerName="register"></myHeader> -->
      <div class="login">
        <ul>
          <span style="margin: 3rem 0;font-size: 2rem;text-decoration: underline;">共享服务平台</span>
          <li><p>帐号：</p><Input v-model="userName" placeholder="请输入手机号码"/></li>
          <li><p>密码：</p>
          <Input type="password" v-model="password" placeholder="Password" /></li>
          <input class="login-btn" type="button" @click="subClick" value="登陆"/>
          <a @click="indexRouterFun('resetpassw')" style="position:absolute;top:21.5rem;right:2rem;color:#000;">忘记密码？</a>
          <div class="login-bottom">
            <div class="line">其他登陆</div>
            <div class="bottom">
              <div class="left" @click="autClick">
                <img src="~@/assets/img/weibo.png">
                <p>微博</p>
              </div>
              <div class="left" @click="wxRouterClick">
                <img src="~@/assets/img/weixin.png">
                <p>微信</p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import { postlogin, requestAuthorize } from '@/api/modules/login';
export default {
  components: {
    shaIcon,
    myHeader
  },
  data() {
    return {
      userName: '',
      password: ''
    };
  },
  computed: {
    phoneFun() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      return !reg.test(this.userName);
    }
  },
  created() {
    window.topRightFun = this.topRightFun;
  },
  methods: {
    wxRouterClick() {
      window.location = 'http://wxlogin.com';
    },
    topRightFun() {
      this.$router.push({
        name: 'register'
      });
    },
    autClick() {
      requestAuthorize({type: 'sina'}).then(res => {
        window.location.href = res.data.url;
      });
    },
    subClick() {
      const data = {
        user_name: this.userName,
        user_password: this.password
      };
      if (this.phoneFun) {
        this.$Message.error('请输入正确的手机号码');
        return;
      };
      postlogin(data).then(res => {
        if (res.ret === 200) {
          this.$Message.success('登陆成功！');
          localStorage.setItem(
            'token',
            res.data.share_token.share_token
          );
          this.$router.push({
            name: 'homePage'
          });
        }
      }).catch(() => {
        this.$Message.error('错误！请输入正确的用户名及密码！');
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
.login-all{
    height: 100%;
    position: fixed;
    width: 100%;
    background: #ffffff;
    .login {
      background: #fff;
      .login-bottom{
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
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .login-btn {
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
          margin-bottom: 0.5rem;
          border-bottom: 1px solid #e5e5e5;
          p {
            width: 6rem;
            text-align: justify;
          }
          input {
            border: none;
          }
        }
      }
    }
}
</style>
