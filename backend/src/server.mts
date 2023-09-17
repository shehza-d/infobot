import express from "express";
import { faqRouter } from "./routes/index.js";
import { PORT } from "./config/index.mjs";
import { middlewareRouter } from "./middleware/index.mjs";

const app = express();

app.use("/api/v1", middlewareRouter);

// app.use("/api/v1", authRouter);
app.use("/api/v1", faqRouter);

app.get("/testing", (req, res) => res.send("server testing ok"));

app.listen(PORT, () => console.log(`app listening on ===>>> ${PORT}`));
