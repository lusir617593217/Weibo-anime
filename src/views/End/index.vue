<template>
  <div class="page-end">
    <div class="my-header">
      <img @click="goBack" src="../../assets/images/back.png" alt="">
      <p>完结</p>
    </div>

    <!-- main -->
    <main>
      <div class="cartoon-item" v-for="item in endList" :key="item.info_id" @click="goDetail(item.object_id)">
        <div class="pic">
          <img :src="item.image_ext_url" alt="">
        </div>
        <p><span :class="item.cate_list[0].cate_en_name">{{ item.cate_list[0].cate_cn_name }}</span>{{ item.extra.name }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import { getEndList } from '../../api/cartoon'
export default {
  name: 'End',
  data () {
    return {
      endList: []
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    goDetail (id) {
      this.$router.push({
        path: `/detail/${id}`
      })
    },
    getEndList () {
      getEndList().then(res => {
        this.endList = res.data.ending_works_list
      })
    }
  },
  created () {
    this.getEndList()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';

.page-end {
  height: 100%;
  display: flex;
  flex-direction: column;
  .my-header {
    @include border-bottom;
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
  main {
    flex: 1;
    overflow: auto;
  }
  .cartoon-item {
    width: 375px;
    height: 240px;
    margin-bottom: 8px;
    .pic {
      width: 100%;
      height: 211px;
      border-radius: 8px;
      overflow: hidden;
      background-color: pink;
      img {
        width: 100%;
      }
    }
    p {
      width: 100%;
      height: 29px;
      line-height: 29px;
      padding: 0 8px;
      font-size: 16px;
      color: #666;
      span {
        font-size: 10px;
        display: inline-block;
        width: 32px;
        height: 16px;
        border-radius: 3px;
        text-align: center;
        line-height: 16px;
        color: #efefef;
        margin-right: 4px;
        vertical-align: middle;
        margin-bottom: 2px;
      }
      .lianai {
        background-color: #fc7933;
      }
      .xiaoyuan {
        background-color: #34b6a3;
      }
      .qihuan {
        background-color: #4a90e2;
      }
      .xuanyi {
        background-color: #535353;
      }
      .dongzuo {
        background-color: #f75d79;
      }
      .gufeng {
        background-color: #f2c900;
      }
    }
  }
}
</style>
