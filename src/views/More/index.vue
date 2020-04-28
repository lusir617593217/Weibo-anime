<template>
  <div class="page-more">
    <!-- header -->
    <MyHeader :title="title"></MyHeader>

    <!-- main -->
    <main>
      <ul v-if="list.length>0">
        <li v-for="item in list" :key="item.info_id" @click="goDetail(item.object_id)">
          <div class="pic">
            <img v-lazy="item.image_url" alt="">
          </div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>作者：{{ item.extra.sina_nickname }}</p>
            <p class="small">{{ item.extra.watching_focus }}</p>
          </div>
        </li>
      </ul>
      <!-- 遮挡层 -->
      <MyMask :isShow="list.length===0"></MyMask>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '../../components/MyHeader'
// 引入遮挡层组件
import MyMask from '../../components/MyMask'

// 引入数据接口
import { getMoreList } from '../../api/cartoon'

export default {
  name: 'More',
  components: {
    MyHeader,
    MyMask
  },
  data () {
    return {
      title: this.$route.query.title,
      type: this.$route.query.type,
      list: []
    }
  },
  methods: {
    getMoreList (type) {
      getMoreList(type).then(res => {
        this.list = res.data[type]
      })
    },
    goDetail (id) {
      this.$router.push({
        path: `/detail/${id}`
      })
    }
  },
  created () {
    this.getMoreList(this.type)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';

.page-more {
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    @include border-top;
    flex: 1;
    overflow: auto;
    ul {
      li {
        width: 375px;
        height: 88px;
        display: flex;
        justify-content: space-between;
        padding: 8px 8px 8px 16px;
        .pic {
          width: 128px;
          height: 72px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        div {
          width: 215px;
          height: 72px;
          h3 {
            width: 100%;
            height: 28px;
            line-height: 28px;
            font-size: 14px;
            color: #333;
          }
          p {
            width: 100%;
            height: 16px;
            line-height: 16px;
            color: #999;
            font-size: 12px;
          }
          .small {
            font-size: 10px;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
