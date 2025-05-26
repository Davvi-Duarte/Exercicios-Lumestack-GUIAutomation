class TransactionPage {
    selectorsList () {
        const selectors = {
            balanceField: "[data-test='sidenav-user-balance']",
            userTransactionPartner:"[data-test='user-list-item-uBmeaz5pX']",
            amountTransactionField:"#amount",
            descriptionTransactionField:"#transaction-create-description-input",
            paymentButton:"[data-test='transaction-create-form'] > .MuiGrid-container > :nth-child(2)"
        };
        return selectors;
    };

    checkBalanceField(){
        cy.get(this.selectorsList().balanceField).should('be.visible');
    }
    checkBalanceFieldValue(valorDesejado){
        cy.get(this.selectorsList().balanceField).should('have.text', valorDesejado);
    }
    checkBalanceFieldEnoughFounds(){
        cy.get(this.selectorsList().balanceField).should('have.text', '$0.00');
    }
    clickCreateNewTransationButton(){
        cy.get(this.selectorsList().createNewTransationButton).click();
    }
    newTransactionWithOtherUser(){
        cy.get(this.selectorsList().userTransactionPartner).click();
        cy.get(this.selectorsList().amountTransactionField).type('100');
        cy.get(this.selectorsList().descriptionTransactionField).type('Test Transaction');
        cy.get(this.selectorsList().paymentButton).click();
    }
};

export default TransactionPage;