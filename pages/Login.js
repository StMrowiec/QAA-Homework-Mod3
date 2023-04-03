/// <reference types="cypress" />

class Login {
  visit() {
    cy.visit('https://www.edu.goit.global/account/login');
  }

  fillEmail(value) {
    const field = cy.get('#user_email');
    field.clear();
    field.type(value);
  }

  fillPassword(value) {
    const field = cy.get('#user_password');
    field.clear();
    field.type(value);
  }

  submitForm() {
    const button = cy.contains('Log In');
    button.click();
  }
}

export default Login;