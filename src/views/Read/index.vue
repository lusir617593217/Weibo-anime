<template>
  <div class="page-read" ref="com">
    <!-- header -->
    <div class="my-header">
      <img @click="$router.back()" src="@/assets/images/back.png" alt="">
      <p>
        <span v-if="list.chapter">{{ list.chapter.chapter_name }} {{ json_content.header.pageNum }}</span>
      </p>
      <img @click="$router.push('/home')" src="../../assets/images/home.png" alt="">
      <img src="../../assets/images/share-linght.png" alt="">
    </div>

    <!-- main -->
    <main>
      <section v-if="list.chapter_list">
        <ul v-if="num>1">
          <li v-for="item in json_content.page" :key="item.image_id">
            <img :src="item.newWebpImgUrl" alt="">
          </li>
        </ul>
        <ul v-else>
          <li>
            <img :src="json_content.page[0].mobileImgUrl" alt="">
          </li>
        </ul>
      </section>
      <MyMask :isShow="!list.chapter_list"></MyMask>
    </main>

    <!-- footer -->
    <div class="my-footer">
      <div @click="goPrve">
        <img src="../../assets/images/prve.png" alt="">
        <p>上一章</p>
      </div>
      <div @click="$router.push(`/catalog/${list.chapter.comic_id}`)">
        <img src="../../assets/images/catalog.png" alt="">
        <p>目录</p>
      </div>
      <div @click="isShow=true">
        <img src="../../assets/images/download.png" alt="">
        <p>下载</p>
      </div>
      <div @click="goNext">
        <img src="../../assets/images/next.png" alt="">
        <p>下一章</p>
      </div>
    </div>

    <!-- modeling -->
    <Modeling :isShow="isShow" @close="closeModel"></Modeling>
  </div>
</template>

<script>
// 引入组件 modeling
import Modeling from './components/Modeling'
// 引入遮挡层
import MyMask from '../../components/MyMask'
// 引入 read 数据接口
import { getReadList } from '../../api/cartoon'

export default {
  name: 'Read',
  components: {
    Modeling,
    MyMask
  },
  data () {
    return {
      id: this.$route.params.id,
      list: {},
      json_content: [],
      isShow: false,
      num: 2
    }
  },
  methods: {
    // 获取数据
    getReadList (id) {
      getReadList(id).then(res => {
        this.list = res.data
        this.json_content = res.data.json_content
        this.num = res.data.json_content.page.length
      })
    },
    // 下一章
    goNext () {
      clearTimeout(this.tiemr)
      this.tiemr = setTimeout(() => {
        const currentIndex = this.list.chapter_list.findIndex(item => item.chapter_id === this.id)
        const nextId = this.list.chapter_list[currentIndex + 1].chapter_id
        this.$route.params.id = nextId
        this.id = nextId
        this.list = []
        this.getReadList(this.id)
      }, 300)
    },
    // 上一章
    goPrve () {
      clearTimeout(this.tiemr2)
      this.tiemr2 = setTimeout(() => {
        const currentIndex = this.list.chapter_list.findIndex(item => item.chapter_id === this.id)
        if (currentIndex === 0) return
        const nextId = this.list.chapter_list[currentIndex - 1].chapter_id
        this.$route.params.id = nextId
        this.id = nextId
        this.list = []
        this.getReadList(this.id)
      }, 300)
    },
    // 关闭模态框
    closeModel () {
      this.isShow = false
    }
  },
  created () {
    this.getReadList(this.id)
  }
}
</script>

<style lang="scss" scoped>
.page-read {
  height: 100%;
  overflow: auto;

  // header
  .my-header {
    height: 44px;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    background-color: #333;
    z-index: 6666;
    img {
      width: 44px;
      height: 44px;
      float: left;
    }
    p {
      width: 240px;
      height: 44px;
      line-height: 44px;
      // text-align: center;
      // padding-left: 10px;
      color: #999;
      font-size: 16px;
      float: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    // .gz {
    //   width: 60px;
    //   height: 24px;
    //   margin-right: 7px;
    // }
  }

  // main
  main {
    height: 100%;
    position: relative;
    padding: 44px 0 48px;
    li {
      img {
        width: 100%;
      }
    }
  }

  // footer
  .my-footer {
    width: 375px;
    height: 48px;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    align-items: center;
    background-color: #333;
    z-index: 66666;
    div {
      width: 25%;
      height: 44px;
      margin-bottom: 4px;
      color: #666;
      display: flex;
      padding-bottom: 3px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      font-size: 10px;
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
}
</style>
