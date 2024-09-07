import tseslint, { configs } from "typescript-eslint"
import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import unusedImports from "eslint-plugin-unused-imports"
import pluginPromise from "eslint-plugin-promise"
import eslintPluginImportX from "eslint-plugin-import-x"

export default tseslint.config(
    js.configs.recommended,
    ...configs.recommended,
    eslintConfigPrettier,
    pluginPromise.configs["flat/recommended"],
    eslintPluginImportX.flatConfigs.recommended,
    eslintPluginImportX.flatConfigs.typescript,
    {
        plugins: { "unused-imports": unusedImports }
    },
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
