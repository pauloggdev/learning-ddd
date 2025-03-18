export default class Product {
    _id: string;
    _name: string;
    _price: number;
    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }

    changeName(name: string){
        this._name = name;
        this.validate();
    }
    changePrice(price: number){
        this._price = price;
        this.validate();
    }
    validate(): Error | boolean {
        if (this._id.trim().length === 0) {
            throw new Error('ID is required');
        }
        if (this._name.trim().length === 0) {
            throw new Error('Name is required');
        }
        if (this._price < 0) {
            throw new Error('Price must be greater than zero');
        }
        return true;
    }
}