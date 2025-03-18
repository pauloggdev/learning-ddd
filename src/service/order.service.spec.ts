import Order from "../entity/order"
import OrderItem from "../entity/OrderItem"
import OrderService from "./order.service"

describe("Order service unit tests", () => {
    it("should get total of all orders", () => {
        const item1 = new OrderItem("123", "item1", 100, "p1", 1)
        const item2 = new OrderItem("124", "item2", 200, "p2", 2)
        const order1 = new Order("123", "c1", [item1]);
        const order2 = new Order("123", "c1", [item2]);
        const total = OrderService.total([order1, order2])
        expect(total).toBe(500)
    })
})