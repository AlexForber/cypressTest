import { Registration } from "../fixtures/pages/registration";
import users from "../fixtures/users";
import { faker } from "@faker-js/faker";

const registrationPage = new Registration();
// const randomUsername = faker.internet.userName()


describe("Registration", () => {
    beforeEach(() => {
        cy.visit("/ru/auth/registration");
    });

    it("Registration with valid data", () => {
        registrationPage.enterUsername(users.userRegistration.username)
        // registrationPage.enterUsername(randomUsername)
        registrationPage.enterEmail(users.userRegistration.email)
        registrationPage.enterPassword(users.userRegistration.password)
        registrationPage.enterPasswordConfirm(users.userRegistration.password)
        registrationPage.clickRegister();
        registrationPage.emailConfirmationPopup();
    })

})