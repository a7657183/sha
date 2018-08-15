<template>
    <Modal
      v-model="show" class="warningBox" className="warning">
      <div class="warning-cen">
        <shaIcon type="cuowu cuowuClass"></shaIcon>
          <p class="tetleClass">{{tetle}}</p>
          <p class="textClass">{{text}}</p>
      </div>
      <div slot="footer" class="warning-foot">
        <iButton class="mybuttonfri" @click="cancelClick">取消</iButton>
        <iButton class="mybuttontwo"  long :loading="modal_loading" @click="determineClick">确定</iButton>
      </div>
    </Modal>
</template>

<script>
import shaIcon from '@/components/sha-icon';
export default {
  components: {
    shaIcon
  },
  props: {
    value: false,
    cancelFun: Function,
    determineFun: Function,
    tetle: String,
    text: String,
    saveId: String,
    saveIndex: Number
  },
  data() {
    return {
      show: false,
      personnelList: false,
      modal_loading: false
    };
  },
  methods: {
    cancelClick(val) {
      this.show = false;
      this.cancelFun && this.cancelFun(val);
    },
    determineClick(val) {
      this.modal_loading = true;
      this.determineFun && this.determineFun(this.saveId, this.saveIndex);
    }
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      if (!val) {
        this.modal_loading = false;
      }
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="less">
@import '~@/assets/styles/variables';
.warning{
  .cuowuClass{
    width: 3rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    border-radius: 50%;
    color: @error-color;
    border: 1px solid;
    padding: 0.5rem;
  }
  .ivu-modal-content{
    border-radius: 3px 3px 0px 0px;
  }

  .tetleClass{
    margin-top: 10px;
    display: block;
    color: @text-color;
    font-size: 16px;
    line-height: 30px;
  }

  .textClass{
    display: block;
    color: @text-lightest;
    font-size: 12px;
  }

  &-cen{
    text-align: center;
    margin-top: 30px;
  }
  .ivu-modal-footer{
    padding: 0px;
    border: none;
    padding-top: 20px;
  }
  .ivu-modal-footer button + button{
    margin: 0px;
  }
  &-foot{
    padding: 0px;

    button{
      margin: 0px;
      padding: 0px;
      float: left;
      width: 50%;
      border: none;
      font-size: 14px;
      line-height: 42px;
    }
    .mybutton:active{
      opacity: 0.8;
    }
    .mybuttonfri{
      border-radius: 0px 0px 0px 4px;
    }
    .ivu-btn:hover{
      background-color: #f0f4f5;
    }
    .mybuttontwo{
      border-left: 1px solid @border-color-gray;
      color: @primary-color;
      border-radius: 0px 0px 4px 0px;
    }
  }
}
</style>
