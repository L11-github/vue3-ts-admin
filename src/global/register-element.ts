import { App } from 'vue'
import {
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElDropdownMenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag
} from 'element-plus'

// 这个地方把全局的样式引入，不用单独按需引入组件样式文件？？？
// import 'element-plus/lib/index.css'
// import 'element-plus/dist/index.css'
import 'element-plus/lib/theme-chalk/index.css'

const components = [
  ElButton,
  ElTable,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElRow,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag
]

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
