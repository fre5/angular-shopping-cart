export class Info {
  id: number;
  billingName:string;
  email:string;
  billingAddress:string;
  billingAddressCont:string;
  billingCity:string;
  billingState:string;
  billingZip:string;
  shippingAddress:string;
  shippingAddressCont:string;
  shippingCity:string;
  shippingState:string;
  shippingZip:string;
  card:string;
  expMonth:string;
  expYear: string;
  cvv: string;

  constructor() {
    this.id = 0;
    this.billingName = '';
    this.email = '';
    this.billingAddress = '';
    this.billingAddressCont = '';
    this.billingCity = '';
    this.billingState = '';
    this.billingZip = '';
    this.shippingAddress = '';
    this.shippingAddressCont = '';
    this.shippingCity = '';
    this.shippingState = '';
    this.shippingZip = '';
    this.card = '';
    this.expMonth = '';
    this.expYear = '';
    this.cvv = '';
  }
}