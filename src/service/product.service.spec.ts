import Product from "../entity/product"
import ProductService from "./product.service";

describe("Product service unit tests", () => {
    // Test cases for ProductService
    it("should change the price of all products", () => {
        const product1 = new Product("123", "Product1", 10);
        const product2 = new Product("124", "Product2", 20);
        const products = [product1, product2];

        ProductService.increasePrice(products, 100);
        
        expect(product1._price).toBe(20);
        expect(product2._price).toBe(40);
    })
})