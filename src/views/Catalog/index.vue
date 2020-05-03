<template>
  <div class="page-catalog">
    <!-- header -->
    <MyHeader title="微博动漫"></MyHeader>

    <!-- main -->
    <main>
      <section>
        <div class="title">
          <h3>作品目录</h3>
          <p>已完结（共{{ chapter_list.length }}话）
            <img @click="sort()" src="@/assets/images/sort.png" alt="">
          </p>
        </div>
        <!-- 目录列表 -->
        <ul class="catalog">
          <li
            :class="{disable: isReverse ? chapter_list.length-index > 20 : index >= 20 }"
            v-for="(item, index) in chapter_list"
            :key="item.chapter_id"
            @click="goRead(item.chapter_id, index)"
          >{{ item.chapter_name }}</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '../../components/MyHeader'
// 引入接口函数
import { getDetailDate } from '../../api/cartoon'
export default {
  name: 'Catalog',
  components: {
    MyHeader
  },
  data () {
    return {
      id: this.$route.params.id,
      chapter_list: [],
      isReverse: true
    }
  },
  methods: {
    getDetailDate (id) {
      getDetailDate(id).then(res => {
        this.chapter_list = res.data.chapter_list.reverse()
      })
    },
    sort () {
      this.isReverse = !this.isReverse
      this.chapter_list.reverse()
    },
    goRead (id, index) {
      if ((this.isReverse && this.chapter_list.length - index <= 20) || (!this.isReverse && index <= 19)) {
        this.$router.push(`/read/${id}`)
      } else {
        this.$dialog.alert({
          message: '当前章节需要付费哦！'
        })
      }
    }
  },
  created () {
    this.getDetailDate(this.id)
  }
}
</script>

<style lang="scss" scoped>
.page-catalog {
  height: 100%;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow: auto;
    .title {
      width: 375px;
      height: 44px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f7f7f7;
      h3 {
        font-size: 18px;
        color: #666;
      }
      p {
        font-size: 12px;
        color: #999;
        img {
          width: 24px;
          height: 24px;
          margin-left: 5px;
          vertical-align: middle;
        }
      }
    }
    // 目录列表
    .catalog {
      background-color: #f7f7f7;
      padding: 10px 8px;
      li {
        width: 359px;
        height: 48px;
        line-height: 48px;
        background-color: #fff;
        padding: 0 8px;
        margin-bottom: 6px;
        border-radius: 5px;
        font-size: 14px;
        color: #666;
      }
      .disable {
        color: #b3b3b3;
        background-image: url('../../assets/images/lock.png');
        background-size: 18px;
        background-position: 315px 15px;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
