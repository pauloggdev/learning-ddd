export default class Address{

    _street: string;
    _city: string;
    _state: string;
    _zipCode: string;

    constructor(street:string, city:string, state:string, zipCode:string){
        this._street = street;
        this._city = city;
        this._state = state;
        this._zipCode = zipCode;
        this.validate();
    }
    validate(){
        if(this._street.trim().length === 0){
            throw new Error("Street cannot be empty");
        }
        if(this._city.trim().length === 0){
            throw new Error("City cannot be empty");
        }
        if(this._state.trim().length === 0){
            throw new Error("State cannot be empty");
        }
        if(this._zipCode.trim().length !== 5){
            throw new Error("Zip Code must be 5 digits long");
        }
    }
    toString(){
        return `${this._street}, ${this._city}, ${this._state} ${this._zipCode}`;
    }
}