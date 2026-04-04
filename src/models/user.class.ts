export class AddUser {
    firstName: string;
    lastName: string;
    birthDate: number;
    address: string;
    zipCode: number;
    city: string

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.address = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipcode : '';
        this.city = obj ? obj.city : '';
    }
}