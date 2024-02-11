describe("Избранное", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("test@test.com", "test");
  });

  it.skip("Добавление новой книги"),
    () => {
      cy.addBook("Мушкетеры", "Про мушкетеров");
      cy.contains("Мушкетеры").should("be.visible");
    };

  it("Добавление в избранное", () => {
    cy.get(
      '[href="book/47b36f1c-9bc3-4a22-aac9-29b3e2ec5b5e"] > .h-100 > .card-footer > .btn'
    ).click();
    cy.visit("/favorites");
    cy.contains("Delete from favorite").should("be.visible");
  });

  it("Удаление из избранного", () => {
    cy.visit("/favorites");
    cy.get(".card-footer > .btn").click();
    cy.contains("Книга 1").should("not.exist");
  });
});
