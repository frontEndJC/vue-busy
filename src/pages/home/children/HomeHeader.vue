<template>
  <header class="header">
    <div class="address">
      <i class="iconfont icon-dizhi address-icon"></i>
      <span>{{ $store.state.address }}</span>
      <i class="iconfont icon-arrow choose-address-icon"></i>
    </div>
    <div class="user-name">
      <div v-if="$store.state.userInfo!==null">{{$store.state.userInfo.name}}</div>
      <div v-else>
        <span>登录</span>/
        <span>注册</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='scss' scoped>
@import "css/varibles.scss";
.header {
  display: flex;
  justify-content: space-between;
  height: 0.88rem;
  line-height: 0.88rem;
  padding: 0 0.3rem;
  background-color: $bgColor;
  color: #fff;
  .address {
    font-size: 0.34rem;
    .address-icon {
      margin-right: 0.04rem;
      display: inline-block;
      width: 0.26rem;
      height: 0.32rem;
    }
    .choose-address-icon {
      display: inline-block;
      width: 0.26rem;
      height: 0.32rem;
    }
  }
  .user-name {
    font-size: 0.3rem;
  }
}
</style>
