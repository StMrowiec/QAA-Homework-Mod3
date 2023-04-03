/// <reference types="cypress" />

class HomePage {
  visit() {
    cy.visit('/');
  }

  clickAvatar() {
    const avatar = cy.get('.header-user-avatar');
    avatar.click();
  }

  clickLogout() {
    const logout = cy.get('.header-menu').contains('Log out');
    logout.click();
  }

  isLoggedIn() {
    return cy.get('.header-user-avatar').should('be.visible');
  }

  isLoggedOut() {
    return cy.url().should('include', '/account/login');
  }
}

export default HomePage;