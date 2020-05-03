<template>
  <div class="page-my">
    <!-- top -->
    <div class="my-top">
      <div class="nav">
        <img @click="$router.back()" src="../../assets/images/back-white.png" alt="">
      </div>
      <div class="banner" @click="$router.push('/user/login')">
        <div class="avatar">
          <img src="../../assets/images/avatar.png" alt="">
        </div>
        <p class="nickname">戳我立即登录哦QAQ</p>
        <p class="vcion">我的墨币: 0</p>
      </div>
      <div class="pic">
        <img src="../../assets/images/bg-mask.png" alt="">
      </div>
    </div>

    <!-- mine -->
    <section class="mine-list">
      <div class="mine-item">
        <img src="../../assets/images/mobi.png" alt="">
        <p>墨币充值</p>
        <span></span>
      </div>

      <div class="mine-item">
        <img src="../../assets/images/guanzhu.png" alt="">
        <p>我的关注</p>
        <span></span>
      </div>

      <div class="mine-item">
        <img src="../../assets/images/liulan.png" alt="">
        <p>浏览历史</p>
        <span></span>
      </div>

      <div class="mine-item">
        <img src="../../assets/images/yijian.png" alt="">
        <p>意见反馈</p>
        <span></span>
      </div>

      <div class="mine-item">
        <img src="../../assets/images/buy.png" alt="">
        <p>已购作品</p>
        <span></span>
      </div>

      <div class="mine-item">
        <img src="../../assets/images/buy.png" alt="">
        <p>自动购买管理</p>
        <span></span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'My'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';

.page-my {
  height: 100%;
  .my-top {
    position: relative;
    width: 100%;
    height: 224px;
    background: url('../../assets/images/my-bg.png');
    background-size: 100% 100%;
    .nav {
      width: 100%;
      height: 44px;
      img {
        width: 44px;
        height: 44px;
      }
    }
    .banner {
      width: 295px;
      height: 155px;
      text-align: center;
      position: absolute;
      left: 40px;
      bottom: 0;
      .avatar {
        width: 88px;
        height: 88px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .nickname {
        width: 100%;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        color: #fff;
        text-align: center;
      }
      .vcion {
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
    }
    .pic {
      width: 375px;
      height: 20px;
      position: absolute;
      left: 0;
      bottom: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // mine
  .mine-list {
    width: 375px;
    margin-top: 8px;
    .mine-item {
      @include border-bottom;
      width: 375px;
      height: 54px;
      display: flex;
      align-items: center;
      padding-left: 16px;
      img {
        width: 32px;
        height: 32px;
        margin-right: 8px;
      }
      p {
        width: 275px;
        height: 53px;
        line-height: 53px;
        font-size: 14px;
        color: #666;
      }
      span {
        width: 44px;
        height: 44px;
        background: url('../../assets/images/jiantou.png');
        background-size: 100% 100%;
      }
    }
  }
}
</style>
