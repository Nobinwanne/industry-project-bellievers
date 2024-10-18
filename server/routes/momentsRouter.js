import express from "express";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const router = express.Router();

const momentsBuffer = fs.readFileSync("./data/messages.json");
const parsedData = JSON.parse(momentsBuffer);

router.get("/", (_req, _res) => {
  return _res.send(parsedData);
});

router.get("/:momentsId", (req, res) => {
  console.log(req.params.momentsId);
  const momentsId = req.params.momentsId;

  const moments = JSON.parse(momentsBuffer);

  const foundMoment = moments.find((moment) => {
    return moment.id === momentsId;
  });

  if (!foundMoment) {
    res.status(404).send("Moment not found with that id");
  }

  res.send(foundMoment);
});

router.post("/", (_req, _res) => {
  console.log("creating moments");

  if (Object.keys(_req.body).length === 0) {
    return _res.send(400).json({ message: "Request body is not present" });
  }

  const newMoment = {
    id: uuidv4(),
    name: _req.body.name,
    moment: _req.body.moment,
    message: _req.body.message,
    length: _req.body.length,
    gift: _req.body.gift,
    recipient: _req.body.recipient,
    phone: _req.body.phone,
    timestamp: Date.now(),
  };

  const momentsData = fs.readFileSync("./data/messages.json");

  const parsedData = JSON.parse(momentsData);

  parsedData.push(newMoment);

  fs.writeFileSync("./data/messages.json", JSON.stringify(parsedData));

  return _res.status(200).json(newMoment);
});

export default router;
