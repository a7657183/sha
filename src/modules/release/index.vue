<template>
  <div class="shareItem release">
    <!-- <myHeader
    :leftBool="false"
    text="请选择发布类别"
    rightText="我的发布"
    routerName="release-list"
    /> -->
    <div class="release-top">
      <ul class="release-top-ul">
        <li :class="{nactiv: isshare === '1'}" @click="isshareFun('1')">共享</li>
        <li  :class="{nactiv: isshare === '2'}" @click="isshareFun('2')">需求</li></ul>
    </div>

    <div class="release-menu">
       <Row>
        <i-col span="8" class="release-menu-col" @click.native="releaseRoterFun('1')">
          <img src="~@/assets/img/icon-p.png">
          <p>车位</p>
        </i-col>
        <i-col span="8" class="release-menu-col" @click.native="releaseRoterFun('2')">
          <img src="~@/assets/img/icon-f.png">
          <p>房屋</p>
        </i-col>
        <i-col span="8" class="release-menu-col" @click.native="releaseRoterFun('3')">
          <img src="~@/assets/img/icon-r.png">
          <p>人力</p>
        </i-col>
        <i-col span="8" class="release-menu-col" @click.native="releaseRoterFun('4')">
          <img src="~@/assets/img/icon-pj.png">
          <p>票据</p>
        </i-col>
        <i-col span="8" class="release-menu-col" @click.native="releaseRoterFun('5')">
          <img src="~@/assets/img/icon-c.png">
          <p>交通工具</p>
        </i-col>
        <!-- <i-col span="8" class="release-menu-col" @click.native="releaseRoterFun('6')">
          <img src="~@/assets/img/icon-yx.png">
          <p>游戏</p>
        </i-col> -->
    </Row>
    <!-- <Row>
        <i-col span="8" class="release-menu-col" @click.native="releaseRoterFun('7')">
          <img src="~@/assets/img/icon-fw.png">
          <p>民宿</p>
        </i-col>
        <i-col span="8" class="release-menu-col" @click.native="releaseRoterFun('8')">
          <img src="~@/assets/img/icon-sf.png">
          <p>顺风车</p>
        </i-col>
        <i-col span="8" class="release-menu-col" @click.native="releaseRoterFun('9')">
          <img src="~@/assets/img/icon-q.png">
          <p>其他</p>
        </i-col>
    </Row> -->
    </div>
    <Modal
        v-model="modalBool"
        :closable="false"
        class="authenticationModal">
        <p class="text-p">为了保证您的信息安全</p>
        <p class="text-p">请先进行实名认证</p>
        <div slot="footer">
            <i-button type="primary" size="large" :loading="modal_loading" @click="authenticationFun">认证</i-button>
        </div>
    </Modal>
    <myfooter :routNumber="3"></myfooter>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myfooter from '@/components/footer';
import myHeader from '@/components/header';
import gradeView from '@/components/grade-view';
import { isAuth } from '@/api/modules/mine';

export default {
  components: {
    shaIcon,
    myfooter,
    myHeader,
    gradeView
  },
  data() {
    return {
      modalBool: false,
      modal_loading: false,
      isshare: '1',
      isAuthCard: false
    };
  },
  created() {
    this.isAuthFun();
    window.topRightFun = this.topRightFun;
  },
  methods: {
    topRightFun() {
      this.$router.push({
        name: 'release-list'
      });
    },
    isAuthFun() {
      isAuth().then(res => {
        if (res.data.status === 2) {
          this.isAuthCard = true;
          this.modalBool = true;
        } else {
          this.isAuthCard = false;
          this.modalBool = false;
        }
      });
    },
    isshareFun(val) {
      this.isshare = val;
    },
    releaseRoterFun(val) {
      this.$Message.destroy();
      if (this.isAuthCard) {
        this.$Message.error('请先实名认证');
        return;
      }
      if (val > 5) {
        this.$Message.error('功能暂未开放');
        return;
      }
      this.$router.push({
        name: 'form',
        query: {
          type: val,
          isshare: this.isshare
        }
      });
    },
    authenticationFun() {
      this.modalBool = false;
      this.$router.push({
        name: 'mywalletbankC'
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";
.authenticationModal {
  .ivu-modal {
    margin: 2rem;
  }
  .text-p {
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    line-height: 2.5rem;
  }
  .ivu-modal-header {
    display: none;
  }
  .ivu-modal-footer {
    padding: 0px;
    .ivu-btn {
      border-radius: 0px 0px 5px 5px;
      width: 100%;
    }
  }
}
.release {
  &-top {
    padding: 1rem 0px;
    &-ul {
      width: 10rem;
      margin: auto;
      background: #ffffff;
      border-radius: 5px;
      text-align: center;
      line-height: 2.2rem;
      border: 1px solid @primary-light-color;
      display: flex;
      li {
        width: 50%;
        color: @primary-light-color;
      }
      .nactiv {
        background: @primary-light-color;
        color: #ffffff;
      }
    }
  }
  &-menu {
    padding: 1rem 0px;
    background: white;
    &-col {
      text-align: center;
      padding: 0.5rem 0px;
      img {
        width: 50%;
      }
    }
  }
}
</style>
