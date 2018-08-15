<template>
  <div class="shareItemCen authentication">
    <myHeader
    :leftBool="true"
    text="银行卡实名认证"
    />
    <p style="line-height: 3rem; text-align: center;">提示：后续实名认证只允许持卡人认证</p>
    <div class="content">
      <div class="content-item">
        <label>银行卡号</label>
        <div class="content-item-right">
          <i-input placeholder="请输入..." ></i-input>
        </div>
      </div>

      <div class="content-item">
        <label>持卡人姓名</label>
        <div class="content-item-right">
          <i-input placeholder="请输入..." ></i-input>
        </div>
      </div>

      <div class="content-item">
        <label>持卡人身份证号</label>
        <div class="content-item-right">
          <i-input placeholder="请输入..." ></i-input>
        </div>
      </div>

      <div class="content-item">
        <label>银行预留手机号</label>
        <div class="content-item-right">
          <i-input placeholder="请输入..." ></i-input>
        </div>
      </div>

      <div class="content-item">
        <label>手机验证码</label>
        <div class="content-item-right" style="display: flex;">
          <i-input placeholder="请输入..." style="flex: 1"></i-input>
          <span class="authCode">立即获取</span>
        </div>
      </div>
    </div>
    <div>
    <p style="line-height: 3rem; text-align: center;">验证码为共享APP发送，与银行无关，请放心使用~</p>
    <div class="butBox">
      <i-button type="primary" style="width: 80%">立即授权</i-button>
    </div>

    </div>
  </div>
</template>
<script>
import myHeader from '@/components/header';
export default {
  components: {
    myHeader
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.authentication {
  .butBox {
    text-align: center;
  }
  .content {
    background: #ffffff;
    padding: 1rem;
    &-item {
      display: flex;
      padding: 1rem 0px;
      border-bottom: 1px solid @border-color-simple;
      label {
        width: 7rem;
        line-height: 32px;
        text-align: left;
      }
      &-right {
        margin-left: 1rem;
        flex: 1;
        .authCode {
          line-height: 32px;
          color: @primary-light-color;
        }
        .ivu-input {
          border: none !important;
        }
      }
    }
  }
}
</style>
