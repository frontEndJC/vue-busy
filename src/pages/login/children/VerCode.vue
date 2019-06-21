<template>
<section class="ver-code">
  <h3 class="vercode-tit">请输入验证码</h3>
  <h4 class="send-time" v-if="showTime">{{ vercodeTime }}s后重新获取</h4>
  <h4 class="send-time" v-else @click="sendMessage">重新获取验证码</h4>
  <div class="input-wrapper">
    <label>
      <input class="vercode-input" type="text" placeholder="输入验证码" v-model="verCode" />
    </label>
  </div>
  <div class="submit-wrapper">
    <button @click="login" class="submit-button" :disabled="codeIsTrue">登录</button>
  </div>
</section>
</template>

<script>
export default {
  name: 'VerCode',
  data () {
    return {
      verCode: '',
      codeIsTrue: true,
      vercodeTime: 60,
      timer: null,
      showTime: true
    }
  },
  mounted () {
    this.timeRecode()
  },
  methods: {
    timeRecode () {
      this.timer = setInterval(() => {
        this.vercodeTime--
        if (this.vercodeTime <= 0) {
          clearInterval(this.timer)
          this.timer = null
          this.showTime = false
        }
      }, 1000)
    },
    login () {
      this.$post('/apis/login', {
        telNum: this.$route.params.tel
      }).then((data) => {
        const result = data.data
        if (result.code === 200) {
          this.$store.commit('log_in', {token: result.token, userInfo: result.userInfo})
        }
        this.$router.push(this.$route.params.fromUrl || '/home')
      }).catch((err) => {
        console.log(err)
      })
    },
    sendMessage () {
      this.$toast('短信已发送，请注意查收')
      this.timeRecode()
      this.showTime = true
    }
  },
  watch: {
    verCode: function (val, oldVal) {
      if (!(/^[0-9]+$/).test(val) && val !== '') {
        this.verCode = oldVal
      }
      if ((/^[0-9]{6}$/.test(val))) {
        this.codeIsTrue = false
      } else {
        this.codeIsTrue = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'css/varibles.scss';
.ver-code {
  box-sizing: border-box;
  height: 100%;
  padding: 1rem 0.36rem 0;
  background: #fff;
  .vercode-tit {
    font-size: 0.36rem;
  }
  .send-time {
    margin-top: 0.2rem;
    font-size: 0.28rem;
    color: #666;
  }
  .input-wrapper {
    margin-top: 0.5rem;
    border-bottom: 1px solid #E6E6E6;
    font-size: 0.34rem;
    .vercode-input {
      line-height: 0.78rem;
      caret-color: $bgColor;/*光标颜色*/
      &:placeholder {
        color: #666;
      }
    }
  }
  .submit-wrapper {
    width: 100%;
    margin-top: 0.5rem;
    .submit-button {
      width: 100%;
      height: 0.8rem;
      background: $bgColor;
      font-size: 0.34rem;
      color: #fff;
      &:disabled {
        background: #ccc;
      }
    }
  }
}
</style>
