<template>
  <div class="jump-list"  @click="indexRouterFun"><span>{{listname}}</span><span><shaIcon type="qianjin"></shaIcon></span></div>
</template>

<script>
import shaIcon from '@/components/sha-icon';
export default {
  props: {
    listname: String,
    rul: String
  },
  components: {
    shaIcon
  },
  methods: {
    indexRouterFun() {
      console.log(5);
    }
  }
};
</script>

<style lang="less">
@import "~@/assets/styles/variables";
.jump-list {
  padding: 0 1.42rem 0 1.42rem;
  box-sizing: border-box;
  width: 100%;
  height: 3.95rem;
  line-height: 3.95rem;
  border-bottom: 1px solid @border-color-simple;
  display: flex;
  justify-content: space-between;
}
</style>
