module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  plugins: ["jest", "promise", "prettier", "react", "react-hooks", "markdown"],
  rules: {
    "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": "off",
    "no-alert": "error",
    "no-console": "error",
    "no-param-reassign": ["error", { props: false }],
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "_"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false,
        trailingComma: "none",
      }
    ],
    "react/jsx-sort-props": "warn",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  overrides: [
    {
      files: ["*.md"],
      rules: {
        "react/jsx-no-undef": "off",
        "import/no-unresolved": "off",
        "no-unused-expressions": "off",
        "react/react-in-jsx-scope": "off"
      }
    }
  ],
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"]
      }
    }
  },
  ignorePatterns: ["reportWebVitals.js"]
}
