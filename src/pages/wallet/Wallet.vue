<template>
<section class="wallet">
  <Header title="我的钱包" :isGoBack="true" />
  <div class="wallet-top">
    <h3 class="wallet-tit">零钱</h3>
    <div class="price-wrapper">
      <span class="price-num">{{ price }}</span>
      <span class="price-unit">单位（元）</span>
    </div>
  </div>
  <ul class="option-list">
    <li class="recharge">
      <i class="iconfont icon-chongzhi"></i>
      <span class="option-info">充值</span>
    </li>
    <li class="withdraw">
      <i class="iconfont icon-tixian"></i>
      <span class="option-info">提现</span>
    </li>
  </ul>
</section>
</template>

<script>
import Header from 'src/components/header/Header'
export default {
  name: 'Wallet',
  components: {
    Header
  },
  computed: {
    price () {
      return this.$store.state.price.toFixed(2)
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'css/varibles.scss';
.wallet {
  .wallet-top {
    box-sizing: border-box;
    width: 100%;
    height: 2.88rem;
    padding: 0.76rem 0.3rem 0;
    background: $bgColor;
    color: #ffffff;
    .wallet-tit {
      font-size: 0.56rem;
      font-weight: normal;
    }
    .price-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: 0.2rem;
      .price-num {
        font-size: 1.1rem;
      }
      .price-unit {
        font-size: 0.24rem;
      }
    }
  }
  .option-list {
    li {
      box-sizing: border-box;
      height: 1rem;
      margin-bottom: 0.05rem;
      padding: 0 0.3rem;
      background: #fff;
      line-height: 1rem;
      .iconfont {
        position: relative;
        top: 0.04rem;
        font-size: 0.48rem;
        color: $bgColor;
      }
      .option-info {
        font-size: 0.36rem;
      }
    }
  }
}
</style>
