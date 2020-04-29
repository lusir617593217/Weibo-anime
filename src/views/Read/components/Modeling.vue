<template>
  <div class="modeling" v-if="isShow">
    <div class="mask"></div>
    <div class="box">
      <div class="top">
        <img class="preson" src="../../../assets/images/preson.png" alt="">
        <span @click="close">x</span>
      </div>
      <div class="content">
        <p class="canyu">参与评论，离线阅读，内容更全，福利多多</p>
        <p class="anzhuang">安装微博动漫APP，立即享有</p>
        <p class="xiazai">下载APP会员本章7折哦！</p>
        <button>立即安装</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modeling',
  props: ['isShow'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modeling {
  width: 100%;
  height: 100%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  .mask {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  .box {
    width: 295px;
    border-radius: 20px;
    // overflow: hidden;
    position: absolute;
    top: 200px;
    left: 40px;
    z-index: 999999;
    .top {
      width: 100%;
      height: 88px;
      position: relative;
      background: url('~@/assets/images/top-bg.png') no-repeat 100%;
      .preson {
        width: 295px;
        height: 142px;
        position: absolute;
        // left: 50px;
        z-index: 99;
        bottom: 0;
      }
      span {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        display: block;
        color: #fff;
        font-weight: 700;
        font-size: 30px;
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 9999;
      }
    }
    .content {
      width: 100%;
      height: 181px;
      background-color: #fff;
      .canyu {
        width: 295px;
        height: 44px;
        padding-top: 16px;
        color: #666;
        font-size: 14px;
        text-align: center;
      }
      .anzhuang {
        width: 295px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        padding-top: 4px;
        font-size: 14px;
        color: #666;
      }
      .xiazai {
        width: 295px;
        font-size: 10px;
        text-align: center;
        color: #ff4e6c;
        margin-top: 10px;
      }
      button {
        width: 263px;
        height: 44px;
        border-radius: 4px;
        font-size: 14px;
        margin: 16px;
        color: #fff;
        border: 0;
        outline: none;
        background: linear-gradient(#fa6b90,#f33962);
      }
    }
  }
}
</style>
