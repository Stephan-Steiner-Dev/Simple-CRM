export class AddUser {
  firebaseId: string;
  firstName: string;
  lastName: string;
  birthDate: number;
  email: string;
  address: string;
  zipCode: number;
  city: string;

  constructor(obj?: any) {
    this.firebaseId = obj?.firebaseId || '';
    this.firstName = obj?.firstName || '';
    this.lastName = obj?.lastName || '';
    this.birthDate = obj?.birthDate || 0;
    this.email = obj?.email || '';
    this.address = obj?.address || '';
    this.zipCode = obj?.zipCode || 0;
    this.city = obj?.city || '';
  }

  toJSON() {
    return {
      id: this.firebaseId,
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      email: this.email,
      address: this.address,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}