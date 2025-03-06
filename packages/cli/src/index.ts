#!/usr/bin/env node
import { add, subtract } from '@lrpnpm/core'
import chalk from 'chalk'
import { Command } from 'commander'
const program = new Command()

program.name('math cli').description('数学计算命令行工具').version('0.0.1')

program
  .command('add')
  .description('加法')
  .argument('<number>', '第一个数字')
  .argument('<number>', '第二个数字')
  .action((a: string, b: string) => {
    console.log(chalk.green(add(+a, +b)))
  })

program
  .command('subtract')
  .description('减法')
  .argument('a', '第一个数字')
  .argument('b', '第二个数字')
  .action((a: string, b: string) => {
    console.log(chalk.cyan(subtract(+a, +b)))
  })

program.parse()
