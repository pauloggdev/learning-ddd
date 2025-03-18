import Address from "./address";

export default class Customer {

    _id: string;
    _name: string;
    _address?: Address;
    _active: boolean = true;

    constructor(id: string, name: string, address?: Address) {
        this._id = id;
        this._name = name;
        this._address = address;
        this.validate();
    }
    validate() {
        if (this._id.trim().length === 0) {
            throw new Error("ID cannot be empty");
        }
        if (this._name.trim().length === 0) {
            throw new Error("Name cannot be empty");
        }

    }
    updateName(name: string) {
        this._name = name;
    }
    updateAddress(address: Address) {
        this._address = address;
    }
    getAddress(): Address | undefined {
        return this._address;
    }
    activate() {
        this._active = true;
    }
    isActive(){
        return this._active;
    }
    deactivate() {
        this._active = false;
    }
}