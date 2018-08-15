<template>
  <div class="personal">
    <!-- 个人中心顶部 -->
    <div class="personal-top">
      <div class="top">
        <ul>
          <li><a href="###"></a></li>
          <li>个人中心</li>
          <li @click="secedeClick">退出</li>
        </ul>
      </div>
      <h5>{{dataObje.user_name}}</h5>
      <div class="userImg" @click="routeClick('usermsg')">
        <img :src="`${serverPath}${dataObje.img}`">
      </div>
    </div>
    <!-- 个人中心中部 -->
    <div class="personal-mid">
        <ul>
          <li @click="routeClick('release-list')"><img src="~@/assets/img/user-fabu.png"><h5>我的发布</h5></li>
          <li @click="routeClick('mycollect')"><img src="~@/assets/img/user-shouchang.png"><h5>我的收藏</h5></li>
          <li @click="routeClick('order')"><img src="~@/assets/img/user-lishi.png"><h5>订单详情</h5></li>
          <li @click="routeClick('mywallet')"><img src="~@/assets/img/user-qianbao.png"><h5>我的钱包</h5></li>
        </ul>
    </div>
    <h4 class="servertt">个人服务</h4>
    <div class="serverlist">
        <ul>
            <li  @click="routeClick('release-list')"><sha-icon type="gongxiang"></sha-icon><h5>我的共享</h5></li>
            <li @click="routeClick('mywalletbankC')"><sha-icon type="renzheng"></sha-icon><h5>我的认证</h5></li>
        </ul>
        <ul>
            <li  @click="routeClick('commentList')"><sha-icon type="ic-comment"></sha-icon><h5>我的评价</h5></li>
             <li  @click="routeClick('textForm', '4')"><sha-icon type="jubao"></sha-icon><h5>投诉建议</h5></li>
        </ul>
        <ul>
            <li  @click="routeClick('textForm', '2')"><sha-icon type="lincuzhaomu"></sha-icon><h5>招募</h5></li>
            <li  @click="routeClick('textForm', '1')"><sha-icon type="fuliao"></sha-icon><h5>报料</h5></li>
        </ul>
        <ul>
           <li  @click="routeClick('textForm', '3')"><sha-icon type="drxx59"></sha-icon><h5>商务洽谈</h5></li>
        </ul>
        <ul>
        </ul>
    </div>
    <myfooter :routNumber="5"></myfooter>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myfooter from '@/components/footer';
import { personalcenter } from '@/api/modules/personalcenter';
export default {
  components: {
    shaIcon,
    myfooter
  },
  data() {
    return {
      dataObje: {}
    };
  },
  methods: {
    secedeClick() {
      localStorage.setItem('token', '');
      this.$router.push({
        name: 'login'
      });
    },
    routeClick(name, type) {
      if (name === 'textForm') {
        this.$router.push({
          name,
          query: {
            type
          }
        });
        return;
      }
      this.$router.push({
        name
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    personalcenter().then(res => {
      next(vm => {
        vm.dataObje = res.data;
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";
h5 {
  font-weight: normal;
}
.personal {
  font-weight: normal;
  .serverlist {
    width: 100%;
    background: #fff;
    ul {
      width: 100%;
      height: 4.44rem;
      line-height: 4.44rem;
      border-bottom: 1px solid #f6f6f6;
      li {
        width: 50%;
        height: 100%;
        display: flex;
        float: left;
        text-align: center;
        padding-left: 2rem;
        i {
          display: block;
          float: left;
          width: 2.83rem;
          height: 100%;
          font-size: 2rem;
        }
        h5 {
          height: 100%;
          flex: 1;
          text-align: left;
        }
      }
    }
  }
  .servertt {
    width: 100%;
    height: 2.77rem;
    background: #f8f8f8;
    text-align: center;
    line-height: 2.77rem;
  }
  &-mid {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    ul {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: space-around;
      padding: 1rem 0;
      box-sizing: border-box;
      li {
        img {
          width: 2.88rem;
          height: 2.88rem;
        }
      }
    }
  }
  &-top {
    background-image: url(../../assets/img/per-center-b.png);
    background-size: 100%;
    width: 100%;
    height: 11.22rem;
    color: #fff;
    text-align: center;
    h5 {
      margin-top: 1.22rem;
      margin-bottom: 0.2rem;
    }
    .userImg {
      border-radius: 50%;
      overflow: hidden;
      width: 3.5rem;
      height: 3.5rem;
      margin: 0 auto;
      background: #e8e8e8;
      img {
        width: 100%;
      }
    }
    .top {
      width: 100%;
      height: 3.5rem;
      line-height: 3.5rem;
      padding: 0 1rem;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          font-size: 1rem;
          a {
            color: #fff;
          }
          sha-icon {
            font-size: 26px;
          }
        }
      }
    }
  }
}
</style>
