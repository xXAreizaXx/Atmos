module.exports = {
    extends: ["expo", "prettier"],
    plugins: ["prettier"],
    rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": "off",
        "react-hooks/exhaustive-deps": "off",
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
    ignorePatterns: ["/dist/*"],
};
