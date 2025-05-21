import  LoginPage  from '../pages/loginPage.js';
import dataUsers from '../fixtures/users/dataUsers.json';
import SignupPage from '../pages/signupPage.js';

// Chance require
const Chance = require('chance')

// Chance instance
const chance = new Chance()

//Page Objects
const loginObj = new LoginPage();
const signupObj = new SignupPage();

// Test Suite
describe("login - RWA", () => {
  
  beforeEach(it("Login page access"),() => {
    loginObj.accessLoginPage();
  });

  it("login - Invalid", () => {
    loginObj.loginWithAnyUser(chance.string(), chance.string());
    loginObj.checkInvalidLoginMessage();
  });

  it("login - valid", () => {
    loginObj.loginWithAnyUser(dataUsers.userSucess.usernameValid, dataUsers.userSucess.passwordValid);
  });

  it("singUp a valid user", () => {
    loginObj.openSingUpPage();
    signupObj.checkSignupPageTitle();
    signupObj.singUpWithAnyUser(chance.first(), chance.last(), chance.prefix()+" Test",dataUsers.passwordDefault, dataUsers.passwordDefault);  
    cy.url().should('equals', Cypress.config().baseUrl + '/signin');
  })

  it("singUp - Invalid/incomplete fields (Text Helper Test)", () => {
    loginObj.openSingUpPage();
    signupObj.checkSignupPageTitle();
    signupObj.testFirstnameFieldRequired();
    signupObj.testLastnameFieldRequired();
    signupObj.testUsernameFieldRequired();
    signupObj.testPasswordFieldRequired();
    signupObj.testConfirmPasswordFieldRequired();
    });

});