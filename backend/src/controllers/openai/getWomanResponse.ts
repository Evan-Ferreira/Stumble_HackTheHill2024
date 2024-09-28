import OpenAI from 'openai';
import dotenv from 'dotenv';
import addResponse from './addResponse';

dotenv.config();
const openai = new OpenAI();

async function getWomanResponse(
    assistantID: string,
    threadID: string,
    message: string
) {
    try {
        addResponse(message, threadID, 'user');
        const run = await openai.beta.threads.runs.createAndPoll(threadID, {
            assistant_id: assistantID,
        });
        const messages = await openai.beta.threads.messages.list(threadID);
        const data: any = messages.data[0].content[0];
        const response = data.text.value;
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default getWomanResponse;
