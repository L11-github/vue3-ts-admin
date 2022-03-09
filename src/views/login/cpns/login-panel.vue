<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <!-- <el-icon><calendar /></el-icon>注册 -->
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

import { Avatar, Iphone } from '@element-plus/icons-vue'

// import 'element-plus/es/components/tabs/style/css'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone,

    // Calendar
    Avatar,
    Iphone
  },
  setup() {
    const isKeepPassword = ref(false)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')

    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }

    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,

      handleLoginClick
    }
  }
})
</script>

<style lang="less">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  background-color: #f4f5f7;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.login-panel {
  margin-bottom: 180px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
