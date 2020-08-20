/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    // eslint-disable-next-line quotes
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    'linebreak-style': ['error', 'windows'],
  },
};
