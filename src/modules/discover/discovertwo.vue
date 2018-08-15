<template>
  <div class="discovertwo-all">
    <!-- <myHeader :leftBool="false" :zhonBool="true" routerName="subfunClick" :topRightFun="topRightFun" rightIcon="shoucang1"></myHeader> -->
    <div class="discovertwo">
      <topMuneView :list="['按类别', '按价格',  '按距离']" :boolNub="1"></topMuneView>
      <div class="discovertwo-list">
        <div class="newiss">最新发布</div>
        <ul class="find">
          <li class="find-list">
            <ul class="find-list-top">
              <img src="~@/assets/img/user-logo.png">
              <ul>
                <li class="find-list-top-l1">
                  <span style="font-weight: 600;color:#000;">用户名称占位</span>
                  <span>发布时间：<i>6小时</i></span>
                </li>
                <li class="find-list-top-l1">
                  <span>南山区</span>
                  <span>已共享：<i>33次</i></span>
                  <span><sha-icon type="shou"></sha-icon>4.1分</span>
                </li>
                <li class="find-list-top-l1" style="color:#bfbfbf;">biubiubiububiubiubiubiubiububiubiubiubiubiububiubiu</li>
              </ul>
            </ul>
            <div class="find-list-title">
              <span style="max-width: 13rem;text-overflow: ellipsis;overflow: hidden;">超大停车 风水好 旺财 辟邪</span>
              <span style="color:red;">￥88</span>
            </div>
            <div class="find-list-cont">fhjshfsjakhfjshfjksfhasjkfhkjsfhjkshfkjasdhfjfhjshfsjakhfjshfjksfhasjkfhkjsfhjkshfkjasdhfjasfkadhfjksdhfjksafhjksfhjkhfsjdhfjakshfasfkadhfjksdhfjksafhjksfhjkhfsjdhfjakshf</div>
            <img class="findimg" src="~@/assets/img/per-center-b.png">
            <div class="find-bottom-btn">
              <span><sha-icon type="shoucang" size="1.5"></sha-icon>收藏</span>
              <span style="border-left:1px solid #c2c2c2;"><sha-icon type="aixin" size="1.5" style="color:red;"></sha-icon>1234</span>
            </div>
          </li>
          <li class="find-list">
            <ul class="find-list-top">
              <img src="~@/assets/img/user-logo.png">
              <ul>
                <li class="find-list-top-l1">
                  <span style="font-weight: 600;color:#000;">用户名称占位</span>
                  <span>发布时间：<i>6小时</i></span>
                </li>
                <li class="find-list-top-l1">
                  <span>南山区</span>
                  <span>已共享：<i>33次</i></span>
                  <span><sha-icon type="shou"></sha-icon>4.1分</span>
                </li>
                <li class="find-list-top-l1" style="color:#bfbfbf;">biubiubiububiubiubiubiubiububiubiubiubiubiububiubiu</li>
              </ul>
            </ul>
            <div class="find-list-title">
              <span style="max-width: 13rem;text-overflow: ellipsis;overflow: hidden;">超大停车 风水好 旺财 辟邪</span>
              <span style="color:red;">￥88</span>
            </div>
            <div class="find-list-cont">fhjshfsjakhfjshfjksfhasjkfhkjsfhjkshfkjasdhfjfhjshfsjakhfjshfjksfhasjkfhkjsfhjkshfkjasdhfjasfkadhfjksdhfjksafhjksfhjkhfsjdhfjakshfasfkadhfjksdhfjksafhjksfhjkhfsjdhfjakshf</div>
            <img class="findimg" src="~@/assets/img/per-center-b.png">
            <div class="find-bottom-btn">
              <span><sha-icon type="shoucang" size="1.5"></sha-icon>收藏</span>
              <span style="border-left:1px solid #c2c2c2;"><sha-icon type="aixin" size="1.5" style="color:red;"></sha-icon>1234</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <myfooter :routNumber="2"></myfooter>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
import myfooter from '@/components/footer';
import topMuneView from '@/components/topMuneView';

export default {
  components: {
    shaIcon,
    myHeader,
    myfooter,
    topMuneView
  },
  created() {
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    }
  },
  data() {
    return {
      name
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~@/assets/styles/variables";
.discovertwo{
  .discovertwo-list{
    display: block;
    float: left;
    width: 100%;
    height: 100%;
    margin-bottom: 3.5rem;
    .find{
      margin: 0 0.5rem;
      .find-list{
        background: #fff;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        box-shadow: 4px 4px 8px #888888;
        margin-bottom: 1rem;
        .find-bottom-btn{
          margin: 0 2.5rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          span{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 9rem;
          }
        }
        .findimg{
          margin: 0 2.5rem;
          height: 8.5rem;
        }
        .find-list-cont{
          height: 4.5rem;
          margin: 0 2.5rem;
          word-wrap:break-word;
          overflow: hidden;
          color: #bfbfbf;
        }
        .find-list-title{
          display: flex;
          justify-content: space-between;
          margin: 0 2.5rem;
          height: 2rem;
          line-height: 2rem;
        }
        .find-list-top{
          padding: 0.5rem 1.5rem;
          display: flex;
          flex: 1;
          width: 100%;
          height: 5rem;
          ul{
            display: flex;
            flex: 1;
            flex-direction: column;
            overflow: hidden;
            margin-left: 1rem;
            .find-list-top-l1{
              justify-content: space-between;
              display: flex;
              span{color:#bfbfbf;}
            }
          }
          .img{
            width: 4rem;
            height: 4rem;
          }
        }
      }
    }
    .newiss{
      padding: 0 1.5rem;
      color: #bfbfbf;
    }
  }
}
</style>
