import express from 'express';
import createWoman from '../controllers/questions/createWoman';
import createThread from '../controllers/questions/createThread';
import getWomanResponse from '../controllers/questions/getWomanResponse';
import addResponse from '../controllers/questions/addResponse';
import textToSpeech from '../controllers/textToSpeech';
import systemPrompts from '../controllers/systemPrompts';
import Welp from '../models/Welp';

const router = express.Router();

const prompts = systemPrompts;

router.post('/q1', async (req, res) => {
    let { assistantID, threadID, message } = req.body;
    if (!assistantID && !threadID) {
        assistantID = await createWoman('Rachel', prompts.q1);
        threadID = await createThread();
    }
    try {
        const output = await getWomanResponse(assistantID, threadID, message);
        await addResponse(output, threadID, 'assistant');
        const filePath = await textToSpeech(output, 'Rachel');
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error('Error sending the file:', err);
                res.status(500).send(
                    'Error occurred while sending the MP3 file.'
                );
            }
        });
        const welp = new Welp({ question: 1, message: [output] });
        await welp.save();
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/q2', async (req, res) => {
    let { assistantID, threadID, message } = req.body;
    if (!assistantID && !threadID) {
        assistantID = await createWoman('Rachel', prompts.q2);
        threadID = await createThread();
    }
    try {
        const output = await getWomanResponse(assistantID, threadID, message);
        await addResponse(output, threadID, 'assistant');
        const filePath = await textToSpeech(output, 'Rachel');
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error('Error sending the file:', err);
                res.status(500).send(
                    'Error occurred while sending the MP3 file.'
                );
            }
        });
        const result = await Welp.findOne({ question: 2 });
        if (result) {
            const oldList = result.message;
            const newList = oldList.concat([message, output]);
            await Welp.findOneAndUpdate(
                { question: 2 },
                { $push: { message: newList } }
            );
        } else {
            const welp = new Welp({ question: 2, message: [message, output] });
            console.log(welp);
            await welp.save();
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/q3', async (req, res) => {
    let { assistantID, threadID, message } = req.body;
    if (!assistantID && !threadID) {
        assistantID = await createWoman('Rachel', prompts.q1);
        threadID = await createThread();
    }
    try {
        const output = await getWomanResponse(assistantID, threadID, message);
        await addResponse(output, threadID, 'assistant');
        res.json({ assistantID, threadID, message: output });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
