import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it('should throw error when id is empty', ()=>{
        expect(()=>{
            let customer = new Customer("", "John")
        }).toThrowError('ID cannot be empty')
    })
    it('should throw error when name is empty', ()=>{
        expect(()=>{
            let customer = new Customer("123", "")
        }).toThrowError('Name cannot be empty')
    })
    it("should update name an customer", () =>{
        let customer = new Customer("123", "John");
        customer.updateName("John Doe");
        expect(customer._name).toBe("John Doe");
    })
    it("should update address an customer", () =>{
        let address = new Address("street 2", "City 2", "State 2", "12234")
        let customer = new Customer("123", "John", address);
        let address2 = new Address("Street 3", "City 3", "State 3", "12234")
        customer.updateAddress(address2);
        expect(customer._address?._city).toBe("City 3");
        expect(customer._address?._street).toBe("Street 3");
        expect(customer._address?._state).toBe("State 3");
        expect(customer._address?._zipCode).toBe("12234");
    })
    it("should return all address", () =>{
        let address = new Address("street 2", "City 2", "State 2", "12234")
        let customer = new Customer("123", "John", address);
        expect(customer.getAddress()).toBe(address);
    })
    it("should activate an customer", () =>{
        let customer = new Customer("123", "John");
        customer.activate();
        expect(customer._active).toBeTruthy()
    })
    it("should deactivate an customer", () =>{
        let customer = new Customer("123", "John");
        customer.deactivate();
        expect(customer._active).toBeFalsy()
    })
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