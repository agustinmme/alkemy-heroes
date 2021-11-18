/// <reference types="Cypress"/>
import { token } from "../fixtures/token.json";
// agregar o eliminar only para ejecutar 1 o varios test...
describe("Search", () => {
  it("Search and Add new hero", () => {
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
    cy.get('.row > :nth-child(1)')
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

  it("Show error and do not add error", () => {
    const myHeroesTeam = JSON.parse(
      window.localStorage.getItem("storageAlkemyChallenge")
    ) || [69];
    const heroesArrayJSON = JSON.stringify(myHeroesTeam);
    window.localStorage.setItem("storageAlkemyChallenge", heroesArrayJSON);
    window.localStorage.setItem(
      "LoggedAlkemyChallenge",
      JSON.stringify({
        email: "mailfalso240@gmail.com",
        token,
      })
    );

    cy.visit("/dash");
    cy.wait(1500); //Delay visual
    cy.get(".btn").contains("add Hero").click({ scrollBehavior: "center" });
    cy.get(".search-icon");
    cy.get('[data-test-id="searchHeroInput"]').type("batman{enter}");
    cy.wait(1500); //Delay visual
    cy.get('.row > :nth-child(1)')
      .find(".btn")
      .click({ scrollBehavior: "center" });
      cy.wait(500); //Delay visual
    cy.get('.swal-button').click({ scrollBehavior: "center" });
    cy.get('.img-logo2').click({ scrollBehavior: "center" });
    cy.get('.container > :nth-child(3)').should('have.length', 1);
  });

});
