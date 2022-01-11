const Manager = require('../lib/manager.js');

describe('Manager', () => {
    const name = 'Shaquille';
    const id = '325';
    const email = 'shaquille@email.com';
    const office = "1";
    const obj = new Manager(name, id, email, office);
describe('Initialization', () => {
  it("should create an object with 'name', 'id', 'email', and 'office' properties set to the respective arguments provided when called with the 'new' keyword", () => {
    expect(obj).toEqual(expect.objectContaining({ name: 'Shaquille', id: '325', email: 'shaquille@email.com', office: '1' }));
  });
});
describe('getRole()', () => {
    it('should return the value "Manager" from the property "role" from the Manager object', () => {
        expect(obj.getRole()).toEqual('Manager');
    });
});
});
