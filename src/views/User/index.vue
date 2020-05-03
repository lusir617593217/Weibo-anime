<template>
  <div class="page-user">
    <!-- top -->
    <div class="user-top">
      <img src="../../assets/images/back-white.png" alt="">
      <p>{{ action }}</p>
      <span @click="toggle">{{ message }}</span>
    </div>

    <!-- person -->
    <div class="person">
      <img src="../../assets/images/login_logo.png" alt="">
    </div>

    <!-- 组件框 -->
    <div class="box">
      <router-view></router-view>
    </div>

    <!-- 其他方式登录 -->
    <div class="other-login" v-if="action==='登录'">
      <p>其他登录方式</p>
      <div class="pic">
        <img src="../../assets/images/weibo.png" alt="">
        <img src="../../assets/images/qq.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      action: '登录',
      message: '立即注册'
    }
  },
  methods: {
    toggle () {
      if (this.message === '立即注册') {
        this.$router.push('/user/register')
        this.message = '我要登录'
        this.action = '注册'
      } else {
        this.$router.push('/user/login')
        this.message = '立即注册'
        this.action = '登录'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-user {
  height: 100%;
  background: url('../../assets/images/user-bg.png');
  background-size: contain;
  // top
  .user-top {
    width: 375px;
    height: 44px;
    display: flex;
    align-items: center;
    img {
      width: 44px;
      height: 44px;
    }
    p {
      width: 250px;
      height: 44px;
      line-height: 44px;
      margin: 0 auto;
      font-size: 18px;
      text-indent: 35px;
      text-align: center;
      color: #fff;
    }
    span {
      display: block;
      width: 76px;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      color: #fff;
    }
  }
  // person
  .person {
    width: 182px;
    height: 190px;
    margin: 10px auto 0;
    img {
      width: 100%;
    }
  }
  // 组件框
  .box {
    width: 313px;
    background-color: #fff;
    padding: 20px 32px 24px;
    margin: 0 auto;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.2);
    border-radius: 6px;
  }
  // other-login
  .other-login {
    p {
      width: 375px;
      height: 24px;
      line-height: 24px;
      margin-top: 16px;
      font-size: 14px;
      color: #999;
      text-align: center;
    }
    .pic {
      width: 132px;
      height: 48px;
      margin: 14px auto 0;
      display: flex;
      justify-content: space-between;
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
}
</style>
