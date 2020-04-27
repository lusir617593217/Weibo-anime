// 引入 封装的 axios
import request from '../utils/request.js'

export const getHomeData = () => {
  return request({
    method: 'get',
    url: '/api/wbcomic/home/page_recommend_list?mca=h5_recommend_female&_type=h5'
  })
}
