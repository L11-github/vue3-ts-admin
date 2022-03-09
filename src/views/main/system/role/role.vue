<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    >
    </page-search>
    <page-cotent
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      ref="pageContentRef"
    ></page-cotent>
    <page-modal
      :title="title"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      ref="pageModalRef"
      pageName="role"
      :modalConfig="modalConfig"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/utils/map-menus'

import { ElTree } from 'element-plus'
import PageCotent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components//page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'role',
  components: {
    PageCotent,
    PageSearch,
    PageModal
  },
  setup() {
    const title = '新建角色'
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // 1.处理pageModal的编辑hook
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      // 更新数据，但是组件里面还没有绑定ref,所以下一帧再更新
      nextTick(() => {
        console.log(elTreeRef.value)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(undefined, editCallback)

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys //点击事件，组件的属性自带的数据属性
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    return {
      title,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus,
      otherInfo,
      elTreeRef,
      handleCheckChange
    }
  }
})
</script>

<style scoped>
.menu-tree {
  margin-left: 25px;
}
</style>
