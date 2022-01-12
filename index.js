const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/employee');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const employees = [];

const firstQuestions = [{
    type: 'input',
    name: 'name',
    message: `Enter the employee's name`
},
{
    type: 'input',
    name: 'id',
    message: `Enter the employee's id`
},
{
    type: 'input',
    name: 'email',
    message: `Enter the employee's email address`
},
{
    type: 'list',
    name: 'role',
    message: `Choose a role for the employee`,
    choices: ['Intern', 'Engineer', 'Manager']
}];
const internQuestion = [{
    type: 'input',
    name: 'school',
    message: `Enter the intern's school`
},
{
    type: 'confirm',
    name: 'continue',
    default: false
}];
const engineerQuestion = [{
    type: 'input',
    name: 'github',
    message: `Enter the engineer's github`
},
{
    type: 'confirm',
    name: 'continue',
    default: false
}];
const managerQuestion = [{
    type: 'input',
    name: 'office',
    message: `Enter the manager's office number`
},
{
    type: 'confirm',
    name: 'continue',
    default: false
}];


const newEmployeePrompt = () => inquirer.prompt(firstQuestions).then(
    (answers) => {
      if (answers.role === 'Intern'){
        inquirer.prompt(internQuestion).then((internAnswer) => {
            let newIntern = new Intern(answers.name, answers.id, answers.email, internAnswer.school);
            employees.push(newIntern);
            if (internAnswer.continue === true){
                newEmployeePrompt()
            }
            else{
                return
            };
        });
      }
      else if (answers.role === 'Engineer'){
        inquirer.prompt(engineerQuestion)
        .then((engineerAnswer) => {
            let newEngineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswer.github);
            employees.push(newEngineer);
            if (engineerAnswer.continue === true){
                newEmployeePrompt()
            }
            else{
                return
            };
        });
      }
      else{
          inquirer.prompt(managerQuestion)
          .then((managerAnswer) => {
            let newManager = new Manager(answers.name, answers.id, answers.email, managerAnswer.office);
            employees.push(newManager);
            if (managerAnswer.continue === true){
                newEmployeePrompt()
            }
            else{
                return
            };
        });
      }
    }
);
newEmployeePrompt();
