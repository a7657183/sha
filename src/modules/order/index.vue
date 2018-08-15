<template>
  <div class="shareItemCen orderIndex">
    <!-- <myHeader :leftBool="true" text="我的订单" routerName="register"></myHeader> -->
    <ul class="orderIndex-list" v-if="dataList.length > 0">
      <li class="orderIndex-list-item" v-for="(item, index) in dataList" :key="index">
        <div class="itemkj">
          <span  @click="routerFun(item.good_id, item.type)">商品详情
            <shaIcon type="qianjin qianjinClass" size="2"></shaIcon></span>
          <shaIcon type="shanchu shanchuClass" size="1.3" @click.native="deleFun(item.order_id)"></shaIcon>
        </div>
        <div class="itemImg" @click="orderFun(item.order_id)">
          <img class="listimg" :src="`${serverPath}${item.image_url}`">
          <p>{{item.name}}</p>
        </div>
        <div class="itemBon">
          共一件商品，实支付：￥{{item.price}}
        </div>
      </li>
    </ul>
    <div v-else class="noDataClass">没有数据</div>
    <modalWarning v-model="warningBoot" tetle="您确定要删除" :determineFun="delFunClick" />
  </div>
</template>
<script>
import myHeader from '@/components/header';
import shaIcon from '@/components/sha-icon';
import modalWarning from '@/components/sha-modal/modal-waiming';
import { postorderList, postOrderDelete } from '@/api/modules/order';
export default {
  components: {
    myHeader,
    shaIcon,
    modalWarning
  },
  data() {
    return {
      dataList: [],
      warningBoot: false,
      orderId: ''
    };
  },
  created() {
    this.postorderListFun();
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
    delFunClick() {
      postOrderDelete({order_id: this.orderId}).then(() => {
        this.warningBoot = false;
        this.postorderListFun();
      });
      // getreopenProject(this.projectId, {
      //   params: {
      //     projectId: this.projectId
      //   }
      // }).then(res => {
      //   this.warningBoot = false;
      //   this.projectStatus = 1;
      // });
    },
    deleFun(id) {
      this.orderId = id;
      this.warningBoot = true;
    },
    orderFun(id) {
      this.$router.push({
        name: 'order-details',
        query: {
          id
        }
      });
    },
    postorderListFun() {
      postorderList().then(res => {
        this.dataList = res.data.cart_list;
      });
    },
    routerFun(id, type) {
      this.$router.push({
        name: 'house-details',
        query: {
          type,
          id
        }
      });
    }
  }
};
</script>
<style lang="less">
.orderIndex{
  &-list{
    &-item{
      background: white;
      overflow: hidden;
      width: 100%;
      margin-top: 1rem;
      .itemkj{
        padding: 0 1rem;
        .qianjinClass{
          position: relative;
          top: 0.4rem;
        }
        .shanchuClass{
          margin-top: 0.3rem;
          float: right;
        }
      }
      .itemImg{
        display: flex;
        background: #f8f8f8;
        padding: 0.5rem 1rem;
        img{
          width: 3rem;
          height: 3rem;
        }
        p{
          margin-left: 1rem;
        }
      }
      .itemBon{
        text-align: right;
        padding: 0 1rem;
        line-height: 3.5rem;
      }
    }
  }
}
</style>
