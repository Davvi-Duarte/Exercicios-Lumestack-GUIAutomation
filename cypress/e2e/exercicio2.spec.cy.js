import LoginPage from '../pages/loginPage.js';
import dataUsers from '../fixtures/users/dataUsers.json';
import HomePage from '../pages/homePage.js';
import TransactionPage from '../pages/transactionPage.js';

const loginObj = new LoginPage();
const homePageObj = new HomePage();
const transactionPageObj = new TransactionPage();

// Test Suite
describe("Transaction Routes - RWA", () => {
  
  beforeEach(() => {
    loginObj.accessLoginPage();
    
  });

  it("Register a bank info from new users", () => {
    loginObj.loginWithAnyUser(
      dataUsers.userSucess.usernameValid, 
      dataUsers.userSucess.passwordValid
    );
    homePageObj.clickNextButtonHomePage();
    homePageObj.submitAnyBankInfo(
      dataUsers.userSucess.bankNameUserValid,
      dataUsers.userSucess.routingNumberBankUserValid,
      dataUsers.userSucess.accountNumberUserValid
    );
  });
  
  it("Transaction having enough founds ", () => {
    loginObj.loginWithAnyUser(
      dataUsers.userSucess.usernameValid, 
      dataUsers.userSucess.passwordValid
    );
    homePageObj.clickCreateNewTransationButton();
    transactionPageObj.checkBalanceField();
    transactionPageObj.checkBalanceFieldEnoughFounds();
    transactionPageObj.newTransactionWithOtherUser();
    transactionPageObj.checkBalanceFieldValue('$-100.00');
  });

  it("Transaction having enough founds ", () => {
    loginObj.loginWithAnyUser(
      "Heath93","$2a$10$nSaCsTPTtbbPTnFXBH0GZu0ExpNMud3d1IuKOC/6a9gwAHkdhppeu" 
    );
    homePageObj.clickCreateNewTransationButton();
    transactionPageObj.newTransactionWithOtherUser();
  });
});
