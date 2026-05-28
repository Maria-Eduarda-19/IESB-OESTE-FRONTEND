module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/tsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "off",
    "react/react-in-tsx-scope": "off",
    "react/prop-types": "off",
    "no-unsafe-finally": "off",
    "no-unused-vars": "off",
    "react/tsx-key": "off",
  },
};
