/// <reference types="Cypress"/>
import { token } from "../fixtures/token.json";
// agregar o eliminar only para ejecutar 1 o varios test...
describe("Details", () => {
  it.only("Go to details and back to home", () => {
    const myHeroesTeam = JSON.parse(
      window.localStorage.getItem("storageAlkemyChallenge")
    ) || [69, 1];
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
      .find(".btn-dark")
      .click({ scrollBehavior: "center" });
    cy.wait(1500);  //Delay visual
    cy.get(".btn").click({ scrollBehavior: "center" });
  });
});
