describe("Register page load test", () => {
  it("should load the Register page successfully", () => {
    // Visit the Register page
    cy.visit("http://localhost:5173/register"); 

    // Check that the page contains the input fields and the register button
    cy.get('input[placeholder="Full Name"]').should("be.visible");
    cy.get('input[placeholder="Email"]').should("be.visible");
    cy.get('input[placeholder="Password"]').should("be.visible");
    cy.get("button").contains("Register").should("be.visible");
  });
});
