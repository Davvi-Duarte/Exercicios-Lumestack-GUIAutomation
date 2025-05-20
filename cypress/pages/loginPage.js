class LoginPage {
    selectorsList () {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton:"[data-test='signin-submit']",
            loginErrorMessage: "[data-test='signin-error']"
        };
        return selectors;
    };
    
    accessLoginPage(){
        return cy.visit('/singin');
    };

    loginWithAnyUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }

    checkInvalidLoginMessage(){
        cy.get(this.selectorsList().loginErrorMessage).should('be.visible');
    }
};

export default LoginPage;