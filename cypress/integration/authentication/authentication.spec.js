/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />

var user = require("../../fixtures/user.json");
context("Sign In Actions", () => {
    const baseUrl = Cypress.config().baseUrl;
    const serverUrl = Cypress.env("serverUrl");
  
     

    before(() => {
      // eslint-disable-next-line no-undef
      // cy.fixture('user').then(function (testdata) {
      //   this.testdata = testdata
      // })
      cy.viewport(1600, 1000);
      cy.clearLocalStorage();
      cy.visit("http://localhost:3000/login");
      cy.waitForReact();
    });
  
    beforeEach(() => {
      // cy.visit("http://localhost:3000/signin");
      cy.waitForReact();
    });
  
    it.only("should sign in", () => {

      cy.getById("username")
        .type("Adem", { delay: 100 })
        .should("have.value", "Adem");

        
      cy.getById("password")
        .type("pass1234", { delay: 100 })
        .should("have.value", "pass1234");
      // });
  
      // "should store the token in local storage"
      cy.getById("login_form").submit();
      cy.wait(5000);
      cy.getLocalStorageItem("currentUser").as("curentUser");
  
      cy.get("@curentUser").should("exist");
  
      // should go to dashbaord page"
      cy.url().should("eq", "http://localhost:3000/dashboard");
    });

it("should sign out", () => {
  // "should remove the token from local storage"
  cy.getById("logout_button").click();
  cy.wait(2000);

  cy.url().should("eq", "http://localhost:3000/");
});
it("should error for an invalid password for existing user", () => {
  cy.getById("username")
    .type("Adem", { delay: 100 })
    .should("have.value", "Adem");

  cy.getById("password")
    .type("incorrect-password", { delay: 100 })
    .should("have.value", "incorrect-password");
  // });

  // "should submit"
  cy.getById("login_form").submit();
  cy.wait(5000);

  // "should display error message"
  cy.getById("error-message").should("exist");
});
})
  

