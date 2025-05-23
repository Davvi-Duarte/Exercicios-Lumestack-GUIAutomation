import  LoginPage  from '../pages/loginPage.js';
import dataUsers from '../fixtures/users/dataUsers.json';
import HomePage from '../pages/homePage.js';


const loginObj = new LoginPage();
const homePageObj = new HomePage();

// Test Suite
describe("Trasation Routes - RWA", () => {
  
  beforeEach(() => {
    loginObj.accessLoginPage();
    loginObj.loginWithAnyUser(dataUsers.userSucess.usernameValid, dataUsers.userSucess.passwordValid);
});

  it("Register a bank info from new users", () => {
    homePageObj.clickNextButtonHomePage();
    homePageObj.submitAnyBankInfo(dataUsers.userSucess.bankNameUserValid, dataUsers.userSucess.routingNumberBankUserValid, dataUsers.userSucess.accountNumberUserValid
    );
  });
  
  it("Trasation - sucess"), () => {
    homePageObj.clickCreateNewTransationButton();
  }

});
