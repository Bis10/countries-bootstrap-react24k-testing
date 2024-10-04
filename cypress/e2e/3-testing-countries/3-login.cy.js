describe("Login page load test", () => {
  it("should load the Login page successfully", () => {
    // Visit the Login page
    cy.visit("http://localhost:5173/login"); 

    // Check that the page contains the input fields and buttons
    cy.get('input[type=email]').type("test@test.com");
    cy.get('input[type=password]').type("12345");
    cy.get("button").contains("Login").should("be.visible");
    cy.get("button").contains("Don't have an account?").should("be.visible");
  });
});
