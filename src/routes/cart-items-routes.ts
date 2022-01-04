import express from 'express';
import Cart from "../models/cart";

const routes = express.Router();

const cartItems: Cart[] = [
    { id: 1, product: "Slippers", price: 17.99, quantity: 12},
    { id: 2, product: "Pajamas", price: 34.99, quantity: 10},
    { id: 3, product: "Scarf", price: 22.99, quantity: 20},
    { id: 4, product: "Hat", price: 24.99, quantity: 15},
    { id: 5, product: "Socks", price: 12.99, quantity: 30}
] 

export default routes;

routes.get("/", function (request, response) {
  
});

routes.get("/cart-items", function (request, response) {
    let queryPrice = Number.parseInt(request.query.maxPrice as string);
    let queryPrefix = Number.parseInt(request.query.prefix as string);
    let queryPage = Number.parseInt(request.query.pageSize as string);
});

routes.get("/cart-items/:id", function (request, response) {
//     if (){
//     response.status(200);
// } else {
    response.status(404);
    response.send({ error: "ID not found" });
// }
});