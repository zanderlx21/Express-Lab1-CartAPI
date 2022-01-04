import express from 'express';
import routes from "./routes/cart-items-routes"

const app = express();

app.use(express.json());
app.use("/cart-items", routes);

const port = 3008;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
