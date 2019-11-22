const request = require("supertest");
const server = require("../server");

///////////////////////////////SERVER STATUS////////////////////////////////////

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

////////////////////////////////AUTH ROUTES////////////////////////////////////

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

////////////////////////////////PARTY ROUTES////////////////////////////////////

describe("PARTY routes tests", () => {
  describe("POST /api/parties/", () => {
    /////unauth user, parties route tests//////

    it("returns a 401 if user attempts to post a party with no auth token", () => {
      request(server)
        .post("/api/parties/")
        .set("Authorization", "notavalidtoken")
        .send({})
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it("returns a 401 if user attempts to get all parties with no auth token", () => {
      request(server)
        .get("/api/parties/")
        .set("Authorization", "notavalidtoken")
        .send({})
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it("returns a 401 if user attempts to get a single party by id with no auth token", () => {
      request(server)
        .get("/api/parties/1")
        .set("Authorization", "notavalidtoken")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it("returns a 401 if user attempts to get a parties users(guests) with no auth token", () => {
      request(server)
        .get("/api/parties/users1")
        .set("Authorization", "notavalidtoken")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it("returns a 401 if user attempts to edit a party with no auth token", () => {
      request(server)
        .put("/api/parties/1")
        .set("Authorization", "notavalidtoken")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it("returns a 401 if user attempts to delete a party with no auth token", () => {
      request(server)
        .delete("/api/parties/1")
        .set("Authorization", "notavalidtoken")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    ///////Auth user, get tests///////

    //make sure to have a good token passed in
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwidXNlcm5hbWUiOiJ1c2VybmFtZTUiLCJpYXQiOjE1NzQyMTM2MTksImV4cCI6MTU3NDgxODQxOX0.8QUZ6tCsi9dxtBc5C7DG88zWzM9CV8BVpMSYJ4x9BKQ";

    it("returns a 200 if user attempts to get all parties", () => {
      request(server)
        .post("/api/parties/")
        .set("Authorization", token)
        .send({})
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("returns a 200 if user attempts to get a single party", () => {
      request(server)
        .post("/api/parties/")
        .set("Authorization", token)
        .send({})
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    ///////Auth user, bad info tests///////
    it("returns a 400 if user attempts to post a party with bad body data", () => {
      request(server)
        .post("/api/parties/")
        .set("Authorization", token)
        .send({})
        .then(res => {
          expect(res.status).toBe(400);
        });
    });

    it("returns a 404 if user attempts to get a single party by id with bad body data", () => {
      request(server)
        .get("/api/parties/3000")
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(404);
        });
    });

    it("returns a 404 if user attempts to get a parties users(guests) with bad body data", () => {
      request(server)
        .get("/api/parties/users/3000")
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(404);
        });
    });

    it("returns a 404 if user attempts to edit a party with bad id", () => {
      request(server)
        .put("/api/parties/3000")
        .set("Authorization", token)
        .send({})
        .then(res => {
          expect(res.status).toBe(404);
        });
    });

    it("returns a 404 if user attempts to delete a party with bad id", () => {
      request(server)
        .delete("/api/parties/3000")
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
  });
});
