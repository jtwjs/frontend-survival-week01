module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["tsconfig.json"],
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/function-component-definition": ["error", { "namedComponents": "arrow-function" }],
    "react/jsx-props-no-spreading": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/require-default-props": ["off"],
    "react/jsx-no-bind": ["error", {
        "allowFunctions": true,
        "allowArrowFunctions": true
      }],
    "react/no-unstable-nested-components": ["error", {
        "allowAsProps": true
      }],
    "react/no-array-index-key": ["off"],
    "react/self-closing-comp": ["error", {
        "component": true,
        "html": false
      }],
    "react/no-unknown-property": ["error", {
        "ignore": ["css"]
      }],
    "import/no-cycle": ["off"],
    "import/prefer-default-export": ["off"],
    "no-param-reassign": ["error", {
        "props": true,
        "ignorePropertyModificationsFor": [
          "draft",
          "inputRefs",
          "e"
        ]
      }],
    "no-use-before-define": "off",
    "no-shadow": "off",
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-alert": "off",
    "no-nested-ternary": "off",
    "no-throw-literal": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-throw-literal": "warn",
    "@typescript-eslint/no-empty-function": ["error", { "allow": ["constructors"] }],
    "jsx-a11y/no-noninteractive-element-interactions": ["error",{ "handlers": ["onClick"] }],
    "jsx-a11y/no-noninteractive-tabindex": ["error", {
        "tags": ["label"],
        "roles": ["tabpanel"],
        "allowExpressionValues": true
      }],
    "jsx-a11y/role-supports-aria-props": ["off"],
    "jsx-a11y/anchor-is-valid": ["error", {
        "components": ["Link"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["invalidHref","preferButton"]
      }],
    "max-classes-per-file": ["off"]
  }
}