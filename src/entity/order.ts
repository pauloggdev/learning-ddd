import OrderItem from "./OrderItem";

export default class Order{
    _total: number;
    constructor(readonly _id:string, readonly _customerId:string, readonly _items:OrderItem[] = []){
        this._total = 0
        this.validate();
    }
    validate(){
        if(this._id.length === 0){
            throw new Error("ID is required");
        }
        if(this._customerId.length === 0){
            throw new Error("CustomerId is required");
        }
        if(this._items.length === 0){
            throw new Error("OrderItems is required");
        }
        return true;
    }
    total():number{
        return this._items.reduce((acc, item) => acc + item.getPrice(), 0)
    }
}