const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
const fileName = "README.md";

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHubUser",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "Email",
    },
    {
      type: "input",
      message: "What is the project name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "What is the project about? Give a brief discription.",
      name: "Description",
    },
    {
      type: "input",
      message: "Describe the installation process for this project:",
      name: "Installation",
    },
    {
      type: "input",
      message: "What is this project used for?",
      name: "Usage",
    },
    {
      type: "list",
      message: "What licenses were used in this project?",
      name: "License",
      choices: [
        "Apache 2.0",
        "BSD 3-Clause",
        "BSD 2-Clause",
        "GNU General",
        "GNU Library",
        "MIT",
        "Mozilla 2.0",
        "Common Development and Distribution",
        "Eclipse 2.0",
      ],
    },
    {
      type: "input",
      message: "Who were there contributers for this project?",
      name: "Contributing",
    },
    {
      type: "input",
      message: "Provide tests for project with video:",
      name: "Tests",
    },
    {
      type: "input",
      message: "What questions need to be answered for the project?",
      name: "Questions",
    },
  ]);
};

function writeToFile(fileName, data) {
  const markdownFile = generate(data);
  fs.writeFile(fileName, markdownFile, (err) =>
    err
      ? console.error(err)
      : console.log("Success! Your README has been created!")
  );
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile(fileName, data);
  });
}

init();
