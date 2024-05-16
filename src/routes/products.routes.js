import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  res.json(products);
});

router.get("/product/:id", async (req, res) => {
  const productById = await prisma.product.findFirst({
    where: {
      id: +req.params.id,
    },
    include: {
      category: true,
    },
  });
  res.json(productById);
});

router.post("/products", async (req, res) => {
  const newProduct = await prisma.product.create({
    data: req.body,
  });
  res.json(newProduct);
});

router.put("/product/:id", async (req, res) => {
  const productDelete = await prisma.product.update({
    where: {
      id: +req.params.id,
    },
    data: req.body,
  });
  res.json(productDelete);
});

router.delete("/product/:id", async (req, res) => {
  const productDelete = await prisma.product.delete({
    where: {
      id: +req.params.id,
    },
  });
  res.json(productDelete);
});

export default router;
