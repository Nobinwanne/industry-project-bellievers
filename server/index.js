import express from "express";
import cors from "cors";
import router from "./routes/momentsRouter.js";

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/moments", router);

app.get("/", (_req, res) => {
  res.send("Welcome to my server");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
