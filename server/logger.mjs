// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk';

export default {
  error(...args) {
    console.log(chalk.red(...args));
  },
  warn(...args) {
    console.log(chalk.yellow(...args));
  },
  info(...args) {
    console.log(chalk.cyan(...args));
  },
  success(...args) {
    console.log(chalk.green(...args));
  },
};
