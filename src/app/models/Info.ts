export class Info {
  id: number;
  billingName: string;
  email: string;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  cardNumber: string;
  expiration: string;

  constructor() {
    this.id = 0;
    this.billingName = '';
    this.email = '';
    this.billingAddress = '';
    this.billingCity = '';
    this.billingState = '';
    this.billingZip = '';
    this.shippingAddress = '';
    this.shippingCity = '';
    this.shippingState = '';
    this.shippingZip = '';
    this.cardNumber = '';
    this.expiration = '';
  }
}