import express from "express";
import productsRouter from "./routes/products.routes.js";
import categoriesRouter from "./routes/categories.routes.js";

const app = express();
app.use(express.json());

app.use("/api", productsRouter);
app.use("/api", categoriesRouter);

app.listen(3000, () => {
  console.log("Server running");
});
