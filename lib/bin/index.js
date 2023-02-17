#!/usr/bin/env node 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 这个必须添加，指定 node 运行环境
const commander_1 = require("commander");
const program = new commander_1.Command();
const eslint_1 = require("../eslint");
program
    .version("0.0.1")
    .description("start eslint and fix code")
    .command("eslint")
    .action(() => {
    (0, eslint_1.getEslint)();
});
program.parse(process.argv);
