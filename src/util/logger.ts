
import chalk from 'chalk'

type LogType = string | unknown

export const loggerInfo = (str: LogType) => {
  console.log(chalk.green(`[INFO]： ${str}`));
}

export const loggerWarning = (str: LogType) => {
  console.log(chalk.yellowBright(`[WARRING]： ${str}`));
}

export const loggerSuccess = (str: LogType) => {
  console.log(chalk.greenBright(`[SUCCESS]： ${str}`));
}

export const loggerError = (str: LogType) => {
  console.log(chalk.redBright(`[ERROR]： ${str}`));
}

export const loggerTiming = (str: string = '', start: boolean = true) => {
  if (start) {
    console.time('Timing')
    console.log(chalk.cyan(`****** ${str} START ******`))
  } else {
    console.log(chalk.cyan(`****** ${str} END ******`))
    console.timeEnd('Timing')
  }
}
