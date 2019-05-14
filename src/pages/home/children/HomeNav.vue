<template>
<div class="home-nav">
  <ul class="home-nav-list">
    <!-- <li v-for="item in navList" :key="item.id">
      <img :src="item.imgUrl" alt="">
      <span class="item-tit">{{ item.name }}</span>
    </li> -->
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon1.png" alt="">
      </div>
      <span class="item-tit">上楼外卖</span>
    </li>
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon2.png" alt="">
      </div>
      <span class="item-tit">聚会/租车</span>
    </li>
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon3.png" alt="">
      </div>
      <span class="item-tit">寄取快递</span>
    </li>
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon4.png" alt="">
      </div>
      <span class="item-tit">手递手洗</span>
    </li>
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon5.png" alt="">
      </div>
      <span class="item-tit">学生兼职</span>
    </li>
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon6.png" alt="">
      </div>
      <span class="item-tit">拼车信息</span>
    </li>
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon7.png" alt="">
      </div>
      <span class="item-tit">送水上门</span>
    </li>
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon8.png" alt="">
      </div>
      <span class="item-tit">跑腿办事</span>
    </li>
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon9.png" alt="">
      </div>
      <span class="item-tit">打印上门</span>
    </li>
    <li class="home-nav-item">
      <div class="img-box">
        <img src="../../../images/index-icon10.png" alt="">
      </div>
      <span class="item-tit">二手交易</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeNav',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
  .home-nav {
    .home-nav-list {
      overflow: hidden;
      width: 100%;
      .home-nav-item {
        float: left;
        overflow: hidden;
        position: relative;
        width: 20%;
        height: 0;
        padding-bottom: 21%;
        .img-box {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0.44rem;
          img {
            display: block;
            margin: 0 auto;
            height: 100%;
          }
        }
        .item-tit {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 0.44rem;
          line-height: 0.44rem;
          text-align: center;
          font-size: 0.24rem;
        }
      }
    }
  }
</style>
