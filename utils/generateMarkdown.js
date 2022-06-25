// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "![badge]";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.GitHubUser}

  ## Email
  ${data.Email}

  ## Project Name
  ${data.projectName}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${renderLicenseBadge(data)}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Questions}
`;
}

module.exports = generateMarkdown;
