import { readFile } from 'node:fs'
import process from 'node:process'
import { NodeSSH } from 'node-ssh'
import chalk from 'chalk'
import ora from 'ora'
import { handlePath } from './utils.js'

const cwd = process.cwd()

function linkServer() {
  const spinner = ora()
  const ssh = new NodeSSH()
  spinner.start(chalk.blue('正在获取配置信息'))
  readFile(handlePath(`${cwd}/deploy-config.json`), 'utf-8', (err, data) => {
    if (err) {
      spinner.fail(chalk.red('获取配置信息失败'))
      console.log(chalk.bgRed(err))
      spinner.clear()
      return
    }
    spinner.succeed('获取配置信息成功')
    const config = JSON.parse(data)
    spinner.start(chalk.blue('正在连接服务器'))
    ssh.connect({
      host: config.host ?? '',
      username: config.username ?? '',
      password: config.password ?? '',
      port: config.port ?? 22,
    }).then(async (nodeSSH) => {
      spinner.succeed('服务器连接成功')
      spinner.start(chalk.blue('开始删除文件'))
      const rmResult = await nodeSSH.execCommand(`rm -rf ${config.remoteFile}/*`)
      if (rmResult.stderr) {
        spinner.fail(chalk.red('文件删除失败'))
        console.log(chalk.bgRed(rmResult.stderr))
        nodeSSH.connection.destroy()
        return
      }
      spinner.succeed(chalk.green('文件删除成功'))
      spinner.start(chalk.blue('开始上传文件'))
      const putres = await nodeSSH.putDirectory(config.localFile, config.remoteFile)
      if (putres) {
        spinner.succeed(chalk.green('文件上传成功'))
      }
      else {
        spinner.fail(chalk.red('文件上传失败'))
        nodeSSH.connection.destroy()
        return
      }
      // spinner.start(chalk.blue('开始执行部署命令'))
      // const execResult = await nodeSSH.execCommand('pm2 restart blog-app-v2')
      // if (execResult.stderr) {
      //     spinner.fail(chalk.red('部署命令执行失败'))
      //     console.log(chalk.bgRed(execResult.stderr))
      // } else {
      //     spinner.succeed(chalk.green('部署命令执行成功'))
      // }
      nodeSSH.connection.destroy()
    }).catch((error) => {
      spinner.fail(chalk.red('服务器连接失败'))
      console.log(chalk.bgRed(error))
    }).finally(() => {
      spinner.clear()
    })
  })
}

linkServer()
