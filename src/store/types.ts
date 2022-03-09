import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboardState } from './main/analysis/types'

// store根里面类型
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

// 组件里面需要数据类型，这里面后续还能继续添加想要的数据类型，进行交叉即可
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

// 在组件里面使用store数据，vuex和ts类型兼容不够便利，
// 组件调用store.state.login.userInfo/userMenu等数据：any类型（但不符合类型检测）
// store里面是IRootState,所以需要再交叉上login类型
export type IStoreType = IRootState & IRootWithModule
