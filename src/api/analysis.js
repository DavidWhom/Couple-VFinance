import api from './index'
import { axios } from '@/utils/request'

/**
 * 测试
 * @returns {AxiosPromise}
 */
export function test (parameter) {
  return axios({
    url: api.test,
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
