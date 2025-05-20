import  LoginPage  from '../pages/loginPage.js';

const loginObj = new LoginPage();

describe("login - RWA", () => {
  
  it("login - Invalid", () => {
    loginObj.accessLoginPage();
    loginObj.loginWithAnyUser("invalidUser", "invalidPassword");
  });

});