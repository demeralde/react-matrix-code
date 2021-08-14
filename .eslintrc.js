module.exports = {
  root: true,
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    extensions: [".ts", ".tsx", ".js"],
    react: {
      version: "detect",
    },
    "import/extensions": [".ts", ".tsx", ".js"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/core-modules": ["react", "prop-types", "config"],
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".ts", ".tsx", ".js", ".css", ".png", ".jpg", ".svg"],
        paths: ["src"],
      },
    },
  },
  rules: {
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
  },
  overrides: [
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      env: {
        browser: true,
      },
    },
    {
      files: ["jest.config.js", "lint-staged.config.js", ".huskyrc.js"],
      env: {
        node: true,
      },
    },
    {
      files: ["*.test.ts", "*.test.tsx", "src/__mocks__/*.ts", "src/jest.setup.tsx"],
      env: {
        jest: true,
      },
      rules: {
        "react/destructuring-assignment": 0,
        "@typescript-eslint/ban-types": "off",
      },
    },
    {
      files: ["jest.preprocess.js", "src/jest.setup.tsx", "*.test.ts", "*.test.tsx"],
      env: {
        jest: true,
      },
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: true,
          },
        ],
      },
    },
    {
      files: ["jest.preprocess.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0,
      },
    },
  ],
};
