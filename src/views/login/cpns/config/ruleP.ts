export const ruleP = {
  num: [
    {
      required: true,
      trigger: 'blur'
    },
    {
      pattern: /^[1]([3-9])[0-9]{9}$/,
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      trigger: 'blur'
    }
  ]
}
