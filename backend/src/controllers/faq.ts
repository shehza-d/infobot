import { IProduct } from "../types/index.js";
import { db } from "../db/index.mjs";
import type { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { parameterMissingResponse } from "../utils/index.js";

const getAllFaqs = async (req: Request, res: Response) => {
  console.log(
    "🚀 ~ file: productControllers.ts:7 ~ getAllProducts ~ req:",
    req
  );
  try {
    const products = db.collection<IProduct>("products");
    const data = await products.find<IProduct>({}).toArray();

    if (!data.length) {
      res.status(404).send({ message: "Products Not Found" });
      return;
    }

    res.status(200).send({ message: "All Products fetched", data });
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Unknown Error" });
  }
};

const getFaq = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    res.status(403).send({ message: "Incorrect product id" });
    return;
  }

  try {
    const query = { _id: new ObjectId(id) };

    const products = db.collection<IProduct>("products");
    const data = await products.findOne<IProduct>(query);

    if (!data) throw Error("Product Not Found!");

    res.send({ message: "Product found", data });
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Unknown Error" });
  }
};

const addFaq = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const price = Number(req.body.price);

  // Validation
  if (
    !name ||
    !price ||
    !description ||
    isNaN(price) ||
    typeof name !== "string" ||
    typeof description !== "string"
  ) {
    res.status(403).send(parameterMissingResponse);
    return;
  }

  try {
    const products = db.collection<IProduct>("products");
    const data = await products.insertOne({ name, price, description });

    if (data.acknowledged)
      res.status(201).send({
        message: "New Product Created!",
        id: data.insertedId.toString(),
      });
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Unknown Error" });
  }
};

const updateFaq = async (req: Request, res: Response) => {
  const { id, name, description } = req.body;
  const price = Number(req.body.price);

  // Validation
  if (!ObjectId.isValid(id)) {
    res.status(403).send({ message: "Incorrect product id" });
    return;
  }
  if ((!name && !price && !description) || !id) {
    res.status(403).send(parameterMissingResponse);
    return;
  }

  if (price && isNaN(price)) {
    res.status(403).send("Price missing");
    return;
  }
  if (name && typeof name !== "string") {
    res.status(403).send("NAME  missing");
    return;
  }
  if (description && typeof description !== "string") {
    res.status(403).send("description missing");
    return;
  }

  let product: Partial<IProduct> = {};

  name && (product.name = name);
  price && (product.price = price);
  description && (product.description = description);

  try {
    const products = db.collection<IProduct>("products");
    const filter = { _id: new ObjectId(id) };
    const updateDoc = { $set: product };
    const data = await products.updateOne(filter, updateDoc);

    if (!data.matchedCount) throw Error("Product Not Found!");

    res.status(201).send({ message: "Product updated" });
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Unknown Error" });
  }
};

const deleteFaq = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    res.status(403).send({ message: "Incorrect product id" });
    return;
  }
  try {
    const products = db.collection<IProduct>("products");
    const query = { _id: new ObjectId(id) };
    const result = await products.deleteOne(query);

    if (!result.deletedCount)
      throw new Error("No documents matched the query. Deleted 0 documents.");

    res.status(201).send({ message: "Successfully deleted one document." });
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Unknown Error" });
  }
};
const deleteAllFaqs = async (req: Request, res: Response) => {};

export { getAllFaqs, getFaq, addFaq, updateFaq, deleteFaq, deleteAllFaqs };
