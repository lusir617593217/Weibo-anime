<template>
  <div class="no-data" v-if="isShow">
    <img class="no-data-pic" src="@/assets/images/home-no-data.png" alt="">
    <p>页面加载中...</p>
  </div>
</template>

<script>
export default {
  name: 'MyMask',
  props: {
    isShow: {
      // type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
// 遮挡层
.no-data {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .no-data-pic {
    width: 184px;
    height: 184px;
  }
  p {
    font-size: 14px;
    color: #999;
    padding-bottom: 40px;
  }
}
</style>
