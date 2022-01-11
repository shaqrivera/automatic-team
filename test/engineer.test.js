const Engineer = require('../lib/engineer.js');

describe('Engineer', () => {
    const name = 'Shaquille';
    const id = '325';
    const email = 'shaquille@email.com';
    const github = "shaqrivera";
    const obj = new Engineer(name, id, email, github);
describe('Initialization', () => {
  it("should create an object with 'name', 'id', 'email', and 'github' properties set to the respective arguments provided when called with the 'new' keyword", () => {
    expect(obj).toEqual(expect.objectContaining({ name: 'Shaquille', id: '325', email: 'shaquille@email.com', github: 'shaqrivera' }));
  });
});
describe('getRole()', () => {
    it('should return the value "Engineer" from the property "role" from the Engineer object', () => {
        expect(obj.getRole()).toEqual('Engineer');
    });
});
describe('getGithub()', () => {
    it('should return the value from the property "github" from the Engineer object', () => {
        expect(obj.getGithub()).toEqual('shaqrivera');
    });
});
});