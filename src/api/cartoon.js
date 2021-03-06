// 引入 封装的 axios
import request from '../utils/request.js'

// 首页数据接口
export const getHomeData = () => {
  return request({
    method: 'get',
    url: '/api/wbcomic/home/page_recommend_list?mca=h5_recommend_female&_type=h5'
  })
}

// 完结数据接口
export const getEndList = () => {
  return request({
    method: 'get',
    url: '/api/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5'
  })
}

// 放送表接口
export const getDaypubList = () => {
  return request({
    method: 'get',
    url: '/api/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5'
  })
}

// 分类 nav 接口
export const getCateNavList = () => {
  return request({
    method: 'get',
    url: '/api/wbcomic/comic/filter_list?_type=h5'
  })
}

// 分类 cate 接口
export const getCateList = (cateId, endId, payId) => {
  return request({
    method: 'get',
    url: '/api/wbcomic/comic/filter_result',
    params: {
      cate_id: cateId,
      end_status: endId,
      comic_pay_status: payId,
      page_num: 1,
      rows_num: 20,
      order: '',
      _type: 'h5'
    }
  })
}

// 排行榜接口
export const getRankList = (type) => {
  return request({
    method: 'get',
    url: `/api/wbcomic/home/${type}?_type=h5`
  })
}

// 更多页面接口
export const getMoreList = (type) => {
  return request({
    method: 'get',
    url: '/api/wbcomic/home/recommend_list',
    params: {
      location_en: type,
      _type: 'h5'
    }
  })
}

// 详情页面接口
export const getDetailDate = (id) => {
  return request({
    method: 'get',
    url: `/api/wbcomic/comic/comic_show?comic_id=${id}&create_source=h5&_=1588069267216&_type=h5`
  })
}

// 漫画阅读接口
export const getReadList = (id) => {
  return request({
    method: 'get',
    url: '/api/wbcomic/comic/comic_play',
    params: {
      chapter_id: id,
      create_source: 'h5',
      _: Date.now(),
      _type: 'h5'
    }
  })
}

// 热门搜索数据接口
export const getHotSearchList = () => {
  return request({
    method: 'get',
    url: '/api/wbcomic/home/hot_words?_type=h5'
  })
}

// 搜索结果数据接口
export const getResultList = (word) => {
  return request({
    method: 'get',
    url: `/api/wbcomic/home/search?word=${word}&page_num=1&_type=h5`
  })
}
