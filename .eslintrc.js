module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  // settings: {
  //   "import/resolver": {
  //     node: {
  //       extensions: [".js", ".jsx", ".ts", ".tsx"],
  //     },
  //   },
  // },
  rules: {
    "react/prop-types": [0],
    "react/jsx-props-no-spreading": [0],
    "arrow-body-style": 0,
    "no-console": 0,
    "max-len": 0,
    "react/react-in-jsx-scope": 0,
    "no-underscore-dangle": 0,
    "no-nested-ternary": 0,
    "no-else-return": 0,
    "import/prefer-default-export": 0,
    quotes: 0,
    "comma-dangle": 0,
    "object-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": 0,
    "function-paren-newline": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-confusing-arrow": 0,
    indent: 0,
  },
};
