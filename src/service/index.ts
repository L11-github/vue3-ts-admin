import HYRequest from './request'
import { BASE_URL, TIME_out } from './request/config'

import localCache from '@/utils/cache'
// 不同地址对应不同的请求实例,在需要请求数据的地方不同地址(实例)拼接参数同时发出请求

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_out,
  interceptors: {
    // 这个地方暂时无法解决config.headers.Authorization的问题，将config:any
    requestInterceptor: (config: any) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responstInterceptor: (res) => {
      return res
    },
    responstInterceptorCatch: (err) => {
      return err
    }
  }
})

// const hyRequest2 = new HYRequest({
//   baseURL: BASE_URL2,
//   timeout: TIME_out
// })

export default hyRequest
