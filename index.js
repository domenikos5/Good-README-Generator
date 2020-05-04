const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFilePromise = util.promisify(fs.writeFile);

const questions = [
  {
    name: 'username',
    message: "What's your GitHub username?",
  },
  {
    name: 'title',
    message: "What's the name of your project?",
  },
  {
    name: 'description',
    message: "What's the description of your project?",
  },
  {
    name: 'installation',
    message: "What's the installation instructions of your project?",
  },
  {
    name: 'usage',
    message: "What's the usage instructions of your project?",
  },
  {
    name: 'contributing',
    message: "What's your contributing guidelines?",
  },
  {
    name: 'tests',
    message: 'How is testing perform on this project?',
  },
  {
    type: 'list',
    name: 'license',
    message: "What's the license for this project?",
    choices: ['MIT', 'EPL2', 'GPLv3', 'BSD 3', 'Apache 2.0', 'None'],
  },
  {
    name: 'email',
    message: "What's your email contact for questions and feedback?",
  },
];

async function init() {
  console.log('Welcome to README Generator, Press the Enter key to begins.');
  const value = await inquirer.prompt(questions);
  const apiValue = await api.getUser(value.username);
  await writeFilePromise('README.md', generateMarkdown(Object.assign(apiValue, value)));
}


init();



console.error();
