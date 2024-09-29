import express from "express";
import qs from "querystring";
import textToSpeech from "../controllers/textToSpeech";
import getGrades from "../controllers/answer/getGrades";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { question, input } = req.body;
    const response = await getGrades(Number(question), qs.stringify(input));
    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
