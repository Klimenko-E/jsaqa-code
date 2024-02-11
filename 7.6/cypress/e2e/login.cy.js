it("Успешная авторизация", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});

it("Неуспешная авторизация с пустым полем логина", () => {
  cy.visit("/");

  cy.login(" ", "test");

  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
  cy.get("#mail")
    .then(($el) => $el[0].validationMessage)
    .should("contain", "Заполните это поле.");
});

it("Неуспешная авторизация с пустым полем пароля", () => {
  cy.visit("/booksNode");
  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();

  //cy.login("test@test.com", "");
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});
