const Employee = require("../lib/Employee.js");

describe("employee", () => {
  describe("initialization", () => {
    it("should return an object containing a 'email', 'name', 'id'  property when called with the 'new' keyword", () => {
      const employee = new Employee();

      expect("email" in employee).toEqual(true);
      expect("name" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
    });
    
    });
    describe("getName function", () => {
    it("should return employee`s name", () => {
      const name = "Terry";
      const id = "1";
      const email = "employee@mail.com";
      const obj = new Employee(name, id, email);
      const result = obj.getName();
      expect(result).toEqual(name);
    });
    })
    describe("getId function", () => {
    it("should return employee`s id", () => {
      const name = "Terry";
      const id = "1";
      const email = "employee@mail.com";
      const role = "employee";
      const obj = new Employee(name, id, email);
      const result = obj.getId();
      expect(result).toEqual(id);
    });
})
describe("getEmail function", () => {
    it("should return employee`s email", () => {
      const name = "Terry";
      const id = "1";
      const email = "employee@mail.com";
      const role = "employee";
      const obj = new Employee(name, id, email);
      const result = obj.getEmail();
      expect(result).toEqual(email);
    });
})
describe("getRole function", () => {
    it("should return employee`s role", () => {
      const name = "Terry";
      const id = "1";
      const email = "employee@mail.com";
      const role = "Employee";
      const obj = new Employee(name, id, email);
      const result = obj.getRole();
      expect(result).toEqual(role);
    });
  });
});
