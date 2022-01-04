import express from "express";
import Cart from "../models/cart";

const routes = express.Router();

const cartItems: Cart[] = [
  { id: 1, product: "Slippers", price: 17.99, quantity: 12 },
  { id: 2, product: "Pajamas", price: 34.99, quantity: 10 },
  { id: 3, product: "Scarf", price: 22.99, quantity: 30 },
  { id: 4, product: "Hat", price: 24.99, quantity: 15 },
  { id: 5, product: "Socks", price: 12.99, quantity: 25 },
];

let nextID: number = 6;

export default routes;

routes.get("/", function (request, response) {
  let MaxPrice: number = parseInt(request.query.maxPrice as string);
  let Prefix: string = request.query.prefix as string;
  let PageSize = Number.parseInt(request.query.pageSize as string);
  let cartArray: Cart[] = [];

  if (MaxPrice) {
    let queryPrice: number = Number.parseFloat(
      request.query.maxPrice as string
    );
    let filteredPrice: Cart[] = cartItems.filter(
      (item) => item.price <= queryPrice
    );
    response.json(filteredPrice);
  }
  if (Prefix) {
    let filteredPrefix: Cart[] = cartItems.filter((item) =>
      item.product.toLowerCase().startsWith(Prefix.toLowerCase())
    );
    response.json(filteredPrefix);
  }
  if (PageSize) {
    let filteredPage = cartItems.filter((item, index) => index <= PageSize - 1);
    response.json(filteredPage);
  } else {
    response.json(cartItems);
  }
});

// routes.get("cart-items/:id", function (req, res) {
// 	const item = cartItems.find((item) => item.id === parseInt(req.params.id));
// 	item ? res.json(item) : res.status(404).send("ID Not Found");
// });

routes.get("/:id", function (request, response) {
  for (let i = 0; i < cartItems.length; i++) {
    let inputID: number = Number.parseInt(request.params.id);
    if (cartItems[i].id === inputID) {
      response.status(200).json(cartItems[i]);
      break;
    }
  }
  response.status(404);
  response.send({ error: "ID not found" });
});

routes.post("/", function (request, response) {
  let newItem: Cart = request.body;
  newItem.id = nextID;
  nextID += 1;
  cartItems.push(newItem);
  response.status(201).json(cartItems);
});

routes.put("/:id", function (request, response) {
    let itemUpdates: Cart = request.body;
    for (let i  =0 ; i < cartItems.length; i++) {

    }
    
});
