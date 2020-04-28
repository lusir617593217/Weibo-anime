<template>
  <div class="page-end">
    <!-- header -->
    <MyHeader title="完结"></MyHeader>

    <!-- main -->
    <main>
      <ul v-if="endList.length!==0">
        <li class="cartoon-item"
          v-for="item in endList"
          :key="item.info_id"
          @click="goDetail(item.object_id)"
        >
          <div class="pic">
            <img v-lazy="item.image_ext_url" alt="">
          </div>
          <p>
            <span :class="item.cate_list[0].cate_en_name">{{ item.cate_list[0].cate_cn_name }}</span>
            {{ item.extra.name }}
          </p>
        </li>
      </ul>

      <!-- 遮罩层 -->
      <MyMask :isShow="endList.length===0"></MyMask>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '../../components/MyHeader'
// 引入 遮罩层 组件
import MyMask from '../../components/MyMask'

import { getEndList } from '../../api/cartoon'
export default {
  name: 'End',
  components: {
    MyHeader,
    MyMask
  },
  data () {
    return {
      endList: []
    }
  },
  methods: {
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
.page-end {
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    position: relative;
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
