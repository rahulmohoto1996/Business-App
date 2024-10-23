/* #version=0.0.0-0#15 rm 2024-10-22T14:54:28 F4B34CAB6182581E */
/* #version=0.0.0-0#14 rm 2024-10-22T14:44:57 2AE77CCB5A7A0EA7 */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 'no-debugger': process.env.NODE_ENV === "production" ? "warn" : "off",
    'prettier/prettier': 0,
  },
  validate: [
    "javascript",
    "javascriptreact",
    "vue"
  ]
};
