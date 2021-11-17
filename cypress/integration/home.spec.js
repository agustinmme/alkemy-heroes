/// <reference types="Cypress"/>
import { token } from "../fixtures/token.json";

// agregar o eliminar only para ejecutar 1 o varios test...
describe("Home", () => {
  it("Home without heroes", () => {
    window.localStorage.setItem(
      "LoggedAlkemyChallenge",
      JSON.stringify({
        email: "mailfalso240@gmail.com",
        token,
      })
    );
    cy.visit("/dash");
    cy.get(".blockquote").contains("Hi 👋, look for your heroes in ADD HERO");

  });

  it("Home with heroes", () => {
    const myHeroesTeam = JSON.parse(
      window.localStorage.getItem("storageAlkemyChallenge")
    ) || [69, 20];
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
    cy.get('[data-test-id="hero"]').should("have.length", 2);
  });

  it("Home delete first Hero", () => {
    const myHeroesTeam = JSON.parse(
      window.localStorage.getItem("storageAlkemyChallenge")
    ) || [69, 20];
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
    cy.wait(1500);  //Delay visual
    cy.get(":nth-child(1) > .card")
      .find(".btn-danger.text-uppercase")
      .click({ scrollBehavior: "center" });
    cy.wait(500); //Delay visual
    cy.get("#id69 > .modal-dialog > .modal-content")
      .find(".btn-danger")
      .click();
  });
});
