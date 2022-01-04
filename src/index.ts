import express from 'express';
import routes from "./routes/cart-items-routes"

const app = express();

const port = 3008;

app.use(express.json());
app.use("/cart-items", routes);

app.listen(port, () => console.log(`Listening on port: ${port}.`));
