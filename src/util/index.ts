import { resolve } from 'path'

export const getDirPath = (relPath: string = '') => {
  return resolve(__dirname, relPath)
}

export const getCwdPath = (relPath: string = '') => {
  return resolve(process.cwd(), relPath)
}

export { loggerSuccess, loggerTiming, loggerError, loggerInfo, loggerWarning } from './logger'