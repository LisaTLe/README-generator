const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
const fileName = "README.md";

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "gitHubUser",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the project name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "What is the project about? Give a brief discription.",
      name: "description",
    },
    {
      type: "input",
      message: "Describe the installation process for this project:",
      name: "installation",
    },
    {
      type: "input",
      message: "What is this project used for?",
      name: "usage",
    },
    {
      type: "list",
      message: "What licenses were used in this project?",
      name: "license",
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
      message: "Who were the contributers for this project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Provide tests for project with video:",
      name: "tests",
    },
    {
      type: "input",
      message: "What questions need to be answered for the project?",
      name: "questions",
    },
  ])
  .then((response) =>
    fs.writeFile(fileName, generate(response), (err) =>
      err
        ? console.error(err)
        : console.log("Success! Your README has been created!")
    )
  );
