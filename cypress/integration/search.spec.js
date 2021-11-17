/// <reference types="Cypress"/>
import { token } from "../fixtures/token.json";
// agregar o eliminar only para ejecutar 1 o varios test...
describe("Search", () => {
  it("Search and add new hero", () => {
    window.localStorage.setItem(
      "LoggedAlkemyChallenge",
      JSON.stringify({
        email: "mailfalso240@gmail.com",
        token,
      })
    );

    cy.visit("/dash");
    cy.get(".btn").contains("add Hero").click();
    cy.get(".search-icon");
    cy.get('[data-test-id="searchHeroInput"]').type("batman{enter}");
    cy.wait(1500); //Delay visual
    cy.get(".heroes > :nth-child(2)")
      .find(".btn")
      .click({ scrollBehavior: "center" });
  });
  it("Search and not found", () => {
    window.localStorage.setItem(
      "LoggedAlkemyChallenge",
      JSON.stringify({
        email: "mailfalso240@gmail.com",
        token,
      })
    );

    cy.visit("/dash");
    cy.get(".btn").contains("add Hero").click();
    cy.get(".search-icon");
    cy.get('[data-test-id="searchHeroInput"]').type("dsaadsdadassa{enter}");
    cy.contains('There are no Heroes that match your search.');
  });
});
