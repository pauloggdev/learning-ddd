import Address from "./address";
import Customer from "./customer";
import Order from "./order";
import OrderItem from "./OrderItem";

describe("Order unit tests", () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError('ID is required');
    })
    it('should throw error when customerId is empty', () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError('CustomerId is required');
    })
    it('should throw error when orderItem is empty', () => {
        expect(() => {
            let order = new Order("123", "1234", []);
        }).toThrowError('OrderItems is required');
    })
    it('should calculate total', () => {
       const item1 =  new OrderItem("123", "Item 1", 100, "p1", 2);
       const item2 =  new OrderItem("124", "Item 2", 200, "p2", 3);
       const order = new Order("o1", "c1", [item1, item2]);
       expect(order.total()).toBe(800);
    })
    
}) 