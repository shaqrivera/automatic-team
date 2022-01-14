const inquirer = require('inquirer');
const fs = require('fs');
const renderCards = require('./src/renderCards');
const renderHtml = require('./src/renderHtml');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const { runInNewContext } = require('vm');
const employeesArray = [];

const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: `Enter the manager's name`
},
{
    type: 'input',
    name: 'id',
    message: `Enter the manager's id`
},
{
    type: 'input',
    name: 'email',
    message: `Enter the manager's email address`
},
{
    type: 'input',
    name: 'office',
    message: `Enter the manager's office number`
},
{
    type: 'confirm',
    name: 'continue',
    message: 'Would you like to create another employee?',
    default: false
}
]

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
    choices: ['Intern', 'Engineer']
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
    type: 'confirm',
    name: 'continue',
    message: 'Would you like to create another employee?',
    default: false
}
];

const newManagerPrompt = () => inquirer.prompt(managerQuestions)
.then((answers) =>{
    let manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    employeesArray.push(manager);
    if (answers.continue === true){
        newEmployeePrompt()
    }
    else{
    const cards = renderCards(employeesArray);
    const html = renderHtml(cards);
    
    fs.writeFile('./dist/autoPage.html', html, (err) => {if (err){console.log(err)} else {console.log('File successfully written to the "dist" directory')}})
    }
})


const newEmployeePrompt = () => inquirer.prompt(questions).then((answers)=>{
    if (answers.role === 'Intern'){
        let employee = new Intern(answers.name,answers.id,answers.email,answers.school);
        employeesArray.push(employee)
    }
    else if (answers.role === 'Engineer'){
        let employee = new Engineer(answers.name,answers.id,answers.email,answers.github);
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
    const html = renderHtml(cards);
    
    fs.writeFile('./dist/autoPage.html', html, (err) => {if (err){console.log(err)} else {console.log('File successfully written to the "dist" directory')}})
});
newManagerPrompt();
