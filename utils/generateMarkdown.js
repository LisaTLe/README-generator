// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "![Badge](https://img.shields.io/badge/license-passing-pink)";
}

renderLicenseBadge();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge](https://img.shields.io/badge/license-passing-pink)

  <h1> ${data.projectName} </h1>

  ## Description
  ${data.Description}

  ## Table of Contents:
    1. [projectName](#projectName)
    2. [Description](#Description)
    3. [GitHubUser](#GitHubUser)
    4. [Email](#Email)
    5. [Installation](#Installation)
    6. [Usage](#Usage)
    7. [License](#License)
    8. [Contributing](#Contributing)
    9. [Tests](#Tests)
    10. [Questions](#Questions)

  ## GitHub
  By: ${data.GitHubUser}

  ## Email
  Email: ${data.Email}

  ## Project Name
  ${data.projectName}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  This project is license under: ${data.license}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  If there are any questions regarding the project, please email the question(s) to this email: ${data.Email}.
  To see my more of my project or other projects, please visit my GitHub: https://github.com/${data.GitHubUser}
`;
}

module.exports = generateMarkdown;
