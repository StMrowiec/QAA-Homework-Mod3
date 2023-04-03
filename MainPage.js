/// <reference types="cypress" />

import Login from './pages/Login';
import HomePage from './pages/HomePage';

describe('Test 1 - Logowanie i wylogowanie', () => {
  const loginPage = new Login();
  const homePage = new HomePage();

  it('Logowanie i wylogowanie', () => {
    loginPage.visit();
    loginPage.fillEmail('user888@gmail.com').fillPassword('1234567890');
    loginPage.submitForm();
    homePage.isLoggedIn();
    homePage.clickAvatar();
    homePage.clickLogout();
    homePage.isLoggedOut();
  });
});