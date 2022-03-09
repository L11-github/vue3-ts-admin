import { App } from 'vue'
import { Avatar, Bell } from '@element-plus/icons-vue'

const ElIconModules = [Avatar, Bell]

export default function registerIcon(app: App): void {
  for (const iconName in ElIconModules) {
    app.component(iconName, ElIconModules[iconName])
  }
}
