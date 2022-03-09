<template>
  <div id="nav">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      zhCn
    }
  }
})
</script>

<style lang="less">
#nav {
  height: 100%;
}
</style>
