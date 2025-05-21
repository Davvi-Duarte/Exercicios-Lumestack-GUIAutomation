class SignupPage {
    selectorsList () {
        const selectors = {
            firstnameField: "[name='firstName']",
            lastnameField: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            signupSubmitButton: "[data-test='signup-submit']",
            signupPageTitle: "[data-test='signup-title']",
            firstnameHelpText: "#firstName-helper-text",
            lastnameHelpText: "#lastName-helper-text",
            usernameHelpText: "#username-helper-text",
            passwordHelpText: "#password-helper-text",
            confirmPasswordHelpText: "#confirmPassword-helper-text",
        };
        return selectors;
    };

    checkSignupPageTitle(){
        cy.get(this.selectorsList().signupPageTitle).should('be.visible');
    }

    singUpWithAnyUser(firstname, lastname, username, password){
        cy.get(this.selectorsList().firstnameField).type(firstname);
        cy.get(this.selectorsList().lastnameField).type(lastname);
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().confirmPasswordField).type(password);
        cy.get(this.selectorsList().signupSubmitButton).click();
    }
    
    clickSignupPage(){
        cy.get(this.selectorsList().signupPageTitle).click();
    }

    testFirstnameFieldRequired(){
        cy.get(this.selectorsList().firstnameField).click();
        this.clickSignupPage();
        cy.get(this.selectorsList().firstnameHelpText).should('be.visible');
    }
    testLastnameFieldRequired(){
        cy.get(this.selectorsList().lastnameField).click();
        this.clickSignupPage();
        cy.get(this.selectorsList().lastnameHelpText).should('be.visible');
    }
    testUsernameFieldRequired(){
        cy.get(this.selectorsList().usernameField).click();
        this.clickSignupPage();
        cy.get(this.selectorsList().usernameHelpText).should('be.visible');
    }
    testPasswordFieldRequired(){
        cy.get(this.selectorsList().passwordField).click();
        this.clickSignupPage();
        cy.get(this.selectorsList().passwordHelpText).should('be.visible');
    }   
    testConfirmPasswordFieldRequired(){
        cy.get(this.selectorsList().confirmPasswordField).click();
        this.clickSignupPage();
        cy.get(this.selectorsList().confirmPasswordHelpText).should('be.visible');
    }
   
};

export default SignupPage;