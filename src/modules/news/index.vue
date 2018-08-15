<template>
  <div class="shareItem newsBox">
    <!-- <my-header
    :leftBool="false"
    :zhonBool="false"
    text="消息"/> -->
    <ul class="newsBox-item" v-if="dataObje.length > 0">
      <li class="newsBox-item-li" v-for="(item, index) in dataObje" :key="index" @click="routerFun(item.id)">
        <span v-if="item.is_see === '1'" class="tagClass"></span>
        <div class="imgBox"><img :src="`${serverPath}${item.user_msg.img}`"></div>
        <div class="textBox">
          <p>{{item.title}}</p>
          <p>{{item.content}}</p>
        </div>
        <div class="rightBox">{{momentFun(item.addtime)}}
          <sha-icon type="qianjin" size='2.5'></sha-icon>
        </div>
      </li>
    </ul>
    <div class="noDataClass" v-else>没有数据</div>
    <my-footer :routNumber="4"></my-footer>
  </div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
import myFooter from '@/components/footer';
import myHeader from '@/components/header';
import { message } from '@/api/modules/message';
// import moment from 'moment';
export default {
  components: {
    myHeader,
    myFooter,
    shaIcon
  },
  data() {
    return {
      dataObje: {}
    };
  },
  methods: {
    momentFun(val) {
      return new Date(parseInt(val) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    },
    routerFun(id) {
      this.$router.push({
        name: 'news-details',
        query: {
          type: this.$route.query.type,
          id
        }
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    message().then(res => {
      next(vm => {
        vm.dataObje = res.data.message_list;
      });
    });
  }
};
</script>

<style lang="less">
@import "~@/assets/styles/variables";
.newsBox {
  &-item {
    overflow: hidden;
    &-li {
      display: flex;
      margin-bottom: 1px;
      background: #ffffff;
      height: 5rem;
      padding: 1rem;
      position: relative;
      .tagClass {
        position: absolute;
        top: 0.8rem;
        left: 0.8rem;
        width: 10px;
        height: 10px;
        background: @warning-color;
        border-radius: 50%;
      }
      .imgBox {
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        min-width: 3rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .textBox {
        padding-left: 1rem;
        flex: 1;
        max-width: 45%;
        :first-child {
          color: @text-color;
          font-size: 1.2rem;
        }
        p {
          color: @text-light;
          font-size: 1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .rightBox {
        position: relative;
        min-width: 9.5rem;
        line-height: 3.2rem;
        .iconfont {
          position: absolute;
        }
      }
    }
  }
}
</style>
