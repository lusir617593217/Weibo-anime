<template>
  <div class="page-daypub">
    <!-- header -->
    <MyHeader title="放送表"></MyHeader>

    <!-- nav -->
    <ul class="nav">
      <li :class="{'active': item.pub_day===isSelect}"
        v-for="item in dayList.tab_list" :key="item.pub_day"
        @click="select(item.pub_day)"
      >{{ item.pub_name}}</li>
    </ul>

    <!-- main -->
    <main>
      <div class="no-data" v-if="!dayList.page_total">
        <img src="../../assets/images/no-data.png" alt="">
        <p>今日的漫画还在绘制中</p>
      </div>
    </main>
  </div>
</template>

<script>
// 引入 header 组件
import MyHeader from '../../components/MyHeader'
import { getDaypubList } from '../../api/cartoon'
export default {
  name: 'Daypub',
  components: {
    MyHeader
  },
  data () {
    return {
      dayList: {},
      isSelect: null
    }
  },
  methods: {
    getDaypubList () {
      getDaypubList().then(res => {
        this.dayList = res.data
        this.isSelect = this.dayList.tab_list[6].pub_day
      })
    },
    select (id) {
      this.isSelect = id
    }
  },
  created () {
    this.getDaypubList()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';

.page-daypub {
  height: 100%;
  display: flex;
  flex-direction: column;
  .nav {
    @include border-bottom;
    height: 40px;
    width: 100%;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      height: 40px;
      width: 28px;
      text-align: center;
      line-height: 40px;
      color: #b3b3b3;
    }
    .active {
      border-bottom: 2px solid red;
      color: #333;
    }
  }
  main {
    flex: 1;
    overflow: auto;
    .no-data {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 184px;
        height: 184px;
      }
      p {
        font-size: 14px;
        color: #999;
        text-align: center;
        margin-top: 3px;
        padding-bottom: 40px;
      }
    }
  }
}
</style>
