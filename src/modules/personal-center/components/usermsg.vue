<template>
    <div class="usermsg-all">
      <!-- <myHeader :leftBool="true" text="个人信息" rightIcon="icon" routerName="personal-com"></myHeader> -->
      <div class="usermsg-top">
        <ul>
          <img :src="`${serverPath}${dataObje.img}`" />
          <li style="margin: 1rem 0;display:block;">{{dataObje.user_name}}</li>
          <li>
            <p>星座</p>
            <span>{{dataObje.constellation}}</span>
            <sha-icon type="qianjin"></sha-icon>
          </li>
          <li>
            <p>所在地</p>
            <span>{{ cityName }}</span>
            <sha-icon type="qianjin"></sha-icon>
          </li>
          <li>
            <p>性别</p>
            <span>{{sex}}</span>
            <sha-icon type="qianjin"></sha-icon>
          </li>
        </ul>
      </div>
      <p class="usertt">账户信息</p>
      <div class="usermsg-bottom">
        <ul>
          <!-- <li>
            <sha-icon type="dianhua" color="#488dff"></sha-icon>
            <p>{{dataObje.phone}}</p>
            <div class="ubottom">
              <span style="margin-right: 1rem;color:#919191;">换绑</span>
              <sha-icon type="qianjin"></sha-icon>
            </div>
          </li>
          <li>
            <sha-icon type="weixin" color="#46d630"></sha-icon>
            <p>微信</p>
            <div>
              <span style="margin-right: 1rem;color:#919191;">解绑</span>
              <sha-icon type="qianjin"></sha-icon>
            </div>
          </li>
          <li>
            <sha-icon type="weibo-copy" color="#d84841"></sha-icon>
            <p>微博</p>
            <div>
              <span style="margin-right: 1rem;">去绑定</span>
              <sha-icon type="qianjin"></sha-icon>
            </div>
          </li> -->
          <li @click="indexRouterFun('resetpassw')">
            <sha-icon type="jjshmima" color="#876bff"></sha-icon>
            <p>修改密码</p>
            <div>
              <span style="margin-right: 1rem;">去修改</span>
              <sha-icon type="qianjin"></sha-icon>
            </div>
          </li>
          <!-- <li>
            <sha-icon type="FaceID" color="#24c789"></sha-icon>
            <p>Face ID登陆</p>
            <div>
              <i-switch style="margin-right: 0.5rem;"></i-switch>
              <sha-icon type="qianjin"></sha-icon>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import { usermsg } from '@/api/modules/personalcenter';
export default {
  components: {
    shaIcon,
    myHeader
  },
  data() {
    return {
      dataObje: {},
      cityName: '',
      sex: String
    };
  },
  created() {
    window.topLeftFun = this.topLeftFun;
    window.topRightFun = this.topRightFun;
  },
  methods: {
    topRightFun() {
      this.$router.push({
        name: 'personal-com'
      });
    },
    topLeftFun() {
      this.$router.back(-1);
    },
    indexRouterFun(name) {
      this.$router.push({
        name
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    usermsg().then(res => {
      next(vm => {
        if (res.data.sex === '1') {
          vm.sex = '女';
        } else {
          vm.sex = '男';
        }
        vm.dataObje = res.data;
        vm.cityName = res.data.city_msg.name;
        console.log(res.data);
      });
    }).catch(err => {
      if (err.data.status === '403') {
        this.$Message.error('获取用户信息失败，请稍后重试！');
      }
    });
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.usertt {
  margin-bottom: 0.5rem;
  background: #fff;
  height: 2.5rem;
  line-height: 2.5rem;
  padding-left: 1rem;
}
.usermsg-bottom {
  width: 100%;
  padding: 0.5rem 1rem 0 1rem;
  box-sizing: border-box;
  background: #fff;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    li {
      height: 3rem;
      line-height: 3rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f8f8f8;
      .ubottom{
        width: 6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      p {
        width: 60%;
        text-align: left;
      }
    }
    img {
      border-radius: 50%;
      margin-top: 1.5rem;
      width: 4.35rem;
      height: 4.35rem;
    }
  }
}
.usermsg-top {
  width: 100%;
  height: 20rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  ul {
    width: 100%;
    height: 100%;
    background: url("~@/assets/img/usermsgbk.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 6px 6px 0px #efefef;
    li {
      width: 100%;
      text-align: center;
      color: #fff;
      height: 2.28rem;
      line-height: 2.28rem;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      ::-webkit-input-placeholder {
        color: #fff;
      }
      p {
        width: 4rem;
        text-align: left;
      }
    }
    img {
      border-radius: 50%;
      margin-top: 1.5rem;
      width: 4.35rem;
      height: 4.35rem;
      background: #eee;
    }
  }
}
</style>
