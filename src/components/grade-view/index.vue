<template>
  <div class="gradeBox">
    <ul class="gradeBox-ul">
      <li v-for="item in 5" :key="item">
        <sha-icon type="shoucang" :color="gradeNumberFun >= item ? '#ff694c' : '#b9b9b9'" size="1.2"></sha-icon>
      </li>
    </ul>
    <span class="gradeBox-span">{{gradeNumberFun}}分</span>
  </div>
</template>
<script>
import shaIcon from '@/components/sha-icon';

export default {
  props: {
    gradeNumber: Number
  },
  components: {
    shaIcon
  },
  computed: {
    gradeNumberFun() {
      return this.gradeNumber.toFixed(1);
    }
  },
  data() {
    return {
      list: []
    };
  }
};
</script>
<style lang="less">
.gradeBox {
  display: flex;
  height: 2rem;
  &-ul {
    width: 7rem;
  }
  &-span {
    line-height: 1.9rem;
  }
}
</style>
