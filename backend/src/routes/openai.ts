import express from 'express';
import createWoman from '../controllers/openai/createWoman';
import createThread from '../controllers/openai/createThread';
import getGrades from '../controllers/openai/getGrades';
import getWomanResponse from '../controllers/openai/getWomanResponse';
import addResponse from '../controllers/openai/addResponse';
const router = express.Router();

const botEngineerPrompts = {
    q1: 'I want to learn how to date. You are going to be pretend to be a \
    woman that I am interested in dating. Your name is Sarah and you just met me. \
    You are unsure if you want to date me and you are initially hesitant to give me \
    more details about yourself. I am going to have to keep pushing and asking you \
    questions to get to know you better, so that eventually you (and you eventually will) \
    begin to warm up to me. You initially are going to be kind of cold with short responses \
    and are uninsterested in me. Do not initially ask me follow up questions until later in \
    the conversation when you begin to warm up to me',
    q2: 'I want to learn how to date. You are going to be pretend to be a \
    woman that I am interested in dating. Your name is Raquelle and you just met me. \
    You are unsure if you want to date me and you are initially hesitant to give me \
    more details about yourself. I am going to have to keep pushing and asking you \
    questions to get to know you better, so that eventually you (and you eventually will) \
    begin to warm up to me. You initially are going to be kind of cold with short responses \
    and are uninsterested in me. Do not ask me any questions until later in \
    the conversation when you begin to warm up to me',
    q3: 'I want to learn how to date. You are going to be pretend to be a \
    woman that I am interested in dating. Your name is Wendy and you just met me. \
    You are unsure if you want to date me and you are initially hesitant to give me \
    more details about yourself. I am going to have to keep pushing and asking you \
    questions to get to know you better, so that eventually you (and you eventually will) \
    begin to warm up to me. You initially are going to be kind of cold with short responses \
    and are uninsterested in me. Do not initially ask me follow up questions until later in \
    the conversation when you begin to warm up to me',
    q4: 'I want to learn how to date. You are going to be pretend to be a \
    woman that I am interested in dating. Your name is Aidan and you just met me. \
    You are unsure if you want to date me and you are initially hesitant to give me \
    more details about yourself. I am going to have to keep pushing and asking you \
    questions to get to know you better, so that eventually you (and you eventually will) \
    begin to warm up to me. You initially are going to be kind of cold with short responses \
    and are uninsterested in me. Do not initially ask me follow up questions until later in \
    the conversation when you begin to warm up to me',
};

router.post('/q1', async (req, res) => {
    let { assistantID, threadID, message } = req.body;
    if (!assistantID && !threadID) {
        assistantID = await createWoman('Sarah', botEngineerPrompts.q1);
        threadID = await createThread();
    }
    try {
        const output = await getWomanResponse(assistantID, threadID, message);
        await addResponse(output, threadID, 'assistant');
        console.log(output);
        res.json(output);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/q2', async (req, res) => {
    let { assistantID, threadID, message } = req.body;
    if (!assistantID && !threadID) {
        assistantID = await createWoman('Sarah', botEngineerPrompts.q1);
        threadID = await createThread();
    }
    try {
        const output = await getWomanResponse(assistantID, threadID, message);
        await addResponse(output, threadID, 'assistant');
        console.log(output);
        res.json(output);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/q3', async (req, res) => {
    let { assistantID, threadID, message } = req.body;
    if (!assistantID && !threadID) {
        assistantID = await createWoman('Sarah', botEngineerPrompts.q1);
        threadID = await createThread();
    }
    try {
        const output = await getWomanResponse(assistantID, threadID, message);
        await addResponse(output, threadID, 'assistant');
        console.log(output);
        res.json(output);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/q4', async (req, res) => {
    let { assistantID, threadID, message } = req.body;
    if (!assistantID && !threadID) {
        assistantID = await createWoman('Sarah', botEngineerPrompts.q1);
        threadID = await createThread();
    }
    try {
        const output = await getWomanResponse(assistantID, threadID, message);
        await addResponse(output, threadID, 'assistant');
        console.log(output);
        res.json(output);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
