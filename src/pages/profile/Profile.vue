<template>
<section class="profile">
  <Header title="我的" :isThemeBg="true"></Header>
  <section class="info-wrapper">
    <router-link to="/info" tag="div" class="info-box">
      <div class="tel-id">
        <h3>12345678910</h3>
        <p v-if="isRider">
          <i class="iconfont icon-duigou"></i>
          <span class="identity">身份已认证：骑手</span>
        </p>
        <p v-else>
          <span class="identity">学生</span>
        </p>
      </div>
      <div class="head-img">
        <img src="../../images/default-head.png" alt="">
      </div>
      <div class="look-more">
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </router-link>
  </section>
  <profile-nav></profile-nav>
  <footer-guide></footer-guide>
</section>
</template>

<script>
import FooterGuide from 'src/components/footer/FooterGuide.vue'
import Header from 'src/components/header/Header.vue'
import ProfileNav from './children/ProfileNav.vue'
export default {
  name: 'Profile',
  data () {
    return {
      isRider: true
    }
  },
  components: {
    Header,
    FooterGuide,
    ProfileNav
  }
}
</script>

<style lang='scss' scoped>
@import "css/varibles.scss";
.profile {
  .info-wrapper {
    position: relative;
    height: 3rem;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -20%;
      width: 140%;
      height: 3rem;
      z-index: -1;
      border-radius: 0 0 50% 50%;
      background: $bgColor;
    }
    .info-box {
      margin: 0 auto;
      box-sizing: border-box;
      width: 7.1rem;
      height: 2.2rem;
      padding: 0 0.2rem 0 0.6rem;;
      border-radius: 0.1rem;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tel-id {
        flex: 1;
        h3 {
          font-size: 0.56rem;
        }
        p {
          margin-top: 0.16rem;
          .iconfont {
            color: $bgColor;
          }
          .identity {
            font-size: 0.28rem;
            color: #666;
          }
        }
      }
      .head-img {
        width: 1.36rem;
        height: 1.36rem;
        margin-right: 0.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .look-more {
        .iconfont {
          font-size: 0.6rem;
          font-family: bold;
        }
      }
    }
  }
}
</style>
