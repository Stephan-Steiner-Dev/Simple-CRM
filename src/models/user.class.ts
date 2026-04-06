export class AddUser {
  firstName: string;
  lastName: string;
  birthDate: number;
  address: string;
  zipCode: number;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj?.firstName || '';
    this.lastName = obj?.lastName || '';
    this.birthDate = obj?.birthDate || 0;
    this.address = obj?.address || '';
    this.zipCode = obj?.zipCode || 0;
    this.city = obj?.city || '';
  }

  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      address: this.address,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}