<template>
  <div class="shareItemCen newsDetails">
    <!-- <myHeader
    :leftBool="true"
    text="消息详情"></myHeader> -->
    <div class="content">
        {{dataObje.content}}
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/header';
import { postmsgdetail } from '@/api/modules/message';
export default {
  components: {
    myHeader
  },
  data() {
    return {
      dataObje: {}
    };
  },
  created() {
    window.topLeftFun = this.topLeftFun;
  },
  methods: {
    topLeftFun() {
      this.$router.back(-1);
    }
  },
  beforeRouteEnter(to, from, next) {
    const id = to.query.id;
    postmsgdetail({id}).then(res => {
      next(vm => {
        vm.dataObje = res.data;
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.newsDetails {
  .content {
    background: #ffffff;
    padding: 1rem;
  }
}
</style>
