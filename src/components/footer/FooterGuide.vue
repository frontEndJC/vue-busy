<template>
<div class="footer-guide border-top">
  <section @click = "gotoAddress('/home')" class="guide-item" :class="$route.path.indexOf('home') !== -1? 'active' : ''">
    <i class="iconfont icon-yemian-copy"></i>
    <span>首页</span>
  </section>
  <section @click = "gotoAddress('/hall')" class="guide-item" :class="$route.path.indexOf('hall') !== -1? 'active' : ''">
    <i class="iconfont icon-lingdang"></i>
    <span>抢单大厅</span>
  </section>
  <section @click = "gotoAddress('/order')" class="guide-item" :class="$route.path.indexOf('order') !== -1? 'active' : ''">
    <i class="iconfont icon-dingdan"></i>
    <span>订单</span>
  </section>
  <section @click = "gotoAddress('/profile')" class="guide-item" :class="$route.path.indexOf('profile') !== -1? 'active' : ''">
    <i class="iconfont icon-wodedangxuan"></i>
    <span>我的</span>
  </section>
</div>
</template>

<script>
export default {
  name: 'FooterGuide',
  data () {
    return {

    }
  },
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'css/varibles.scss';
.footer-guide {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: #fff;
  .guide-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 0.98rem;
    text-align: center;
    color: #939393;
    &.active {
      color: $bgColor;
    }
    i {
      display: block;
      font-size: 0.4rem;
    }
    span {
      margin-top: 0.12rem;
      display: block;
      font-size: 0.22rem;
    }
  }
}
</style>
