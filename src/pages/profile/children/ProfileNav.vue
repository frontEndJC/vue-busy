<template>
<nav class="profile-nav">
  <div class="nav-item" @click="goto('/info')">
    <div class="icon-box">
      <img src="../../../images/profile-icon01.png" alt="">
    </div>
    <span class="item-info">我的任务</span>
  </div>
  <div class="nav-item">
    <div class="icon-box">
      <img src="../../../images/profile-icon02.png" alt="">
    </div>
    <span class="item-info">商家入驻</span>
  </div>
  <div class="nav-item">
    <div class="icon-box">
      <img src="../../../images/profile-icon03.png" alt="">
    </div>
    <span class="item-info">账单记录</span>
  </div>
  <div class="nav-item" @click="goto('/wallet')">
    <div class="icon-box">
      <img src="../../../images/profile-icon04.png" alt="">
    </div>
    <span class="item-info">我的钱包</span>
  </div>
  <div class="nav-item">
    <div class="icon-box">
      <img src="../../../images/profile-icon05.png" alt="">
    </div>
    <span class="item-info">关注商家</span>
  </div>
  <div class="nav-item">
    <div class="icon-box">
      <img src="../../../images/profile-icon06.png" alt="">
    </div>
    <span class="item-info">我的地址</span>
  </div>
  <div class="nav-item">
    <div class="icon-box">
      <img src="../../../images/profile-icon07.png" alt="">
    </div>
    <span class="item-info">购物车</span>
  </div>
  <div class="nav-item">
    <div class="icon-box">
      <img src="../../../images/profile-icon08.png" alt="">
    </div>
    <span class="item-info">推荐好友</span>
  </div>
  <div class="nav-item">
    <div class="icon-box">
      <img src="../../../images/profile-icon09.png" alt="">
    </div>
    <span class="item-info">退出登录</span>
  </div>
</nav>
</template>

<script>
export default {
  name: 'ProfileNav',
  methods: {
    goto (to) {
      this.$router.push(to)
    }
  }
}
</script>

<style lang='scss' scoped>
.profile-nav {
  padding: 0.55rem 0.26rem 0;
  overflow: hidden;
  .nav-item {
    position: relative;
    float: left;
    width: 33.3%;
    height: 0;
    margin-bottom: 1rem;
    padding-bottom: 15.3%;
    .icon-box {
      position: absolute;
      top: 0;
      bottom: 0.6rem;
      left: 0;
      right: 0;
      img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .item-info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
    }
  }
}
</style>
