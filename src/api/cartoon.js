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
