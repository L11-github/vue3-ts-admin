import { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface HYRuestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responstInterceptor?: (res: T) => T
  responstInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRuestInterceptors<T>
  showLoading?: boolean
}
