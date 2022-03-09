<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
// //form的双向绑定过程：
// 父组件<hy-form v-bind="searchFormConfig" v-model="formData"></hy-form>传递ID， password等属性(v-model:用于简单数据的双向绑定)
// 子组件v-model="formData[`${item.field}`]"动态绑定所有属性

// const formData = ref({ ...props.modelValue }):拿到传递的数据，是浅拷贝，
// watch(：监听每一次改变
//   formData,
//   (newValue) => {
//     emit('update:modelValue', newValue)
//   },
//   {
//     deep: true
//   }
// )

// 但是外部重置时无法实现功能，
// 原因是点击重置事件时语句formData.value = formOriginData，浅拷贝原因modelvalue变化不影响formData，故无法重置
//formData.value[`${key}`] = formOriginData[key]，相当于修改属性，所以能够改变formData

// 存在弊端的方案：
// <hy-form v-bind="searchFormConfig" ：formData="formData"></hy-form>
// :model-value="formValue[`${item.field}`]"
// 这种方式动态改变子组件porps中传递的数据，能实现，但是违反单项数据传递法则

// 项目中采用的方式
// 其他同学采用的方法：不使用双向绑定改props中的formData，而是用双向绑定的原型，去使用传过来的modelValue
//子组件：
// :model-value="modelValue[`${item.field}`]"赋值
// @update:modelValue="handleValueChange($event, item.field)"值改变

import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue })

    // watch(
    //   formData,
    //   (newValue) => {
    //     console.log(newValue)
    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     deep: true
    //   }
    // )

    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value }) //外面收到要传递的数据
    }

    return {
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 22px;
}
</style>
