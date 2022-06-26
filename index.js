const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
const fileName = "README.md";

// const questions = () => {
inquirer
  .prompt([
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
      message: "Who were the contributers for this project?",
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
  ])
  .then((response) =>
    fs.writeFile(fileName, generate(response), (err) =>
      err
        ? console.error(err)
        : console.log("Success! Your README has been created!")
    )
  );

// const writeFile = (data) => {
//   fs.writeFile("README.md", data, (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     } else {
//       console.log("Success! Your README has been created!");
//     }
//   });
// };
// questions()
//   .then((response) => {
//     return generate(response);
//   })
//   .then((data) => {
//     return writeFile(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function writeToFile(fileName, data) {
//   const markdownFile = generate(data);
//   fs.writeFile(fileName, markdownFile, (err) =>
//     err
//       ? console.error(err)
//       : console.log("Success! Your README has been created!")
//   );
// }

// .then((response) => {
//   return fs.writeFile(fileName.join (process.cwd(), "README.md"),generate(response))
// })
