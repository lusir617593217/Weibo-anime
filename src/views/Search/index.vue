<template>
  <div class="page-search">
    <!-- top -->
    <div class="top-search">
      <div class="search-box">
        <img @click="getResultList(search_work)" src="../../assets/images/search-pic.png" alt="">
        <input v-model.trim="search_work" type="text" placeholder="请输入搜素关键字">
        <img class="cha" v-show="search_work" @click="clearInput" src="../../assets/images/cha.png" alt="">
      </div>
      <div>
        <span @click="$router.push('/home')" v-if="!search_work">取消</span>
        <span @click="getResultList(search_work)" v-else>搜索</span>
      </div>
    </div>

    <main>
      <section v-if="hotWord.length>0">
        <!-- 没有搜索到数据 -->
        <div class="no-result" v-if="no_search">
          <img src="../../assets/images/no-result.png" alt="">
          <p>没搜索到相关内容</p>
        </div>

        <!-- 热门搜索 -->
        <div class="hot-search" v-if="resultList.length===0">
          <div class="title">
            <h3>热门搜索</h3>
            <img @click="refresh" src="../../assets/images/refresh.png" alt="">
          </div>
          <ul class="search-word">
            <li v-for="item in randHotList" :key="item.object_id" @click="goDetail(item.object_id)">
              {{ item.title }}
            </li>
          </ul>
        </div>

        <!-- 历史记录 -->
        <div class="hot-search" v-if="resultList.length===0&&searchHistory.length>0">
          <div class="title">
            <h3>搜索历史</h3>
            <img @click="clear" src="../../assets/images/clear.png" alt="">
          </div>
          <ul class="search-word">
            <li v-for="(item, index) in searchHistory" :key="index" @click="getResultList(item.name)">
              {{ item.name }}
            </li>
          </ul>
        </div>

        <!-- search-result -->
        <ul class="search-result" v-if="resultList.length>0">
          <li v-for="item in resultList" :key="item.comic_id" @click="goDetail(item.comic_id)">
            <div class="pic">
              <img :src="item.cover" alt="">
            </div>
            <div>
              <h4>{{ item.name }}</h4>
              <p>{{ item.sina_nickname }}</p>
              <span v-if="item.cates.length>0">
                <i v-for="childrenItem in item.cates" :key="childrenItem.cate_id">
                  {{ childrenItem.cate_name }}
                </i>
              </span>
            </div>
          </li>
        </ul>
      </section>
      <MyMask :isShow="hotWord.length===0"></MyMask>
    </main>
  </div>
</template>

<script>
// 引入遮罩层
import MyMask from '../../components/MyMask'
// 引入接口
import { getHotSearchList, getResultList } from '../../api/cartoon'
export default {
  name: 'Search',
  components: {
    MyMask
  },
  data () {
    return {
      hotWord: [],
      showPage: 0,
      search_work: '',
      resultList: [],
      no_search: false,
      searchHistory: this.getLocal()
    }
  },
  computed: {
    randHotList () {
      if (this.hotWord.lenght === 0) return []
      return this.hotWord.slice(this.showPage * 12, (this.showPage + 1) * 12)
    }
  },
  methods: {
    // 获取热门搜索数据
    getHotSearchList () {
      getHotSearchList().then(res => {
        this.hotWord = res.data
      })
    },

    // 清空input框
    clearInput () {
      this.search_work = ''
      this.no_search = false
      this.resultList = []
    },

    // 搜索结果
    getResultList (word) {
      if (!word) return

      this.search_work = word
      getResultList(word).then(res => {
        this.resultList = res.data.data
        if (res.data.data.length === 0) {
          this.no_search = true
        }
      })

      // 保存至本地
      this.saveLocal()
    },

    // 获取本地搜索词
    getLocal () {
      return localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')) : []
    },

    // 搜索词保存至本地
    saveLocal () {
      const index = this.searchHistory.findIndex(item => {
        return item.name === this.search_work
      })
      if (index !== -1) return // 去重
      this.searchHistory.unshift({ name: this.search_work })
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory))
    },

    // 清空本地搜索
    clear () {
      localStorage.setItem('searchHistory', '')
      this.searchHistory = []
    },

    // 刷新热门搜索词
    refresh () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (this.showPage < this.hotWord.length / 12 - 1) {
          this.showPage++
        } else {
          this.showPage = 0
        }
      }, 300)
    },

    // 去详情页
    goDetail (id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  created () {
    this.getHotSearchList()
  }
}
</script>

<style lang="scss" sccoped>
.page-search {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // top
  .top-search {
    width: 343px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 16px 0;
   .search-box {
     width: 288px;
     height: 44px;
     display: flex;
     align-items: center;
     box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
     img {
       width: 44px;
       height: 44px;
     }
     input {
       width: 224px;
       height: 27px;
       padding: 4px 0 1px;
       border: 0;
       outline: none;
      //  vertical-align: middle;
     }
     .cha {
       width: 20px;
       height: 20px;
       margin: 12px 18px 12px 0;
     }
   }
   span {
     font-size: 14px;
     color: #666;
     width: 44px;
     height: 24px;
     text-align: center;
     line-height: 24px;
   }
  }
  // main
  main {
    flex: 1;
    position: relative;
    overflow: auto;
    .no-result {
      width: 100%;
      height: 225px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img {
        width: 184px;
        height: 184px;
      }
      p {
        text-align: center;
        font-size: 14px;
        color: #999;
        padding-bottom: 22px;
      }
    }
  }

  // hot-search
  .hot-search {
    width: 375px;
    padding: 16px 16px 24px;
    .title {
      width: 100%;
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        height: 44px;
        line-height: 44px;
        font-size: 18px;
        font-weight: 600;
        color: #666;
      }
      img {
        width: 44px;
        height: 44px;
      }
    }
    .search-word {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        height: 36px;
        line-height: 36px;
        padding: 0px 17px;
        border-radius: 2px;
        margin: 0px 16px 8px 0;
        background-color: #efefef;
        color: #666;
        font-size: 14px;
      }
    }
  }
  // search-result
  .search-result {
    width: 100%;
    padding: 24px 16px 0;
    li {
      width: 100%;
      height: 96px;
      margin-bottom: 16px;
      display: flex;
      .pic {
        width: 72px;
        height: 96px;
        margin-right: 8px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div {
        width: 263px;
        h4 {
          font-size: 14px;
          color: #666;
          height: 24px;
          line-height: 24px;
        }
        p {
          font-size: 12px;
          color: #999;
          height: 24px;
          line-height: 24px;
        }
        span {
          display: block;
          height: 24px;
          line-height: 24px;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>
