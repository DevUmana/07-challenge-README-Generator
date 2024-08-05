// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import colors from "colors";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = await inquirer.prompt([
  {
    type: "input",
    message: colors.brightMagenta("What is your project title?"),
    name: "title",
  },
  {
    type: "input",
    message: colors.brightMagenta(
      "Please write a short description of your project:"
    ),
    name: "description",
  },
  {
    type: "input",
    message: colors.brightMagenta(
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:"
    ),
    name: "installation",
  },
  {
    type: "input",
    message: colors.brightMagenta("Provide instructions and examples for use:"),
    name: "usage",
  },
  {
    type: "input",
    message: colors.brightMagenta(
      "Please provide guidelines on how other developers can contribute to your project:"
    ),
    name: "contributing",
  },
  {
    type: "input",
    message: colors.brightMagenta(
      "If your project has tests, provide examples on how to run them:"
    ),
    name: "tests",
  },
  {
    type: "list",
    message: colors.brightMagenta(
      "If your project has a license, please provide the name of the license:"
    ),
    name: "license",
    choices: ["MIT", "Apache", "ISC", "BSD", "None"],
  },
  {
    type: "input",
    message: colors.brightMagenta("What is your GitHub username?"),
    name: "username",
  },
  {
    type: "input",
    message: colors.brightMagenta("What is your email address?"),
    name: "email",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  const data = generateMarkdown(questions);
  const fileName = "./out/README.md";
  writeToFile(fileName, data);
}

// Function call to initialize app
init();
