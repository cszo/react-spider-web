#!/usr/bin/env node 
// 这个必须添加，指定 node 运行环境
import { Command } from "commander"
const program = new Command()

import { getEslint } from "../eslint"

program
  .version("0.0.1")
  .description("start eslint and fix code")
  .command("eslint")
  .action(() => {
    getEslint()
  })
program.parse(process.argv)
