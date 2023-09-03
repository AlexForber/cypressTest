export class Registration{
    nameField = `input[name='username']`
    emailField = "input[name='email']"
    passwordField = "input[name='password']"
    passwordConfirmField = "input[name='passwordConfirmation']"
    btnRegister = "button[type='submit']"
    emailConfirmation = ".sc-58f4f84-1"
    errorMessage = ""
    enterUsername(username) {
        cy.get(this.nameField).type(username);
    }
    
    enterEmail(email) {
        cy.get(this.emailField).type(email);
    }
    enterPassword(password) {
        cy.get(this.passwordField).type(password);
    }
    enterPasswordConfirm(password) {
        cy.get(this.passwordConfirmField).type(password);
    }
    clickRegister() {
        cy.get(this.btnRegister).click();
    }

    emailConfirmationPopup() {
        cy.get(this.emailConfirmation).should('be.visible');
    }



    errorMessagePopup() {
        cy.get(this.errorMessage).should('be.visible');
    }





}