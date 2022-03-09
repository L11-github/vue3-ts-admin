import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      label: '部门名称',
      type: 'input',
      placeholder: '请输入部门名称...'
    },
    {
      field: 'createAt',
      label: '创建日期',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    },
    {
      field: 'leader',
      label: '部门管理',
      type: 'input',
      placeholder: '请输入部门管理人..'
    }
  ],
  itemStyle: {
    padding: '10px 40px'
  }
}
