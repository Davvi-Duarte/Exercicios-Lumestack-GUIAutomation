class LoginPage {
    selectorsList () {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton:"[data-test='signin-submit']",
            loginErrorMessage: "[data-test='signin-error']",
            singupButton: "[data-test='signup']",
            singInTile: "[.MuiTypography-h5]"
        };
        return selectors;
    };

    checkLoginPageTitle(){
        cy.get(this.selectorsList().singInTile).should('be.visible');
    }
    
    accessLoginPage(){
        return cy.visit('/singin');
    };

    loginWithAnyUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().loginButton).click();
    };

    openSingUpPage(){
        cy.get(this.selectorsList().singupButton).click();
    };

    checkInvalidLoginMessage(){
        cy.get(this.selectorsList().loginErrorMessage).should('be.visible');
    };
};

export default LoginPage;