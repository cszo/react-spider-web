"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerError = exports.loggerSuccess = exports.loggerWarring = exports.loggerInfo = exports.loggerTiming = exports.getCwdPath = exports.getDirPath = void 0;
const path_1 = require("path");
const chalk_1 = __importDefault(require("chalk"));
// 项目本地路径
const getDirPath = (relPath = "") => {
    return (0, path_1.resolve)(__dirname, relPath);
};
exports.getDirPath = getDirPath;
// 获取运行路径
const getCwdPath = (relPath = "") => {
    return (0, path_1.resolve)(process.cwd(), relPath);
};
exports.getCwdPath = getCwdPath;
// 计时日志
const loggerTiming = (str = "", start = true) => {
    if (start) {
        console.time("Timing");
        console.log(chalk_1.default.cyan(`****** ${str} START ******`));
    }
    else {
        console.log(chalk_1.default.cyan(`****** ${str} END ******`));
        console.timeEnd("Timing");
    }
};
exports.loggerTiming = loggerTiming;
// 普通日志
const loggerInfo = (str = "") => {
    console.log(chalk_1.default.green(`[INFO]： ${str}`));
};
exports.loggerInfo = loggerInfo;
// 警告日志
const loggerWarring = (str = "") => {
    console.log(chalk_1.default.yellowBright(`[WARRING]： ${str}`));
};
exports.loggerWarring = loggerWarring;
// 成功日志
const loggerSuccess = (str = "") => {
    console.log(chalk_1.default.greenBright(`[SUCCESS]： ${str}`));
};
exports.loggerSuccess = loggerSuccess;
// 报错日志
const loggerError = (str = "") => {
    console.log(chalk_1.default.redBright(`[ERROR]： ${str}`));
};
exports.loggerError = loggerError;
