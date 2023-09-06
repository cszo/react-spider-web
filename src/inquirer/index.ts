// https://github.com/SBoudrias/Inquirer.js
import * as git from './git';
import * as tpl from './tpl';
import * as registerPlugin from './registerPlugin';

export default {
  ...tpl,
  ...git,
  ...registerPlugin
}