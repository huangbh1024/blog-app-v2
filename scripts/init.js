import { writeFile } from 'node:fs'
import process from 'node:process'
import ora from 'ora'
import chalk from 'chalk'
import { handlePath } from './utils.js'

const cwd = process.cwd()

const config = {
  host: '',
  username: '',
  password: '',
  port: 22,
  localFile: handlePath(`${cwd}/.output`),
  remoteFile: '',
}

function createJSON() {
  const spinner = ora()
  const path = handlePath(`${cwd}/deploy-config.json`)
  spinner.succeed(chalk.green('开始创建配置文件'))
  writeFile(path, JSON.stringify(config), (error) => {
    if (error) {
      console.log(chalk.red(error))
      spinner.clear()
      return
    }
    spinner.succeed(chalk.green('配置文件创建完成'))
    spinner.clear()
  })
}

createJSON()
