<template>
  <div class="my-header">
    <img @click="goBack" src="@/assets/images/back.png" alt="">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    title: {
      type: String,
      default: '微博动漫'
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/style/mixin.scss';

.my-header {
  // @include border-bottom;
  height: 44px;
  width: 100%;
  img {
    width: 44px;
    height: 44px;
    float: left;
  }
  p {
    width: 287px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #333;
    font-size: 18px;
    float: left;
  }
}
</style>
