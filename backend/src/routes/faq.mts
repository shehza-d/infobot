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

router.get("/faqs", getAllFaqs);
router.get("/faq/:id", getFaq);
router.post("/faq", addFaq);
router.put("/faq", updateFaq);
router.delete("/faq/:id", deleteFaq);
router.delete("/faqs", deleteAllFaqs);

export { router as faqRouter };
