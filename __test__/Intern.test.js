const Intern = require("../lib/Intern.js");
describe("intern", () => {
  describe("initialization", () => {
    it("should return an object containing a 'email', 'name', 'id' ,'school' property when called with the 'new' keyword", () => {
      const intern = new Intern();
      expect("email" in intern).toEqual(true);
      expect("name" in intern).toEqual(true);
      expect("id" in intern).toEqual(true);
      expect("school" in intern).toEqual(true);
    });
  });
  describe("getSchool function", () => {
    it("should return interns`s school", () => {
      const name = "Terry";
      const id = "3";
      const email = "intern@mail.com";
      const school = "UofT";
      const obj = new Intern(name, id, email, school);
      const result = obj.getSchool();
      expect(result).toEqual(school);
    });
  });
  describe("getRole function", () => {
    it("should return intern`s role", () => {
      const name = "Terry";
      const id = "3";
      const email = "intern@mail.com";
      const role = "Intern";
      const obj = new Intern(name, id, email, role);
      const result = obj.getRole();
      expect(result).toEqual(role);
    });
  });
});
