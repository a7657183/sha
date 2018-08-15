<template>
    <Modal v-model="show" class-name="vtm-popup" width="100%" :transition-names="['move-right']">
    <slot></slot>

    <div class="vtm-popup-footer" slot="footer">
      <slot name="footer"></slot>
    </div>
  </Modal>
</template>

<script>
export default {
  props: {
    value: false
  },
  data() {
    return {
      show: this.value
    };
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="less">
@import '~@/assets/styles/variables';

@modalCls: ivu-modal;
.@{prefix}-popup {
  overflow-x: hidden;

  .@{modalCls} {
    width: 100% !important;
    margin: 0px;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0;
    // padding: 20px;
    background: #ffffff;
    box-shadow: @shadow-1-left;
    transform: translateZ(0);
    will-change: transform;
    &-content {
      box-shadow: none;
      height: 100%;
      overflow: hidden;
      border-radius: 0px !important;
    }

    &-body {
      padding: 0;
      height: 100%;
    }

    &-close {
      display: inline-block;
      // font-size: 20px;
      width: 60px;
      top: 0;
      right: 0;
      text-align: center;
      z-index: 2;

      .ivu-icon {
        font-size: 38px;
        font-weight: 600;
        color: @text-lightest;
        line-height: 3.5rem;
        color: #ffffff;
      }
    }

    &-footer {
      border: none;;
    }
  }

  &-wrap {
    overflow: hidden;
  }

  &-overlay {
    opacity: 0;
  }

  &.move-right-enter {
    animation-duration: 0.5s;
    animation-timing-function: @ease-in;
  }

  &.move-right-leave,
  &.move-right-leave-to {
    animation-duration: 0.5s;
    animation-timing-function: @ease-in-out;
  }
}
</style>
