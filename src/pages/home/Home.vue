<template>
  <div class="home">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="scroll">
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
      <section class="search">
        <div class="search-link" @click="this.$router.push('/search')">
          <span class="icon iconfont icon-sousuo"></span>
          <span class="text">请输入商家或者商品名字</span>
        </div>
      </section>
      <section class="banner">
        <div class="img-box">
          <img src="../../images/index-banner.jpg" alt>
        </div>
      </section>
      <home-nav></home-nav>
      <van-row class="activity">
        <van-col span="12" class="act-item first-item">
          <div class="act-img">单</div>
          <div class="act-main">
            <p class="act-tit">今日最6</p>
            <p class="act-info">单量满满</p>
          </div>
        </van-col>
        <van-col span="12" class="act-item sec-item">
          <div class="act-img">推</div>
          <div class="act-main">
            <p class="act-tit">商家推荐</p>
            <p class="act-info">不可错过的精品</p>
          </div>
        </van-col>
      </van-row>
      <section class="recommend">
        <h2>每日推荐</h2>
        <ul class="recommend-list">
          <li class="recommend-item"></li>
        </ul>
      </section>
      <section class="shops">
        <h2>附近商家</h2>
        <van-list v-model="loading" :finished="finished" finished-text="暂无更多" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item"/>
        </van-list>
      </section>
    </van-pull-refresh>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import HomeNav from './children/HomeNav.vue'
import FooterGuide from 'src/components/footer/FooterGuide.vue'
export default {
  name: 'Home',
  components: {
    HomeNav,
    FooterGuide
  },
  data () {
    return {
      count: 0,
      isLoading: false,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "styles/varibles.scss";
.home {
  width: 100%;
  height: 100%;
  .scroll {
    padding-bottom: 0.98rem;
  }
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
  .search {
    height: 0.68rem;
    padding: 0 0.3rem 0.15rem;
    line-height: 0.68rem;
    background-color: $bgColor;
    .search-link {
      height: 100%;
      padding: 0 0.24rem;
      background-color: #fff;
      .icon {
        font-size: 0.3rem;
        color: #666666;
      }
      .text {
        font-size: 0.24rem;
        color: #666666;
        font-weight: 100;
      }
    }
  }
  .banner {
    padding: 0.2rem 0.3rem;
    .img-box {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 36.67%;
      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .activity {
    padding: 0.24rem 0;
    .act-item {
      box-sizing: border-box;
      display: flex;
      padding: 0 0.3rem;
      .act-img {
        width: 0.9rem;
        height: 0.9rem;
        line-height: 0.9rem;
        border-radius: 0.45rem;
        text-align: center;
        font-size: 0.48rem;
        font-weight: bold;
        color: #ffffff;
      }
      .act-main {
        margin-left: 0.14rem;
        text-align: right;
        .act-tit {
          font-size: 0.36rem;
          line-height: 0.54rem;
          font-weight: bold;
        }
        .act-info {
          font-size: 0.24rem;
          line-height: 0.36rem;
          color: #666;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    .first-item {
      .act-img {
        background-color: #ef456a;
      }
      .act-main {
        .act-tit {
          color: #ef456a;
        }
      }
    }
    .sec-item {
      .act-img {
        background-color: #ffbc0a;
      }
      .act-main {
        .act-tit {
          color: #ffbc0a;
        }
      }
    }
  }
  .recommend {
    padding: 0 0.3rem;
  }
}
</style>
