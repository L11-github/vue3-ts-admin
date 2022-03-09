import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门',
      placeholder: '请输入部门名称'
    },
    {
      field: 'realname',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入领导姓名'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
