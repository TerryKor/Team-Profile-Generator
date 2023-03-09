const Engineer = require("../lib/Engineer.js");
describe("engineer", () => {
    describe("initialization", () => {
      it("should return an object containing a 'email', 'name', 'id' ,'github' property when called with the 'new' keyword", () => {
        const engineer = new Engineer();
        expect("email" in engineer).toEqual(true);
        expect("name" in engineer).toEqual(true);
        expect("id" in engineer).toEqual(true);
        expect("gitHub" in engineer).toEqual(true);
        
      });
    });
    describe("getGitgub function", () => {
        it("should return engineer`s github", () => {
          const name = "Terry";
          const id = "2";
          const email = "engineer@mail.com";
          const github ="TerryKor"
          const obj = new Engineer(name, id, email,github);
          const result = obj.getGithub();
          expect(result).toEqual(github);
        });
        })
        describe("getRole function", () => {
            it("should return engineer`s role", () => {
              const name = "Terry";
              const id = "2";
              const email = "engineer@mail.com";
              const role = "Engineer"
              const obj = new Engineer(name, id, email, role);
              const result = obj.getRole();
              expect(result).toEqual(role);
            });
            })



});


