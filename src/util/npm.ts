
import latestVersion from 'latest-version';
import shelljs from 'shelljs'
import { loggerError, loggerInfo, loggerWarning } from '@/util';

const packageInfo = require('../../package.json');

const parseVersion = (ver: string) => {
  return Number(ver.split('.').toString())
}

export const checkVersion = async () => {
  const latestVer = await latestVersion('@react-spider-web/rsw-base-cli');
  if (parseVersion(latestVer) > parseVersion(packageInfo.version)) {
    loggerWarning(`The current version is the :  ${latestVer}`)
  } else {
    loggerInfo('The current version is the latest:')
  }
}

export const existNpm = async (packageName: string) => {
  try {
    const latestVer = await latestVersion(packageName);
    return latestVer
  } catch (error) {
    loggerError(error)
    process.exit(1)
  }
}

export const npmInstall = async (packageName: string) => {
  try {
    shelljs.exec(`yarn add ${packageName}`, { cwd: process.cwd() });
  } catch (error) {
    loggerError(error)
    process.exit(1)
  }
}
