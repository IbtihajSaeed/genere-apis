const supertest=require('supertest');
const test_config =require("../config/test.config.js");
const request = supertest(test_config.SERVER_URL);
const chai=require('chai');
const expect=chai.expect;
const genereBody = {
    "name":"test",
    "description": "test",
};
//please run project first and then run test
describe("Genere Unit Tests", () => {
    describe("Save Genere", function () {
      it("should successfully add a genere if all required fields are provided", async () =>  {
        const result = await request.post("genere").send(genereBody);
        expect(result.statusCode).equal(200);
      });
      it("should throw an error if any required field is missing", async () => {
        const result = await request.post("genere").send(genereBody).catch((error) => {
          expect(error.message).to.equal("required fields missing")
        });
      });
    });
    describe("get Genere", function () {
      it("should successfully get all generes", async () =>  {
        const result = await request.get("genere");
        expect(result.statusCode).equal(200);
      });
      
    });
  });