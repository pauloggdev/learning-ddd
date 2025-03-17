import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it("should create a new customer", () => {
        // Arrange
        const id = "123";
        const name = "Paulo João";
        const address = new Address("Rua 2", "Luanda", "Luanda", "12345");
        const customer = new Customer(id, name, address);
        // Assert
        expect(customer._id).toBe(id);
        expect(customer._name).toBe(name);
        expect(customer._address).toBe(address);
    });
})