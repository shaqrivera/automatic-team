const inquirer = require('inquirer');
const fs = require('fs');
const renderCards = require('./src/renderCards');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const employeesArray = [];

const questions = [{
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
},
{
    type: 'input',
    name: 'school',
    message: `Enter the intern's school`,
    when: (answers) =>{
        return answers.role === 'Intern'
    }
},
{
    type: 'input',
    name: 'github',
    message: `Enter the engineer's github`,
    when: (answers) =>{
        return answers.role === 'Engineer'
    }
},
{
    type: 'input',
    name: 'office',
    message: `Enter the manager's office number`,
    when: (answers) =>{
        return answers.role === 'Manager'
    }
},
{
    type: 'confirm',
    name: 'continue',
    message: 'Would you like to create another employee?',
    default: false
}
];


const newEmployeePrompt = () => inquirer.prompt(questions).then((answers)=>{
    if (answers.role === 'Intern'){
        let employee = new Intern(answers.name,answers.id,answers.email,answers.school);
        employeesArray.push(employee)
    }
    else if (answers.role === 'Engineer'){
        let employee = new Engineer(answers.name,answers.id,answers.email,answers.github);
        employeesArray.push(employee)
    }
    else{
        let employee = new Manager(answers.name,answers.id,answers.email,answers.office);
        employeesArray.push(employee)
    }
    if (answers.continue === true){
        return newEmployeePrompt()
    }
    else{
        return employeesArray
    }
}).then((employeesArray)=>{
    const cards = renderCards(employeesArray);
    console.log(cards);
    //fs.writeFile('cards.html', cards.toString(), (err) => {console.log(err)})
});
newEmployeePrompt();