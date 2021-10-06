export class Info {
  id: number;
  billingName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiration: string;

  constructor() {
    this.id = 0;
    this.billingName = '';
    this.email = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = '';
    this.cardNumber = '';
    this.expiration = '';
  }
}