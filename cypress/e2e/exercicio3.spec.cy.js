import  LoginPage  from '../pages/loginPage.js';
import dataUsers from '../fixtures/users/dataUsers.json';
import SignupPage from '../pages/signupPage.js';
import homePage from '../pages/homePage.js';

// Chance require
const Chance = require('chance')

// Chance instance
const chance = new Chance()

//Page Objects
const loginObj = new LoginPage();
const signupObj = new SignupPage();
const homeObj = new homePage();

// Test Suite
describe("login - RWA", () => {
  
  beforeEach(it("Login page access"),() => {
    loginObj.accessLoginPage();
  });

 describe('Visualizar histórico de transações', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    loginObj.loginWithAnyUser(
      dataUsers.userSucess.usernameValid, 
      dataUsers.userSucess.passwordValid
    );
    homeObj.clickMineTransactionsButton();
  });
});

});