/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
describe("fundrasing navlink", () => {
    const baseUrl = Cypress.config().baseUrl;
    const serverUrl = Cypress.env("serverUrl");
  
    before(() => {
      // eslint-disable-next-line no-undef
      cy.viewport(1600, 1000);
      cy.clearLocalStorage();
      cy.visit("http://localhost:3000/login");
      cy.waitForReact();
    });
  
    beforeEach(() => {
      // cy.visit("http://localhost:3000/signin");
      cy.waitForReact();
    });


    it("checks if the admin can add Fundrasing", () => {
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
    // should go to dashbaord page"
    cy.url().should("eq", "http://localhost:3000/dashboard");
        cy.visit("http://localhost:3000/fundraising");
        //cy.get('a > .ant-btn > span').click();
       

        
    })
    it("checks if the admin can not  add tasks the field required is null", () => {
        cy.visit("http://localhost:3000/tasks");
        cy.get('a > .ant-btn > span').click();
        cy.get('#title').type('Help this person');
       
       cy.get('#task').type('thisnewtask');
   

        
    })
  })


    