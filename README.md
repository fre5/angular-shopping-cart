# Mystore

A shopping cart single page application using Angular

<<<<<<< HEAD
[DEMO](https://adoring-galileo-c2200f.netlify.app)

=======
>>>>>>> cabb4326c6ea67d3ad81c2509a4084b111cf2836

## How to run

- Unzip folder, go to terminal and set the unzip folder as current directory `cd mystore`
- Install all dependencies `npm install` 
- Run the application `ng serve` 
- The application will run under `http://localhost:4200` on the local browser
- To set a custom port run `ng serve --port=<port number>`
- To run the application to a designated ip on a remote network run `ng serve --host=<ip address>`


## API used
https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json


## Features

- Entire site is mobile ready
- Clicking the image or title on product will open product page
- Clicking back to product page link will open the product list page
- Add to cart button prompt an alert and adds the product with the assigned quantity to the cart
- Adding an item that already exist in the cart will add to the quantity
- Quantity can be added, reduced or removed on cart page
- When quantity is reduced to zero, item is automatically removed
- When there is no item in the cart, the checkout form is hidden, a link to go to product list page is provided
- Checkout form is set to have billing address and shipping address the same on default
- When unchecking shipping address checkbox will unhide the shipping address input fields
- Subtotal, tax, shipping, and total is calculated on the total component 
- Whenever an item is removed, added, quantity edited, the total amount is updated automatically

## Models

### Product
  id: number;
  url: string;
  name: string;
  price: string;
  description: string;

### Cart
  id: number;
  url: string;
  name: string;
  price: string;
  description: string;
  quantity: number;


### Info
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



## Future features

- User account and user profile page with order history
- Tax and shipping adjustment based on zip code
- Credit/debit card number validation
- Paypal integration
- An admin panel to edit products into a database
 




