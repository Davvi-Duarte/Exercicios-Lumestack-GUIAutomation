class HomePage {
    selectorsList () {
        const selectors = {
            nextButtonHomePage : "[data-test='user-onboarding-next']",
            bankNameField : "[name='bankName']",
            routingNumberField : "[name='routingNumber']",
            accountNumberField : "[name='accountNumber']",
            bankAccountSubmitButton:"[data-test='bankaccount-submit']",
            doneSubmitButton:"[data-test='user-onboarding-next']",
            createNewTransationButton: "[data-test='nav-top-new-transaction']",
        };
        return selectors;
    };

    clickNextButtonHomePage(){
        cy.get(this.selectorsList().nextButtonHomePage).click();
    };
    submitAnyBankInfo(bankName, routingNumber, accountNumber){
        cy.get(this.selectorsList().bankNameField).type(bankName);
        cy.get(this.selectorsList().routingNumberField).type(routingNumber);
        cy.get(this.selectorsList().accountNumberField).type(accountNumber);
        cy.get(this.selectorsList().bankAccountSubmitButton).click();
        cy.get(this.selectorsList().doneSubmitButton).click();
    }

    clickCreateNewTransationButton(){
        cy.get(this.selectorsList().createNewTransationButton).click();
    }
   
};

export default HomePage;