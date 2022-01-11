const Intern = require('../lib/intern.js');

describe('Intern', () => {
    const name = 'Shaquille';
    const id = '325';
    const email = 'shaquille@email.com';
    const school = "School of Life";
    const obj = new Intern(name, id, email, school);
describe('Initialization', () => {
  it("should create an object with 'name', 'id', 'email', and 'school' properties set to the respective arguments provided when called with the 'new' keyword", () => {
    expect(obj).toEqual(expect.objectContaining({ name: 'Shaquille', id: '325', email: 'shaquille@email.com', school: 'School of Life' }));
  });
});
describe('getRole()', () => {
    it('should return the value "Intern" from the property "role" from the Intern object', () => {
        expect(obj.getRole()).toEqual('Intern');
    });
});
describe('getSchool()', () => {
    it('should return the value from the property "school" from the Intern object', () => {
        expect(obj.getSchool()).toEqual('School of Life');
    });
});
});