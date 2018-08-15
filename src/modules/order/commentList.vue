<template>
  <div class="shareItemCen commentBox">
    <!-- <myHeader :leftBool="true" text="我的评论" routerName="register"></myHeader> -->
    <ul class="commentBox-list" v-if="dataList.length > 0">
      <li class="commentBox-list-item" v-for="(item, index) in dataList" :key="index">
        <div class="itemkj">
          <span  @click="routerFun(item.goods_msg.id, item.goods_msg.type)">商品详情
            <shaIcon type="qianjin qianjinClass" size="2"></shaIcon></span>
          <shaIcon type="shanchu shanchuClass" size="1.3" @click.native="deleFun(item.id)"></shaIcon>
        </div>
        <div class="itemImg">
          <img class="listimg" :src="`${serverPath}${item.order_msg.image_url}`">
          <div class="commentRight">
            <p>{{item.goods_msg.name}}</p>
            <p><gradeView :gradeNumber="4"></gradeView></p>
          </div>
        </div>
        <div class="itemBon">
          {{item.content}}
        </div>
      </li>
    </ul>
    <div class="noDataClass" v-else>没有数据</div>
    <modalWarning v-model="warningBoot" tetle="您确定要删除" :determineFun="delFunClick" />
  </div>
</template>
<script>
import myHeader from '@/components/header';
import shaIcon from '@/components/sha-icon';
import modalWarning from '@/components/sha-modal/modal-waiming';
import gradeView from '@/components/grade-view';
import { getCommentList, delComment } from '@/api/modules/order';
export default {
  components: {
    myHeader,
    shaIcon,
    modalWarning,
    gradeView
  },
  data() {
    return {
      dataList: [],
      warningBoot: false,
      comId: ''
    };
  },
  created() {
    this.getCommentListFun();
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    },
    delFunClick() {
      delComment({id: this.comId}).then(() => {
        this.warningBoot = false;
        this.getCommentListFun();
      });
    },
    deleFun(id) {
      this.comId = id;
      this.warningBoot = true;
    },
    // orderFun(id) {
    //   this.$router.push({
    //     name: 'order-details',
    //     query: {
    //       id
    //     }
    //   });
    // },
    getCommentListFun() {
      getCommentList().then(res => {
        this.dataList = res.data.list;
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
.commentBox{
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
        .commentRight{
          flex: 1;
          width: 90%;
        }
        img{
          width: 3.2rem;
          height: 3.2rem;
          min-width: 3.2rem;
        }
        p{
          margin-left: 1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 90%;
        }
      }
      .itemBon{
        text-align: left;
        padding: 1rem;
        line-height: 1.5rem;
      }
    }
  }
}
</style>
