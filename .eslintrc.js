module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "no-use-before-define": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-no-useless-fragment": "warn",
    "no-alert": "off",
    "no-shadow": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "eslint no-empty-function": "off",
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
