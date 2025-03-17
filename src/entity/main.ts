import Address from "./address";
import Customer from "./customer";
import Order from "./order";
import OrderItem from "./OrderItem";

let customer = new Customer("123", "Paulo João");
let address  = new Address("Rua 2", "Luanda","Luanda", "12345");
customer.updateAddress(address);

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 15);

const order = new Order("1", "123", [item1, item2]);
