export const rules = {
  name: [
    {
      required: true,
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{4,}$/,
      trigger: 'blur'
    }
  ]
}
