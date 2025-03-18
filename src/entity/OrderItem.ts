export default class OrderItem{
    constructor(readonly id:string, readonly name:string, readonly price:number,readonly productId:string, readonly quantity:number){
    }
    getPrice(){
        return this.price * this.quantity;
    }
    validate(){
        if(this.id.trim().length === 0){
            throw new Error("ID cannot be empty");
        }
        if(this.name.trim().length === 0){
            throw new Error("Name cannot be empty");
        }
        if(this.productId.trim().length === 0){
            throw new Error("Product ID cannot be empty");
        }
        if(this.quantity < 1){
            throw new Error("Quantity must be greater than zero");
        }
        if(this.price < 0){
            throw new Error("Price must be greater than zero");
        }
    }
}