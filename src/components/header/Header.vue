<template>
  <header class="header" :class="{themeBg: isThemeBg}">
    <i
      class="iconfont icon-arrow-left go-back"
      @click="$router.go(-1)"
      v-show="isGoBack"
    ></i>
    <h2 class="header-title">{{ title }}</h2>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: '',
  props: {
    title: String,
    isThemeBg: Boolean,
    isGoBack: Boolean
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
  border-bottom: 1px solid #ccc;
  .go-back {
    font-size: 0.4rem;
  }
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
  border-bottom: none;
  color: #fff;
}
</style>
