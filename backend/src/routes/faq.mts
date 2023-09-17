import express from "express";
import {
  getAllFaqs,
  getFaq,
  addFaq,
  updateFaq,
  deleteFaq,
  deleteAllFaqs,
} from "../controllers/faq.js";

const router = express.Router();

router.get("/faqs", getAllFaqs);// also accepts search query
router.get("/faq/:id", getFaq);
router.post("/faq", addFaq);
router.patch("/faq/:id", updateFaq);
router.delete("/faq/:id", deleteFaq);
router.delete("/faqs", deleteAllFaqs);

export { router as faqRouter };
