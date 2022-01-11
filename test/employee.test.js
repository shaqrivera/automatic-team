const Employee = require('../lib/employee.js');

describe('Employee', () => {
        const name = 'Shaquille';
        const id = '325';
        const email = 'shaquille@email.com';
        const obj = new Employee(name, id, email);
    describe('Initialization', () => {
      it("should create an object with 'name', 'id', and 'email' properties set to the respective arguments provided when called with the 'new' keyword", () => {
        expect(obj).toEqual(expect.objectContaining({ name: 'Shaquille', id: '325', email: 'shaquille@email.com' }));
      });
    });
    describe('getName()', () => {
        it('should return the value of the property "name" from the Employee object', () => {
            expect(obj.getName()).toEqual('Shaquille');
        });
    });
    describe('getId()', () => {
        it('should return the value of the property "id" from the Employee object', () => {
            expect(obj.getId()).toEqual('325');
        });
    });
    describe('getEmail()', () => {
        it('should return the value of the property "email" from the Employee object', () => {
            expect(obj.getEmail()).toEqual('shaquille@email.com');
        });
    });
    describe('getRole()', () => {
        it('should return the value of the property "role" from the Employee object', () => {
            expect(obj.getRole()).toEqual('Employee');
        });
    });
  });
  