const Employee = require('./employee.js');
class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
        this.role = 'Manager';
    }

};

module.exports = Manager;