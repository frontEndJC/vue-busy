<template>
<section class="sms-login">
  <h3 class="login-tit">短信登录</h3>
  <div class="input-wrapper">
    <label>
      <span>+86</span>
      <input class="tel-input" type="text" placeholder="输入手机号" v-model="telNum" />
    </label>
  </div>
  <div class="submit-wrapper">
    <button @click="sendMessage" class="submit-button" :disabled="telIsTrue">下一步</button>
  </div>
</section>
</template>

<script>
export default {
  name: 'SmsLogin',
  data () {
    return {
      telNum: '',
      telIsTrue: true
    }
  },
  methods: {
    sendMessage () {
      this.$toast('短信已发送，请注意查收')
      this.$router.push({
        name: 'VerCode',
        params: {
          tel: this.telNum,
          fromUrl: this.$route.query.url
        }
      })
    }
  },
  watch: {
    telNum: function (val, oldVal) {
      if (!(/^[0-9]+$/).test(val) && val !== '') {
        this.telNum = oldVal
      }
      if ((/^1[3456789]\d{9}$/.test(val))) {
        this.telIsTrue = false
      } else {
        this.telIsTrue = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'css/varibles.scss';
.sms-login {
  box-sizing: border-box;
  height: 100%;
  padding: 1rem 0.36rem 0;
  background: #fff;
  .login-tit {
    font-size: 0.36rem;
  }
  .input-wrapper {
    margin-top: 0.5rem;
    border-bottom: 1px solid #E6E6E6;
    font-size: 0.34rem;
    span {
      line-height: 0.78rem;
      vertical-align: middle;
    }
    .tel-input {
      margin-left: 0.3rem;
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
