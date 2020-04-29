<template>
  <div class="page-detail">
    <!-- header -->
    <div class="my-header">
      <img @click="$router.back()" src="@/assets/images/back.png" alt="">
      <p>{{ comic.name }}</p>
      <img class="gz" src="../../assets/images/gz.png" alt="">
      <img src="../../assets/images/share.png" alt="">
    </div>

    <!-- main -->
    <main>
      <section v-if="bg">
        <!-- pic -->
        <div class="pic-box">
          <img class="bg" :src="bg" alt="">
          <div class="content">
            <p class="title">{{ comic.name }}
            </p>
            <p class="hot">
              <img src="../../assets/images/hot.png" alt="">
              热度值：{{ comic.comic_hot_value_text }}
            </p>
            <img class="bg-mask" src="../../assets/images/bg-mask.png" alt="">
          </div>
        </div>

        <!-- startRead -->
        <div class="start-read">
          <span>暂未阅读</span>
          <button @click="goRead">开始阅读</button>
        </div>

        <!-- detail or catalog -->
        <div class="detail">
          <span :class="{active: !isCatalog}" @click="isCatalog=false">详情</span>
          <span :class="{active: isCatalog}" @click="isCatalog=true">目录</span>
          <span class="lianzai" v-show="isCatalog">
            连载中（共{{ chapter_list.length }}话）
            <img @click="sort()" src="../../assets/images/sort.png" alt="">
          </span>
        </div>

        <!-- 详情列表 -->
        <div class="detail-list" v-show="!isCatalog">
          <!-- 简介 -->
          <div class="brief">
            <div class="box">
              <h4>简介</h4>
              <p>{{ comic.description }}</p>
              <div>
                作者：
                <p class="pic">
                  <img :src="author.user_avatar" alt="">
                </p>
                <span>{{ author.sina_nickname }}</span>
              </div>
            </div>
          </div>
          <!-- 评论 -->
          <div class="pinglun">
            <h3>热门评论</h3>
          </div>
        </div>

        <!-- 目录列表 -->
        <ul class="catalog" v-show="isCatalog">
          <li
            :class="{disable: isReverse ? chapter_list.length-index > 20 : index >= 20 }"
            v-for="(item, index) in chapter_list"
            :key="item.chapter_id"
            @click="goReadCatalog(item.chapter_id, index)"
          >{{ item.chapter_name }}</li>
        </ul>
      </section>
      <!-- 遮罩层 -->
      <MyMask :isShow="!bg"></MyMask>
    </main>
  </div>
</template>

<script>
// 引入遮罩层组件
import MyMask from '../../components/MyMask'
// 引入数据接口函数
import { getDetailDate } from '../../api/cartoon'

export default {
  name: 'Detail',
  components: {
    MyMask
  },
  data () {
    return {
      id: this.$route.params.id,
      bg: null,
      comic: {},
      chapter_list: [],
      author: {},
      isCatalog: false,
      isReverse: true
    }
  },
  methods: {
    getDetailDate (id) {
      getDetailDate(id).then(res => {
        this.bg = res.data.site_image + res.data.comic.hcover
        this.comic = res.data.comic
        this.chapter_list = res.data.chapter_list.reverse()
        this.author = res.data.new_author[0]
      })
    },
    sort () {
      this.isReverse = !this.isReverse
      this.chapter_list.reverse()
    },
    goRead () {
      const id = this.comic.chapter_tryread_ids.split(',')[0]
      console.log(id)
      this.$router.push({
        path: `/read/${id}`
      })
    },
    goReadCatalog (id, index) {
      if ((this.isReverse && this.chapter_list.length - index <= 20) || (!this.isReverse && index <= 19)) {
        this.$router.push(`/read/${id}`)
      } else {
        alert('当前章节需要付费！')
      }
    }
  },
  created () {
    this.getDetailDate(this.id)
  }
}
</script>

<style lang="scss" scoped>
.page-detail {
  height: 100%;
  display: flex;
  flex-direction: column;
  // header
  .my-header {
    height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
    img {
      width: 44px;
      height: 44px;
      float: left;
    }
    p {
      width: 219px;
      height: 44px;
      line-height: 44px;
      // text-align: center;
      // padding-left: 10px;
      color: #999;
      font-size: 18px;
      float: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .gz {
      width: 60px;
      height: 24px;
      margin-right: 7px;
    }
  }
  // main
  main {
    flex: 1;
    overflow: auto;
    position: relative;
    .pic-box {
      width: 375px;
      height: 210px;
      overflow: hidden;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
      }
      .content {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 375px;
        height: 100px;
        p {
          padding: 0 16px;
        }
        .title {
          font-size: 20px;
          color: #fff;
          img {
            width: 32px;
            height: 16px;
            margin: 4px 0 0 4px;
          }
        }
        .hot {
          margin-top: 8px;
          color: #fff;
          font-size: 16px;
          text-align: end;
          img {
            width: 8px;
            height: 10px;
            vertical-align: middle;
          }
        }
        .bg-mask {
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          transform: rotateY(180deg);
          z-index: 9999;
        }
      }
    }
    // 开始阅读
    .start-read {
      width: 375px;
      height: 48px;
      padding: 8px 16px 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 16px;
        color: #666;
      }
      button {
        width: 88px;
        height: 36px;
        background-color: #f75d79;
        padding: 1px 6px;
        color: #fff;
        outline: none;
        border: 0;
        border-radius: 3px;
      }
    }
    // 详情目录
    .detail {
      width: 375px;
      height: 52px;
      padding: 4px 16px;
      display: flex;
      align-items: center;
      span {
        width: 68px;
        height: 24px;
        color: #ccc;
        font-size: 18px;
      }
      .active {
        color: #666;
      }
      .lianzai {
        width: 207px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        color: #999;
        text-align: end;
        img {
          width: 24px;
          height: 24px;
          vertical-align: middle;
        }
      }
    }
    // 简介
    .brief {
      width: 375px;
      background-color: #f8f8f8;
      padding: 8px;
      .box {
        width: 100%;
        padding: 11px 8px;
        background-color: #fff;
        border-radius: 5px;
        h4 {
          height: 24px;
          color: #666;
          font-size: 14px;
        }
        p {
          font-size: 14px;
          color: #666;
          line-height: 25px;
        }
        div {
          font-size: 14px;
          color: #666;
          padding-top: 8px;
          display: flex;
          align-items: center;
          .pic {
            width: 26px;
            height: 26px;
            display: inline-block;
            border: 1px solid #f4f4f4;
            overflow: hidden;
            border-radius: 50%;
            margin: 0 8px;
            img {
              width: 100%;
            }
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
    .pinglun {
      h3 {
        width: 375px;
        height: 44px;
        line-height: 44px;
        font-size: 18px;
        color: #666;
        padding-left: 8px;
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
