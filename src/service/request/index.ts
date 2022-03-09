import axios, { AxiosInstance } from 'axios'
import { HYRuestInterceptors, HYRequestConfig } from './types'
// import { useUserStore } from '/@/store/modules/user'

class HYRequest {
  private instance: AxiosInstance
  interceptors?: HYRuestInterceptors

  // private readonly options: AxiosRequestConfig

  constructor(config: HYRequestConfig) {
    // this.options = options

    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 针对单个实例的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 这是全局的拦截
    this.instance.interceptors.request.use(
      (config) => {
        // const token = useUserStore().getToken
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        // 携带token或者请求时候的其他组件的加载
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 拦截响应的数据
        // if (res.data.code === 0) {
        //   return res.data.data
        // }
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request<T = any>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res as unknown as Promise<T>)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  patch<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  delete<T = any>(config: HYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default HYRequest
