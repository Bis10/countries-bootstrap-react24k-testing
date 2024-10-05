describe("Login", () => {
  it("Log in user", () => {
    // Visit the Login page
    cy.visit("http://localhost:5173/login");

    // Check that the page contains the input fields and buttons
    cy.get("input[type=email]").type("test@test.com");
    cy.get("input[type=password]").type("Abcd1234");
    cy.get("button").contains("Login").click();
  });
});