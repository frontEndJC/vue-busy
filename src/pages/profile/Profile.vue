<template>
<section class="profile">
  <Header title="我的" :isThemeBg="true"></Header>
  <section class="info-wrapper">

  </section>
  <footer-guide></footer-guide>
</section>
</template>

<script>
import FooterGuide from 'src/components/footer/FooterGuide.vue'
import Header from 'src/components/header/Header.vue'
export default {
  name: 'Profile',
  components: {
    Header,
    FooterGuide
  }
}
</script>

<style lang='scss' scoped>

</style>
