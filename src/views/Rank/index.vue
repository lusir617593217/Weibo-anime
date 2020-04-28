<template>
  <div class="page-rank">
    <MyHeader title="排行榜"></MyHeader>

    <!-- nav -->
    <ul class="nav">
      <li
        v-for="item in navList" :key="item.id"
        :class="{active: isSelect===item.type}"
        @click="clickHandel(item.type)"
      >
        {{ item.name }}
      </li>
    </ul>

    <!-- main -->
    <main>
      <ul class="cartoon" v-show="cartoonList.length!==0">
        <li v-for="item in cartoonList" :key="item.comic_id" @click="goDetail(item.comic_id)">
          <div class="left">
            <img v-lazy="item.hcover" alt="">
          </div>
          <div class="center">
            <h3>{{ item.name }}</h3>
            <p>
              <img src="../../assets/images/type.png" alt="">
              <i v-for="childrenItem in item.cate_list" :key="childrenItem.cate_id">
                {{ childrenItem.cate_cn_name }}/
              </i>
            </p>
            <span>
              <img src="../../assets/images/type2.png" alt="">
              {{ item.sina_nickname }}
            </span>
          </div>
          <div class="rigth">
            <img
              v-if="item.rank_no===1||item.rank_no===2||item.rank_no===3"
              :src="require(`@/assets/images/no-${item.rank_no}.png`)" alt=""
            >
            <p v-else class="rank">{{ item.rank_no }}</p>
          </div>
        </li>
      </ul>
      <MyMask :isShow="cartoonList.length===0"></MyMask>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '../../components/MyHeader'
// 引入遮罩层组件
import MyMask from '../../components/MyMask'

// 引入接口函数
import { getRankList } from '../../api/cartoon'
export default {
  name: 'Rank',
  components: {
    MyHeader,
    MyMask
  },
  data () {
    return {
      navList: [
        { id: 1, name: '阅读榜', type: 'rank_read' },
        { id: 2, name: '新作榜', type: 'rank_share' },
        { id: 3, name: '综合榜', type: 'rank' }
      ],
      isSelect: 'rank_read',
      cartoonList: []
    }
  },
  methods: {
    clickHandel (type) {
      this.isSelect = type
      this.cartoonList = []
      this.getRankList(this.isSelect)
    },
    getRankList (type) {
      getRankList(type).then(res => {
        this.cartoonList = res.data.week
      })
    },
    goDetail (id) {
      this.$router.push({
        path: `/detail/${id}`
      })
    }
  },
  created () {
    this.getRankList(this.isSelect)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';

.page-rank {
  height: 100%;
  display: flex;
  flex-direction: column;
  .nav {
    @include border-bottom;
    width: 100%;
    height: 44px;
    display: flex;
    margin-bottom: 6px;
    justify-content: space-around;
    align-items: center;
    li {
      height: 44px;
      line-height: 44px;
      width: 50px;
      font-size: 14px;
      color: #b3b3b3;
      text-align: center;
    }
    .active {
      color: #666;
       border-bottom: 2px solid red;
    }
  }
  main {
    flex: 1;
    overflow: auto;
    position: relative;
    ul {
      li {
        width: 375px;
        height: 97px;
        padding: 0 16px 16px;
        display: flex;
        .left {
          width: 144px;
          height: 81px;
          margin-right: 4px;
          border-radius: 3px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .center {
          width: 155px;
          height: 81px;
          padding-right: 16px;
          h3 {
            width: 139px;
            height: 32px;
            font-size: 16px;
            color: #333;
            margin-top: 4px;
            padding-bottom: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p {
            width: 139px;
            height: 24px;
            font-size: 12px;
            color: #000;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-bottom: 8px;
            img {
              width: 16px;
              height: 16px;
              margin-right: 2px;
              margin-top: -2px;
              vertical-align: middle;
            }
          }
          span {
            display: block;
            width: 139px;
            height: 16px;
            color: #000;
            font-size: 12px;
            img {
              width: 16px;
              height: 16px;
              margin-right: 2px;
              margin-top: -2px;
              vertical-align: middle;
            }
          }
        }
        .rigth {
          width: 40px;
          height: 45px;
          margin-top: 19px;
          img {
            width: 100%;
            height: 100%;
          }
          .rank {
            width: 40px;
            height: 37px;
            color: #666;
            font-size: 18px;
            padding-top: 20px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
