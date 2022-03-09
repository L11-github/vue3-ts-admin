<template>
  <div class="login-phone">
    <el-form :model="phone" label-width="95px" :rules="ruleP" ref="formRef">
      <el-form-item label="手机号码：" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-btn">获取</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'

import { ruleP } from './config/ruleP'
import localCache from '../../../utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const phone = reactive({
      num: '',
      code: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('login/phoneLoginAction', { ...phone })
        }
      })
    }
    return {
      phone,
      ruleP,
      loginAction
    }
  }
})
</script>

<style lang="less">
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 6px;
}
</style>
