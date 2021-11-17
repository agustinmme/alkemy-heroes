/// <reference types="Cypress"/>

import token from "../fixtures/token.json";
import { name, password } from "../fixtures/user.json";
// Agregar o eliminar only para ejecutar 1 o varios test...

describe("Login", () => {
  it("No login without user", () => {
    cy.visit("/");
    cy.get("#password").type(password);
    cy.get(".btn").click();
    cy.get("#emailError").contains("Enter your email / username");
  });

  it("No login without password", () => {
    cy.visit("/");
    cy.get("#email").type(name);
    cy.get(".btn").click();
    cy.get("#passwordError").contains("Enter your password");
  });

  it("No login error 500 ", () => {
    cy.intercept("challenge-react.alkemy.org", {
      statusCode: 500,
      body: { error: "Se rompio todo" },
    });
    cy.visit("/");
    cy.get("#email").type(name);
    cy.get("#password").type(password, { log: false });
    cy.contains("Se rompio todo");
    cy.wait(3000); //Delay visual.
  });

  it("Login", () => {
    cy.intercept("challenge-react.alkemy.org", {
      statusCode: 200,
      token,
    });
    cy.visit("/");
    cy.get("#email").type(name);
    cy.get("#password").type(password, { log: false });
  });
  it("Loguout", () => {
    window.localStorage.setItem(
      "LoggedAlkemyChallenge",
      JSON.stringify({
        email: "mailfalso240@gmail.com",
        token,
      })
    );
    cy.visit("/");
    cy.wait(1000);
    cy.get(".nav-item").click();
    cy.visit("/dash");
  });
});
