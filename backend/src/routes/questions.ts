import express from "express";
import createWoman from "../controllers/questions/createWoman";
import createThread from "../controllers/questions/createThread";
import getWomanResponse from "../controllers/questions/getWomanResponse";
import addResponse from "../controllers/questions/addResponse";
import textToSpeech from "../controllers/textToSpeech";
import systemPrompts from "../controllers/systemPrompts";
import { Request, Response } from "express";

const router = express.Router();

const prompts = systemPrompts;

const returnAnswer = async (
  req: Request,
  res: Response,
  voice: string,
  prompt: string
) => {
  let { assistantID, threadID, message } = req.body;
  if (!assistantID && !threadID) {
    assistantID = await createWoman("Rachel", prompts.q1);
    threadID = await createThread();
  }
  try {
    const output = await getWomanResponse(assistantID, threadID, message);
    await addResponse(output, threadID, "assistant");
    const filePath = await textToSpeech(output, "Rachel");
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error("Error sending the file:", err);
        res.status(500).send("Error occurred while sending the MP3 file.");
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

router.post("/q1", async (req, res) => {
  await returnAnswer(req, res, "Rachel", prompts.q1);
});

router.post("/q2", async (req, res) => {
  await returnAnswer(req, res, "Rachel", prompts.q2);
});

router.post("/q3", async (req, res) => {
  let { assistantID, threadID, message } = req.body;
  if (!assistantID && !threadID) {
    assistantID = await createWoman("Rachel", prompts.q1);
    threadID = await createThread();
  }
  try {
    const output = await getWomanResponse(assistantID, threadID, message);
    await addResponse(output, threadID, "assistant");
    res.json({ message: output });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
