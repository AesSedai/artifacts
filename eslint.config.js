import tseslint from "typescript-eslint"
import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        ignores: [".yarn/", "src/api/"]
    },
    {
        rules: {
            "no-void": "off",
            "tseslint/no-dynamic-delete": "off",
            "tseslint/no-non-null-assertion": "off",
            "tseslint/no-unused-vars": "off",
            "tseslint/restrict-template-expressions": "off"
        }
    }
)
