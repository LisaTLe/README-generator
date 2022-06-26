// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "![Badge](https://img.shields.io/badge/license-${license}-pink)";
}

// renderLicenseBadge();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge](https://img.shields.io/badge/license-passing-pink)

  <h1> ${data.projectName} </h1>

  ## Description
  ${data.description}

  ## Table of Contents:
  1. [Project Name](#project-name)
  2. [Description](#description)
  3. [GitHub Username](#github)
  4. [Email](#email)
  5. [Installation](#installation)
  6. [Usage](#usage)
  7. [License](#license)
  8. [Contributing](#contributing)
  9. [Tests](#tests)
  10. [Questions](#questions)

  ## GitHub
  Username: ${data.gitHubUser}

  ## Email
  Email: ${data.email}

  ## Project Name
  ${data.projectName}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is license under ${data.license}.

  ${renderLicenseBadge(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If there are any questions regarding the project, please email the question(s) to this email: ${
    data.email
  }.
  To see my more of my project or other projects, please visit my GitHub: https://github.com/${
    data.gitHubUser
  }
`;
}

module.exports = generateMarkdown;
