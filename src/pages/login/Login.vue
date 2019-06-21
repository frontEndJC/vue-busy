<template>
<section class="login">
  <Header title="用户登录" :isGoBack="true">
    <router-link
      to="/register"
      tag="div"
      slot="right"
      class="register-router"
    >注册</router-link>
  </Header>
  <router-view />
</section>
</template>

<script>
import Header from 'src/components/header/Header'
export default {
  name: 'Login',
  components: {
    Header
  }
}
</script>

<style lang='scss' scoped>
.register-router {
  position: absolute;
  right: 0.3rem;
  top: 0;
  height: 0.88rem;
  line-height: 0.88rem;
}
</style>
