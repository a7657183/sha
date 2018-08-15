<template>
    <a
      href="javascript: void(0)"
      class="givealike"
      :class="this.forboot ? 'on_action' : ''"
      @click.stop="collClick">
      <sha-icon :type="this.forboot? 'shou' : 'zan'" size="1"></sha-icon>
      <span>{{ this.currentNumber }}</span>
    </a>
</template>
<script>
// import Axios from '@/api'
// import { getGiveAlike } from '@/api/modules/team'
import shaIcon from '@/components/sha-icon';
export default {
  components: {
    shaIcon
  },
  props: {
    value: [Number, String],
    boot: Boolean,
    teamId: String
  },
  data() {
    return {
      currentNumber: this.value,
      forboot: false
    };
  },
  created() {
    this.forboot = this.boot;
  },
  watch: {
    boot(val) {
      this.forboot = val;
    },
    value(val) {
      this.currentNumber = Number(val);
    },
    currentNumber(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    collClick() {
      console.log(5);
      // getGiveAlike(this.forboot, {
      //   params: {
      //     refId: this.teamId,
      //     type: this.tutype
      //   }
      // }).then(res => {
      //   if (this.forboot) {
      //     this.currentNumber --
      //   } else {
      //     this.currentNumber ++
      //   }
      //   this.forboot = !this.forboot
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
};
</script>
<style lang="less">
@import "~@/assets/styles/variables";
.givealike {
  color: @text-light;

  .@{prefix}-icon {
    margin-bottom: -2px;
  }
}
.on_action {
  color: @primary-color;
}
</style>
