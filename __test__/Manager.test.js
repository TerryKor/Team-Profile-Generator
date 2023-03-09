const Manager = require("../lib/Manager");
describe("manager", () => {
  describe("initialization", () => {
    it("should return an object containing a 'email', 'name', 'id' ,'office number' property when called with the 'new' keyword", () => {
      const manager = new Manager();
      expect("email" in manager).toEqual(true);
      expect("name" in manager).toEqual(true);
      expect("id" in manager).toEqual(true);
      expect("officeNumber" in manager).toEqual(true);
    });
  });
  describe("getOfficeNumber function", () => {
    it("should return managers`s office number", () => {
      const name = "Terry";
      const id = "4";
      const email = "manager@mail.com";
      const officeNumber = "123";
      const obj = new Manager(name, id, email, officeNumber);
      const result = obj.getOfficeNumber();
      expect(result).toEqual(officeNumber);
    });
  });
  describe("getRole function", () => {
    it("should return manager`s role", () => {
      const name = "Terry";
      const id = "4";
      const email = "manager@mail.com";
      const role = "Manager";
      const obj = new Manager(name, id, email, role);
      const result = obj.getRole();
      expect(result).toEqual(role);
    });
  });
});
