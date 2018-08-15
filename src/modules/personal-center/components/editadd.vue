<template>
    <div class="editaddall">
      <myHeader :leftBool="true" text="修改收货地址" rightText="保存"></myHeader>
      <div class="editadd-top">
        <div class="eT-left"><img src="~@/assets/img/user-logo.png"></div>
        <div class="eT-right">
          <ul>
            <li>名字占位</li>
            <li>13800138000<sha-icon class="er-s2" type="qianjin"></sha-icon><span class="er-s1">+86</span></li>
            <li>广东省 深圳市 南山区 南山街道</li>
            <li>后海后海后海后海</li>
          </ul>
        </div>
      </div>
      <div class="editadd-cent">
        <ul>
          <li>地址类型<sha-icon class="er-s2" type="qianjin"></sha-icon><span class="er-s1">请选择</span></li>
          <li style="display: flex;align-items: center;justify-content: space-between;">设置为默认地址<i-Switch style="margin-right: 2rem;"></i-Switch></li>
        </ul>
      </div>
      <div class="delladd">删除收获地址</div>
    </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myHeader from '@/components/header';
export default {
  components: {
    shaIcon,
    myHeader
  },
  created() {
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
    indexRouterFun(name) {
      this.$router.push({
        name
      });
    },
    change(status) {
      this.$Message.info('开关状态：' + status);
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.editaddall {
  width: 100%;
  display: block;
  float: left;
  background: @border-color-simple;
  .delladd {
    display: block;
    float: left;
    margin-top: 0.8rem;
    width: 100%;
    height: 3.57rem;
    line-height: 3.57rem;
    background: @error-color;
    text-align: center;
    color: #fff;
  }
  .editadd-cent {
    display: block;
    float: left;
    margin-top: 1rem;
    width: 100%;
    height: 7.14rem;
    background: #fff;
    overflow: hidden;
    ul {
      width: 100%;
      overflow: hidden;
      li {
        width: 100%;
        height: 3.6rem;
        line-height: 3.6rem;
        border-bottom: 1px solid #eaeaea;
        padding-left: 1rem;
        .er-s1 {
          display: block;
          float: right;
          color: #9b9a9a;
        }
        .er-s2 {
          display: block;
          float: right;
          margin-right: 1rem;
          margin-left: 0.8rem;
        }
      }
    }
  }
  .editadd-top {
    margin-top: 3.5rem;
    width: 100%;
    height: 13.42rem;
    display: flex;
    background: #fff;
    .eT-left {
      height: 100%;
      width: 4.14rem;
      img {
        display: block;
        float: left;
        width: 2.85rem;
        height: 2.85rem;
        margin-top: 0.42rem;
        margin-left: 0.42rem;
        border-radius: 50%;
      }
    }
    .eT-right {
      display: flex;
      flex: 1;
      overflow: hidden;
      ul {
        width: 100%;
        overflow: hidden;
        li {
          width: 100%;
          height: 3.38rem;
          line-height: 3.38rem;
          border-bottom: 1px solid #eaeaea;
          padding-left: 0.5rem;
          .er-s1 {
            display: block;
            float: right;
            color: #9b9a9a;
          }
          .er-s2 {
            display: block;
            float: right;
            margin-right: 1rem;
            margin-left: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
