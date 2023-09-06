
import git from './git'
import tpl from './tpl'
import register from './register'
import build from './build'
import utils from './utils'

export default [
  ...git,
  ...tpl,
  ...register,
  ...build,
  ...utils
]