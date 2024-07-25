module.exports = {
  extends: ["expo", "prettier"],
  plugins: [
    "prettier",
    {
      endOfLine: "auto",
    },
  ],
  rules: {
    "prettier/prettier": "error",
  },
};
