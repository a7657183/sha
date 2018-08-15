<template>
  <i class="icon iconfont" :class="classes" :style="styles"></i>
</template>

<script>
export default {
  props: {
    type: String,
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    height: String
  },
  computed: {
    classes() {
      // const { size, color } = this;
      // const iconSize = size ? `-${size.substring(0, 1)}` : ''
      // const iconColor = color ? `-${color}` : ''

      return `icon-${this.type}`;
    },
    styles() {
      return {
        fontSize: `${this.size}rem`,
        color: `${this.color}`
      };
    }
  }
};
</script>
