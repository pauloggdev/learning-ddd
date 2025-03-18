import Address from "./address";
import Customer from "./customer";
import Order from "./order";
import OrderItem from "./OrderItem";
import Product from "./product";

describe("Product unit tests", () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            const product = new Product("", "Product", 100);
        }).toThrowError('ID is required');
    })
    it('should throw error when name is empty', () => {
        expect(() => {
            const product = new Product("123", "", 100);
        }).toThrowError('Name is required');
    })
    it('should throw error when price is less than zero', () => {
        expect(() => {
            const product = new Product("123", "Product", -1);
        }).toThrowError('Price must be greater than zero');
    })
    it('should update name product', () => {
        const product = new Product("123", "Product", 100);
        product.changeName("Product2");
        expect(product._name).toBe("Product2");
    })
    it('should update price product', () => {
        const product = new Product("123", "Product", 100);
        product.changePrice(150);
        expect(product._price).toBe(150);
    })
    
}) 