describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})/// <reference types="cypress" />

describe("Profile Page", () => {
  const url = "http://localhost:8080/";
  beforeEach(() => {
    cy.visit(url);
    cy.get('input[placeholder="Enter Username"]').type("SomeUser_name");
    cy.get('input[placeholder="password"]').type("TopSecret1234!");
    cy.get("button.sc-bZQynM.cGmBje").click();
    cy.contains("Hello SomeName", { timeout: 10000 }).should("be.visible");
  });
  it("Verify after login redirect the profile page", () => {
    cy.contains("div", "Hello SomeName").should("be.visible");
  });
  it("Verify after login all information shows properly", () => {
    cy.contains("div", "Hello SomeName").should("be.visible");
    cy.contains("div", "Name").should("be.visible");
    cy.contains("div", "SomeName").should("be.visible");
    cy.contains("div", "Favourite Fruit").should("be.visible");
    cy.contains("div", "some fruit").should("be.visible");
    cy.contains("div", "Favourite Movie").should("be.visible");
    cy.contains("div", "The Room").should("be.visible");
    cy.contains("div", "Favourite Number").should("be.visible");
    cy.contains("div", "BN<1234>").should("be.visible");
  });

  it("Verify logout button visible", () => {
    cy.contains("LOGOUT").should("be.visible");
  });
  it("Verify logout button works properly", () => {
    cy.get("button.sc-bxivhb.fqCnAP").click();
  });

  it("Verify after click logout user log out  ", () => {
    cy.get("button.sc-bxivhb.fqCnAP").click();
  });

  it("Verify after log out redirect login page ", () => {
    cy.get("button.sc-bxivhb.fqCnAP").click();
    cy.contains("LOGIN").should("be.visible");
  });


  it("Verify after reload user stay loggedin", () => {
    cy.reload();
    cy.contains("Hello SomeName").should("be.visible");
  });
});
