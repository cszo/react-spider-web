"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEslint = void 0;
const eslint_1 = require("eslint");
const utils_1 = require("../utils");
const ora_1 = __importDefault(require("ora"));
// 1. Create an instance.
const eslint = new eslint_1.ESLint({
    fix: true,
    extensions: [".js", ".ts"],
    useEslintrc: false,
    overrideConfig: {
        env: {
            browser: true,
            es2021: true,
        },
        parser: require.resolve("@typescript-eslint/parser"),
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 12,
            sourceType: "module",
        },
        plugins: ["react", "@typescript-eslint"],
    },
    resolvePluginsRelativeTo: (0, utils_1.getDirPath)("node_modules"),
});
const getEslint = (path = "src") => __awaiter(void 0, void 0, void 0, function* () {
    const spinner = (0, ora_1.default)("checking...");
    try {
        (0, utils_1.loggerTiming)("ESLINT CHECK");
        spinner.start();
        // 2. Lint files.
        const results = yield eslint.lintFiles([(0, utils_1.getCwdPath)(path)]);
        // 3. Modify the files with the fixed code.
        yield eslint_1.ESLint.outputFixes(results);
        // 4. Format the results.
        const formatter = yield eslint.loadFormatter("stylish");
        const resultText = formatter.format(results);
        // 5. Output it.
        if (resultText) {
            (0, utils_1.loggerError)(`'PLEASE CHECK ===》', ${resultText}`);
        }
        else {
            spinner.succeed("Eslint CHECK SUCCESS!");
            // loggerSuccess('Eslint check completed!');
        }
    }
    catch (error) {
        spinner.fail("ESLINT CHECK FAILED!");
        (0, utils_1.loggerError)(error);
        process.exit(1);
    }
    finally {
        (0, utils_1.loggerTiming)("ESLINT CHECK", false);
    }
});
exports.getEslint = getEslint;
