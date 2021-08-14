module.exports = {
  "*.{ts,tsx,js}": [
    "prettier --write",
    "eslint -c .eslintrc.js --fix",
    "jest --bail --findRelatedTests",
  ],
  "*.md": ["remark -u preset-lint-recommended"],
};
