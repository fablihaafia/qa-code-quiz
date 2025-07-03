const request = require("supertest");
const fs = require("fs");
const path = require("path");
const app = require("../index");

const ACCOUNT_FILE = path.resolve(__dirname, "../../storage/account.json");

beforeEach(() => {
  fs.mkdirSync(path.dirname(ACCOUNT_FILE), { recursive: true });
});

describe("API Testing", () => {
  const user = {
    username: "TestUser",
    name: "Test",
    password: "TopSecret1234",
    favouriteFruit: "some fruit",
    favouriteMovie: "The Room",
    favouriteNumber: "BN<1234>",
  };

  const existingUser = {
    username: "SomeUser_name",
    name: "SomeName",
    password: "TopSecret1234!",
    favouriteFruit: "some fruit",
    favouriteMovie: "The Room",
    favouriteNumber: "BN<1234>",
  };

  it("Get user list", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200); // ok
    expect(res.text).toBe("Backend API"); // ok
  });

  it("Create a new user", async () => {
    const res = await request(app).post("/user").send(user);
    expect(res.status).toBe(200); // ok
    expect(res.text).toBe("Account Created"); // ok
  });

  it("User should fail if already exists", async () => {
    await request(app).post("/user").send(existingUser);
    const res = await request(app).post("/user").send(existingUser);
    expect(res.status).toBe(409); // it should be 409, but API responding 200 status code.
    expect(res.text).toBe("Account Already Exists"); // ok.
  });

  it("User should update an existing user", async () => {
    await request(app).post("/user").send(user);
    const res = await request(app)
      .put("/user")
      .query({ username: user.username })
      .send({ ...user, favouriteMovie: "" });

    expect(res.status).toBe(200); // ok
    expect(res.text).toBe("Account Updated"); // ok
  });

  it("User should delete existing user", async () => {
    await request(app).post("/user").send(user);
    const res = await request(app)
      .delete("/user")
      .query({ username: user.username });
    expect(res.status).toBe(200); // ok
    expect(res.text).toBe("Account Deleted"); // ok
  });

  it("User should return 404 if user not found", async () => {
    const res = await request(app).delete("/user").query({ username: "ghost" });
    expect(res.status).toBe(404); // API should return 404, but always sending 200 status code.
    expect(res.text).toBe("Account Does Not Exist"); // ok
  });
});
