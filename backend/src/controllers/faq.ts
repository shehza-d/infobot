import { IFaq } from "../types/index.js";
import { db } from "../db/index.mjs";
import type { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { parameterMissingResponse } from "../utils/index.js";

const collection = "faqs";
const faqsCollection = db.collection<IFaq>(collection);

const getAllFaqs = async (req: Request, res: Response) => {
  try {
    const data = await faqsCollection
      .find<IFaq>({})
      .sort({ _id: -1 })
      .toArray();

    if (!data.length) {
      res.status(404).send({ message: "Questions Not Found" });
      return;
    }

    res.status(200).send({ message: "All Faqs fetched", data });
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Unknown Error" });
  }
};

const getFaq = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    res.status(403).send({ message: "Incorrect FAQ id" });
    return;
  }

  try {
    const query = { _id: new ObjectId(id) };

    const data = await faqsCollection.findOne<IFaq>(query);

    if (!data) throw Error("FAQ Not Found!");

    res.send({ message: "FAQ found", data });
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Unknown Error" });
  }
};

const addFaq = async (req: Request, res: Response) => {
  const { question, answer, topic } = req.body;

  // Validation
  if (
    !question ||
    !answer ||
    !topic ||
    typeof question !== "string" ||
    typeof answer !== "string" ||
    typeof topic !== "string"
  ) {
    res.status(403).send(parameterMissingResponse);
    return;
  }

  try {
    const doc = {
      question,
      answer,
      topic,
      createdOn: new Date(),
    };
    const data = await faqsCollection.insertOne(doc);

    if (data.acknowledged)
      res.status(201).send({
        message: "New FAQ Created!",
        id: data.insertedId.toString(),
      });
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Unknown Error" });
  }
};

const updateFaq = async (req: Request, res: Response) => {
  const { id, answer, question, topic, name, description } = req.body;
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

  let product: Partial<IFaq> = {};

  answer && (product.answer = answer);
  question && (product.question = question);
  topic && (product.topic = topic);

  try {
    const filter = { _id: new ObjectId(id) };
    const updateDoc = { $set: product };
    const data = await faqsCollection.updateOne(filter, updateDoc);

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
    const query = { _id: new ObjectId(id) };
    const result = await faqsCollection.deleteOne(query);

    if (!result.deletedCount)
      throw new Error("No documents matched the query. Deleted 0 documents.");

    res.status(201).send({ message: "Successfully deleted one document." });
  } catch (err: any) {
    res.status(500).send({ message: err.message || "Unknown Error" });
  }
};
const deleteAllFaqs = async (req: Request, res: Response) => {};

export { getAllFaqs, getFaq, addFaq, updateFaq, deleteFaq, deleteAllFaqs };
