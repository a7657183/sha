<template>
  <div class="gradeItemBox">
    <ul class="gradeItemBox-ul">
      <li v-for="item in 5" :key="item" @click="gradeClick(item)">
        <sha-icon type="shoucang" :color="gradeNumber >= item ? '#ff694c' : '#b9b9b9'" size="1.4"></sha-icon>
      </li>
    </ul>
    <span class="gradeItemBox-span">{{gradeNumber}}分</span>
  </div>
</template>
<script>
import shaIcon from '@/components/sha-icon';

export default {
  props: {
    gradeNumber: Number,
    gradeFun: {
      default: () => undefined,
      type: Function
    }
  },
  components: {
    shaIcon
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    gradeClick(val) {
      this.gradeFun(val);
    }
  }
};
</script>
<style lang="less">
.gradeItemBox {
  display: flex;
  height: 3rem;
  &-ul {
    li{
      width: 2rem;
      margin: auto;
    }
  }
  &-span {
    line-height: 3rem;
  }
}
</style>
