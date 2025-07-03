/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err) => {
  if (err.message && err.message.includes("INVALID USER")) {
    return false;
  }

  return true;
});

Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("Cannot read properties of undefined") &&
    err.message.includes("password")
  ) {
    return false;
  }

  return true;
});
describe("Login Page Tests", () => {
  const url = "http://localhost:8080/";

  beforeEach(() => {
    cy.visit(url);
    cy.contains("div", "qa.code-quiz.dev").should("exist");
    cy.contains(
      "div",
      "If you do not have an account, contact an admin"
    ).should("exist");
  });

  it("Should display login form", () => {
    cy.get('input[placeholder="Enter Username"]').should("exist");
    cy.get('input[placeholder="password"]').should("exist");
    cy.get("button.sc-bZQynM.cGmBje").should("be.visible");
  });

  it("Login with valid username and password", () => {
    cy.get('input[placeholder="Enter Username"]').type("SomeUser_name");
    cy.get('input[placeholder="password"]').type("TopSecret1234!");
    cy.get("button.sc-bZQynM.cGmBje").click();
  });

  it("Login with invalid username and valid password", () => {
    cy.get('input[placeholder="Enter Username"]').type("WrongUser");
    cy.get('input[placeholder="password"]').type("TopSecret1234!");
    cy.get("button.sc-bZQynM.cGmBje").click();

    cy.get('input[placeholder="Enter Username"]').should("be.visible");
    cy.contains("Invalid username ").should("not.exist");
  });

  it("Login with valid username and invalid password", () => {
    cy.get('input[placeholder="Enter Username"]').type("SomeUser_name");
    cy.get('input[placeholder="password"]').type("WrongPassword");
    cy.get("button.sc-bZQynM.cGmBje").click();

    cy.get('input[placeholder="password"]').should("be.visible");
    cy.contains("Invalid password").should("not.exist");
  });

  it("Login with empty username and password", () => {
    cy.get('input[placeholder="Enter Username"]').should("exist");
    cy.get('input[placeholder="password"]').should("exist");
    cy.get("button.sc-bZQynM.cGmBje").click();

    cy.contains("username and password can not empty").should("not.exist");
  });

  it("Login with empty username and valid password", () => {
    cy.get('input[placeholder="password"]').type("TopSecret1234!");
    cy.get("button.sc-bZQynM.cGmBje").click();

    cy.contains("username can not empty").should("not.exist");
  });

  it("Login with valid username and empty password", () => {
    cy.get('input[placeholder="Enter Username"]').type("SomeUser_name");
    cy.get("button.sc-bZQynM.cGmBje").click();

    cy.contains("password can not empty").should("not.exist");
  });
});
