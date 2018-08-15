<template>
  <div class="textFormBox">
    <Input type="textarea" v-model="textVal" :rows="7"/>
    <div class="selDiv" v-if="typeFun === '4'">
      <Select v-model="selmodelVal" style="width:100%">
          <Option value="1">投诉平台</Option>
          <Option value="2">投诉商家</Option>
      </Select>
      <Select v-model="orderId" v-if="selmodelVal === '2'" style="width:100%; margin-top: 1rem">
          <Option :value="item.order_id" v-for="(item, index) in dataList" :key="index">{{item.name}}</Option>
      </Select>
    </div>
    <Input v-model="telVal" placeholder="请输入你的手机"  v-if="typeFun === '3'" style="margin-top: 1rem"/>
    <Button type="primary" class="butClass" @click="addUserMsgFun">提交</Button>
  </div>
</template>
<script>
import { addUserMsg } from '@/api/modules/personalcenter';
import { postorderList } from '@/api/modules/order';
import shaIcon from '@/components/sha-icon';
export default {
  components: {
    shaIcon
  },
  data() {
    return {
      textVal: '',
      selmodelVal: '1',
      orderId: '0',
      dataList: [],
      telVal: ''
    };
  },
  created() {
    window.topLeftFun = this.topLeftFun;
    if (this.$route.query.type === '4') {
      this.postorderListFun();
    }
  },
  computed: {
    phoneFun() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      return !reg.test(this.telVal);
    },
    typeFun() {
      return this.$route.query.type;
    }
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
    postorderListFun() {
      postorderList().then(res => {
        this.dataList = res.data.cart_list;
      });
    },
    addUserMsgFun() {
      this.$Message.destroy();
      if (!this.textVal) {
        this.$Message.error('请填写完整！');
        return;
      }
      if (this.orderId === '0' && this.selmodelVal === '2') {
        this.$Message.error('请选择你要投诉的订单');
        return;
      }
      if (this.typeFun === '3') {
        if (!this.telVal) {
          this.$Message.error('请填写手机号码！');
          return;
        }
        if (this.phoneFun) {
          this.$Message.error('请输入正确的手机号码');
          return;
        }
      }
      const data = {
        content: this.textVal,
        type: this.typeFun,
        order_id: this.orderId,
        tel: this.telVal
      };
      addUserMsg(data).then(res => {
        this.$Message.success('提交成功');
        this.$router.push({
          name: 'personal-center'
        });
      });
    }
  }
};
</script>
<style lang="less">
  .textFormBox{
    padding: 1rem;
    .selDiv{
      margin-top:1rem;
      .ivu-select-item{
        width: 100%;
      }
    }
    .telClass{
      text-align: right;
      width: 100%;
      display: block;
      line-height: 4rem;
    }
    .butClass{
      width: 100%;
      margin-top: 3rem;
    }
  }
</style>
