<template>
<section class="wallet">
  <Header title="我的钱包" :isGoBack="true" />
  <div class="wallet-top">

  </div>
</section>
</template>

<script>
import Header from 'src/components/header/Header'
export default {
  name: 'Wallet',
  components: {
    Header
  }
}
</script>

<style lang='scss' scoped>
@import 'css/varibles.scss';
.wallet {
  .wallet-top {
    width: 100%;
    height: 2.88rem;
    background: $bgColor;
  }
}
</style>
