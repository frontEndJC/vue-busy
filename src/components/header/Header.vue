<template>
  <header class="header" :class="{themeBg: isThemeBg}">
    <slot name="left"></slot>
    <h2 class="header-title">{{ title }}</h2>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: '',
  props: {
    title: String,
    isThemeBg: Boolean
  }
}
</script>

<style lang='scss' scoped>
@import 'css/varibles.scss';
.header {
  position: relative;
  height: 0.88rem;
  line-height: 0.88rem;
  padding: 0 0.3rem;
  background: #ffffff;
  color: $bgColor;
  .header-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.36rem;
  }
}
.themeBg {
  background: $bgColor;
  color: #fff;
}
</style>
