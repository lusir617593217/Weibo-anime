<template>
  <div class="page-cate">
    <!-- hader -->
    <MyHeader title="分类"></MyHeader>

    <!-- nav -->
    <ul class="cate-nav">
      <li
        :class="{active: cateSelect===item.cate_id}"
        v-for="item in navList.cate_list"
        :key="item.cate_id"
        @click="cateHandel(item.cate_id)"
      >
        {{ item.cate_cn_name }}
      </li>
    </ul>
    <ul class="cate-nav">
      <li
        :class="{active: endSelect===item.end_status}"
        v-for="item in navList.end_status_list"
        :key="item.end_status"
        @click="endHandel(item.end_status)"
      >
        {{ item.end_status_name }}
      </li>
    </ul>
    <ul class="cate-nav">
      <li
        :class="{active: paySelect===item.comic_pay_status}"
        v-for="item in navList.comic_pay_status_list"
        :key="item.comic_pay_status"
        @click="payHandel(item.comic_pay_status)"
      >
        {{ item.comic_pay_status_name }}
      </li>
    </ul>

    <!-- main -->
    <main>
      <ul v-if="cateList.length!==0">
        <li class="item" v-for="item in cateList" :key="item.comic_id" @click="goDetail(item.comic_id)">
          <div class="pic">
            <img v-lazy="item.comic_hcover" alt="">
          </div>
          <p>{{ item.comic_name }}</p>
          <span>{{ item.comic_desc }}</span>
        </li>
      </ul>
      <!-- 遮罩层 -->
      <MyMask :isShow="cateList.length===0"></MyMask>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '../../components/MyHeader'
// 引入遮罩层组件
import MyMask from '../../components/MyMask'
import { getCateNavList, getCateList } from '../../api/cartoon'
export default {
  name: 'Cate',
  components: {
    MyHeader,
    MyMask
  },
  data () {
    return {
      navList: {},
      cateSelect: null,
      endSelect: null,
      paySelect: null,
      cateList: []
    }
  },
  methods: {
    cateHandel (id) {
      this.cateSelect = id
      this.getCateList(this.cateSelect, this.endSelect, this.paySelect)
    },
    endHandel (id) {
      this.endSelect = id
      this.getCateList(this.cateSelect, this.endSelect, this.paySelect)
    },
    payHandel (id) {
      this.paySelect = id
      this.getCateList(this.cateSelect, this.endSelect, this.paySelect)
    },
    getCateNavList () {
      getCateNavList().then(res => {
        this.navList = res.data
        this.cateSelect = this.navList.cate_list[0].cate_id
        this.endSelect = this.navList.end_status_list[0].end_status
        this.paySelect = this.navList.comic_pay_status_list[0].comic_pay_status
      })
    },
    getCateList (cateId, endId, payId) {
      this.cateList = []
      getCateList(cateId, endId, payId).then(res => {
        this.cateList = res.data.data
      })
    },
    // 去详情页
    goDetail (id) {
      this.$router.push({
        path: `/detail/${id}`
      })
    }
  },
  created () {
    this.getCateNavList()
    this.getCateList(this.cateSelect, this.endSelect, this.paySelect)
  }
}
</script>

<style lang="scss" scoped>
.page-cate {
  height: 100%;
  display: flex;
  flex-direction: column;
  .cate-nav {
    // height: 90px;
    width: 100%;
    padding: 0 7px;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    li {
      width: 60px;
      height: 30px;
      text-align: center;
      color: #CCC;
      font-size: 14px;
      line-height: 30px;
    }
    .active {
      background-color: #f75d79;
      width: 54px;
      height: 24px;
      line-height: 24px;
      margin-top: 3px;
      border-radius: 3px;
      color: #fff;
    }
  }
  main {
    flex: 1;
    overflow: auto;
    position: relative;
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 10px 8px 0;
      li {
        .pic {
          width: 175px;
          height: 105px;
          border-radius: 8px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          width: 167px;
          margin: 10px 0 6px;
          font-size: 14px;
          color: #666;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        span {
          width: 167px;
          display: block;
          font-size: 12px;
          color: #999;
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
