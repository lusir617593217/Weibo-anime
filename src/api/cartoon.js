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
