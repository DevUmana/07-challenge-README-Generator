// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      const mitBadge = `[![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      return mitBadge;
    case "Apache":
      const apacheBadge = `[![Apache license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      return apacheBadge;
    case "ISC":
      const iscBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      return iscBadge;
    case "BSD":
      const bsdBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      return bsdBadge;
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      const mitLink = `License Link: [MIT](https://opensource.org/licenses/MIT)`;
      return mitLink;
    case "Apache":
      const apacheLink = `License Link: [Apache](https://opensource.org/licenses/Apache-2.0)`;
      return apacheLink;
    case "ISC":
      const iscLink = `License Link: [ISC](https://opensource.org/licenses/ISC)`;
      return iscLink;
    case "BSD":
      const bsdLink = `License Link: [BSD](https://opensource.org/licenses/BSD-3-Clause)`;
      return bsdLink;
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      const mitLicense = `This application is licensed under the MIT license.`;
      return mitLicense;
    case "Apache":
      const apacheLicense = `This application is licensed under the Apache license.`;
      return apacheLicense;
    case "ISC":
      const iscLicense = `This application is licensed under the GPL license.`;
      return iscLicense;
    case "BSD":
      const bsdLicense = `This application is licensed under the BSD license.`;
      return bsdLicense;
    case "None":
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing

${data.contributing} 

## Tests

${data.tests}

## Questions

For any questions, please contact me using the information below:

GitHub: [${data.username}](https://github.com/${data.username})

Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
