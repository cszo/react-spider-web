/*
 * @Author: Cookie
 * @Description: 模板相关
 */

import inquirer from '@/inquirer';

const { addTpl, selectTpl } = inquirer

/**
 * @description: 添加模板
 * @param {*}
 * @return {*}
 */
export const addTplCommand = {
  description: 'add template',
  command: 'add tpl',
  action: () => addTpl()
}


/**
* @description: 初始化模板
* @param {*}
* @return {*}
*/
export const selectTplCommand = {
  description: 'init template',
  command: 'init tpl',
  action: () => selectTpl()
}

export default [
  addTplCommand,
  selectTplCommand
]