<template>
  <div class="swiper-container my-swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 引入 swiper
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  mounted () {
    this.swiper = new Swiper('.my-swiper', {
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination'
      },
      observer: true
    })
  }

}
</script>

<style lang="scss">
.my-swiper {
  width: 342px;
  height: 214px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  // background-color: pink;
  img {
    width: 100%;
    height: 222px;
  }
}
.swiper-pagination-bullet {
  background: #fff;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #f75d79;
}
</style>
