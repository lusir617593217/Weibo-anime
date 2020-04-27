<template>
  <div class="page-home">
    <!-- header -->
    <div class="header">
      <img src="../../assets/images/logo.png" alt="" class="logo">
      <div class="header-right">
        <img src="../../assets/images/women.png" alt="">
        <router-link to="/search"><img src="@/assets/images/search.png" alt=""></router-link>
        <router-link to="/my"><img src="@/assets/images/my.png" alt=""></router-link>
      </div>
    </div>

    <!-- main -->
    <main>
      <!-- 轮播图 -->
      <div class="banner">
        <Swiper>
          <div class="swiper-slide"
              v-for="item in list.h5_recommend_female_rotation_map"
              :key="item.info_id"
            >
              <img :src="item.image_url" alt="">
            </div>
        </Swiper>
      </div>

      <!-- nav -->
      <ul class="nav">
        <router-link tag="li" to="/daypub">
          <img src="@/assets/images/classify.png" alt="">
          <p>放送表</p>
        </router-link>
        <router-link tag="li" to="/cate">
          <img src="@/assets/images/classify2.png" alt="">
          <p>分类</p>
        </router-link>
        <router-link tag="li" to="/rank">
          <img src="@/assets/images/rank.png" alt="">
          <p>榜单</p>
        </router-link>
        <router-link tag="li" to="/end">
          <img src="@/assets/images/ending.png" alt="">
          <p>完结</p>
        </router-link>
      </ul>

      <!-- recommend-book -->
      <!-- 精品佳作 -->
      <div class="recommend-book-1">
        <div class="book-header">
          <h3>精品佳作</h3>
          <span>更多&gt;</span>
        </div>
        <ul class="book">
          <li class="book-one">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">总裁在上</div>
            <p>她，没有反抗的权利</p>
          </li>
          <div class="book-small">
            <li class="book-two">
              <div class="pic">
                <img src="" alt="">
              </div>
              <div class="title">恶魔，别吻我</div>
              <p>美男小三居然是恶魔？</p>
            </li>
            <li class="book-two">
              <div class="pic">
                <img src="" alt="">
              </div>
              <div class="title">恶魔，别吻我</div>
              <p>美男小三居然是恶魔？</p>
            </li>
          </div>
        </ul>
      </div>
      <!-- 人气作品 -->
      <div class="recommend-book-2">
        <div class="book-header">
          <h3>人气作品</h3>
          <span>更多&gt;</span>
        </div>
        <div class="book-small">
          <li class="book-two">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">帝少专宠霸道妻</div>
            <p>美男小三居然是恶魔？</p>
          </li>
          <li class="book-two">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">恶魔，别吻我</div>
            <p>美男小三居然是恶魔？</p>
          </li>
          <li class="book-two">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">恶魔，别吻我</div>
            <p>美男小三居然是恶魔？</p>
          </li>
          <li class="book-two">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">恶魔，别吻我</div>
            <p>美男小三居然是恶魔？</p>
          </li>
        </div>
      </div>
      <!-- 最新上架 -->
      <div class="recommend-book-3">
        <div class="book-header">
          <h3>最新上架</h3>
          <span>更多&gt;</span>
        </div>
        <ul class="book">
          <li class="book-item">
            <div class="left">
              <img src="" alt="">
            </div>
            <div class="right">
              <h4>一纸契约，惹上冷情南山风景功能</h4>
              <p>恋爱、总裁</p>
              <span>翻阅漫画</span>
            </div>
          </li>
          <li class="book-item">
            <div class="left">
              <img src="" alt="">
            </div>
            <div class="right">
              <h4>一纸契约，惹上冷情南山风景功能</h4>
              <p>恋爱、总裁</p>
              <span>翻阅漫画</span>
            </div>
          </li>
          <li class="book-item">
            <div class="left">
              <img src="" alt="">
            </div>
            <div class="right">
              <h4>一纸契约，惹上冷情南山风景功能</h4>
              <p>恋爱、总裁</p>
              <span>翻阅漫画</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 热门连载 -->
       <div class="recommend-book-2">
        <div class="book-header">
          <h3>热门连载</h3>
          <span>更多&gt;</span>
        </div>
        <div class="book-small">
          <li class="book-two">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">帝少专宠霸道妻</div>
            <p>美男小三居然是恶魔？</p>
          </li>
          <li class="book-two">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">恶魔，别吻我</div>
            <p>美男小三居然是恶魔？</p>
          </li>
        </div>
      </div>
      <!-- 小编推荐 -->
      <div class="recommend-book-1">
        <div class="book-header">
          <h3>小编推荐</h3>
          <span>更多&gt;</span>
        </div>
        <ul class="book">
          <li class="book-one">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">总裁在上</div>
            <p>她，没有反抗的权利</p>
          </li>
          <div class="book-small">
            <li class="book-two">
              <div class="pic">
                <img src="" alt="">
              </div>
              <div class="title">恶魔，别吻我</div>
              <p>美男小三居然是恶魔？</p>
            </li>
            <li class="book-two">
              <div class="pic">
                <img src="" alt="">
              </div>
              <div class="title">恶魔，别吻我</div>
              <p>美男小三居然是恶魔？</p>
            </li>
          </div>
        </ul>
      </div>
      <!-- 本周推荐 -->
       <div class="recommend-book-4">
        <div class="book-header">
          <h3>本周推荐</h3>
          <span>更多&gt;</span>
        </div>
        <div class="book-small">
          <li class="book-two">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">帝少专宠霸道妻</div>
            <p>美男小三居然是恶魔？</p>
          </li>
          <li class="book-two">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">第三个返回符合</div>
            <p>美男小三居然是恶魔？</p>
          </li>
          <li class="book-two">
            <div class="pic">
              <img src="" alt="">
            </div>
            <div class="title">辅导费哈哈哈更好</div>
            <p>美男小三居然是恶魔？</p>
          </li>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// 引入轮播图组件
import Swiper from './Swiper'
// 引入 封装的 axios 方法
import { getHomeData } from '../../api/cartoon'

export default {
  name: 'Home',
  components: {
    Swiper
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getHomeData () {
      getHomeData().then(res => {
        this.list = res.data
      })
    }
  },
  created () {
    this.getHomeData()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  // header
  .header {
    @include border-bottom;
    width: 375px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    background-color: #fff;
    .logo {
      width: 87px;
      height: 24px;
    }
    .header-right {
      width: 132px;
      height: 44px;
      img {
        width: 44px;
        height: 44px;
      }
    }
  }
  // main
  main {
    flex: 1;
    overflow: auto;
    // 轮播图
    .banner {
      width: 375px;
      height: 222px;
      padding-top: 8px;
      background-color: #fff;
    }
    // nav
    .nav {
      width: 375px;
      height: 120px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      li {
        width: 60px;
        height: 88px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
          width: 60px;
          height: 60px;
        }
        p {
          width: 60px;
          height: 24px;
          font-size: 14px;
          color: #333;
          text-align: center;
          line-height: 24px;
        }
      }
    }
    // book
    .recommend-book-1 {
      width: 100%;
      margin-top: 8px;
      background-color: #fff;
      .book-header {
        width: 375px;
        height: 44px;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-size: 18px;
          color: #666;
          text-indent: 26px;
          position: relative;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 22px;
            height: 22px;
            background: url('../../assets/images/book-tag.png');
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
          }
        }
        span {
          border-radius: 10px;
          font-size: 12px;
          color: #fff;
          width: 42px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          display: block;
          background-color: #4a90e2;
        }
      }
      .book {
        width: 100%;
        padding: 0 16px;
        .book-one {
          width: 343px;
          height: 264px;
          .pic {
            width: 100%;
            height: 215px;
            border-radius: 8px;
            overflow: hidden;
            background-color: pink;
          }
          .title {
            height: 20px;
            width: 335px;
            font-size: 14px;
            margin-top: 10px;
            color: #666;
          }
          p {
            font-size: 12px;
            width: 335px;
            height: 16px;
            color: #999;
            margin-bottom: 6px;
          }
        }
        .book-small {
          width: 100%;
          height: 145px;
          display: flex;
          justify-content: space-between;
          .book-two {
            width: 167px;
            height: 139px;
            border-radius: 8px;
            margin-bottom: 6px;
            .pic {
              width: 167px;
              height: 90px;
              border-radius: 8px;
              background-color: pink;
              overflow: hidden;
            }
            .title {
              height: 20px;
              font-size: 14px;
              margin-top: 10px;
              color: #666;
            }
            p {
              font-size: 12px;
              height: 16px;
              color: #999;
              margin-bottom: 6px;
            }
          }
        }
      }
    }
    .recommend-book-2 {
      width: 100%;
      margin-top: 8px;
      background-color: #fff;
      .book-header {
        width: 375px;
        height: 44px;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-size: 18px;
          color: #666;
          text-indent: 26px;
          position: relative;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 22px;
            height: 22px;
            background: url('../../assets/images/book-tag.png');
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
          }
        }
        span {
          border-radius: 10px;
          font-size: 12px;
          color: #fff;
          width: 42px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          display: block;
          background-color: #4a90e2;
        }
      }
      .book-small {
          width: 100%;
          // height: 145px;
          padding: 0 16px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .book-two {
            width: 167px;
            height: 139px;
            border-radius: 8px;
            margin-bottom: 6px;
            .pic {
              width: 167px;
              height: 90px;
              border-radius: 8px;
              background-color: pink;
              overflow: hidden;
            }
            .title {
              height: 20px;
              font-size: 14px;
              margin-top: 10px;
              color: #666;
            }
            p {
              font-size: 12px;
              height: 16px;
              color: #999;
              margin-bottom: 6px;
            }
          }
        }
    }
    .recommend-book-3 {
      width: 100%;
      margin-top: 8px;
      background-color: #fff;
      .book-header {
        width: 375px;
        height: 44px;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-size: 18px;
          color: #666;
          text-indent: 26px;
          position: relative;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 22px;
            height: 22px;
            background: url('../../assets/images/book-tag.png');
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
          }
        }
        span {
          border-radius: 10px;
          font-size: 12px;
          color: #fff;
          width: 42px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          display: block;
          background-color: #4a90e2;
        }
      }
      .book {
        width: 100%;
        .book-item {
          width: 100%;
          height: 106px;
          padding: 0 16px 16px;
          display: flex;
          .left {
            width: 160px;
            height: 90px;
            margin-right: 4px;
            background-color: pink;
            border-radius: 4px;
            img {
              width: 100%;
            }
          }
          .right {
            width: 179px;
            margin-right: 16px;
            h4 {
              width: 163px;
              height: 32px;
              font-size: 16px;
              color: #333;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 32px;
              padding: 0 0 8px;
              margin-top: 4px;
            }
            p, span {
              width: 163px;
              font-size: 12px;
              color: #000;
              padding-bottom: 8px;
              height: 24px;
              line-height: 24px;
              img {
                width: 16px;
                height: 16px;
              }
            }
          }
        }
      }
    }
    .recommend-book-4 {
      width: 100%;
      margin-top: 8px;
      background-color: #fff;
      .book-header {
        width: 375px;
        height: 44px;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-size: 18px;
          color: #666;
          text-indent: 26px;
          position: relative;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 22px;
            height: 22px;
            background: url('../../assets/images/book-tag.png');
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
          }
        }
        span {
          border-radius: 10px;
          font-size: 12px;
          color: #fff;
          width: 42px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          display: block;
          background-color: #4a90e2;
        }
      }
      .book-small {
          width: 100%;
          // height: 145px;
          padding: 0 16px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .book-two {
            width: 109px;
            height: 200px;
            border-radius: 8px;
            margin-bottom: 6px;
            .pic {
              width: 109px;
              height: 150px;
              border-radius: 8px;
              background-color: pink;
              overflow: hidden;
            }
            .title {
              height: 20px;
              text-align: center;
              width: 101px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 14px;
              margin-top: 10px;
              color: #666;
            }
            p {
              font-size: 12px;
              height: 16px;
              width: 101px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #999;
              margin-bottom: 6px;
            }
          }
        }
    }
  }
}
</style>
