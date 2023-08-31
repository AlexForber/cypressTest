import {Login} from '../fixtures/pages/login';
import users from '../fixtures/users';

const loginPage = new Login();

describe('Login', () => {
    beforeEach(() => {
        cy.visit("/ru/auth/login");
    });

    it('Login with valid data', () => {
        loginPage.enterEmail(users.mainUser.email);
        loginPage.enterPassword(users.mainUser.password);
        loginPage.clickSingUp();
    });

    it('Login with short password', () => {
        loginPage.enterEmail(users.userWithShortPassword.email);
        loginPage.enterPassword(users.userWithShortPassword.password);
        loginPage.clickSingUp();
        loginPage.errorMessagePopup();
    });
    
    it('Login with wrong password', () => {
        loginPage.enterEmail(users.userWithWrongName.email);
        loginPage.enterPassword(users.userWithWrongName.password);
        loginPage.clickSingUp();
        loginPage.errorMessagePopup();
    });

    it('Login without password', () => {
        loginPage.enterEmail(users.userWithoutPassword.email);
        loginPage.enterPassword(users.userWithoutPassword.password);
        loginPage.clickSingUp();
        loginPage.errorMessagePopup();
    });
})
