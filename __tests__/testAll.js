const request = require("supertest");
const server = require("../server");

///////SERVER STATUS/////////
describe("Server Status Test", () => {
  describe("GET /", () => {
    it("should return 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return The Party Planner server is running!!", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.status).toBe("The Party Planner server is running!!");
        });
    });
  });
});

///////Auth Routes/////////

describe("AUTH routes tests", () => {
  describe("POST /api/auth/", () => {
    /////register tests//////
    it("returns a 400 from /register when there is missing data in the body", () => {
      request(server)
        .post("/api/auth/register")
        .send({})
        .then(res => {
          expect(res.status).toBe(400);
        });
    });

    it("should provide message about including first_name", () => {
      return request(server)
        .post("/api/auth/register")
        .send({})
        .then(res => {
          expect(res.body.error).toMatch(/first_name/i);
        });
    });
    it("should provide message about including last_name", () => {
      return request(server)
        .post("/api/auth/register")
        .send({})
        .then(res => {
          expect(res.body.error).toMatch(/last_name/i);
        });
    });

    it("should provide message about including username", () => {
      return request(server)
        .post("/api/auth/register")
        .send({})
        .then(res => {
          expect(res.body.error).toMatch(/username/i);
        });
    });
    it("should provide message about including password", () => {
      return request(server)
        .post("/api/auth/register")
        .send({})
        .then(res => {
          expect(res.body.error).toMatch(/password/i);
        });
    });

    ///////login tests///////
    it("should return 400 from /login when a username and/or password is missing from the body", () => {
      return request(server)
        .post("/api/auth/login")
        .send({})
        .then(res => {
          expect(res.status).toBe(400);
        });
    });
    it("should provide message about including username", () => {
      return request(server)
        .post("/api/auth/login")
        .send({})
        .then(res => {
          expect(res.body.error).toMatch(/username/i);
        });
    });
    it("should provide message about including password", () => {
      return request(server)
        .post("/api/auth/login")
        .send({})
        .then(res => {
          expect(res.body.error).toMatch(/password/i);
        });
    });
  });
});

///////Party Routes/////////
