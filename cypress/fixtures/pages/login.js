export class Login{
    emailField = `input[name='loginOrEmail']`
    passwordField = `input[name='password']`
    btnLogin = `[type="submit"][handler="[object Object]"]`
    errorMessage = '#pass > :nth-child(3)'
    enterEmail(email) {
        cy.get(this.emailField).type(email);
    }
    enterPassword(password) {
        cy.get(this.passwordField).type(password);
    }
    clickSingUp() {
        cy.get(this.btnLogin).click();
    }

    errorMessagePopup() {
        cy.get(this.errorMessage).should('be.visible');
    }





}