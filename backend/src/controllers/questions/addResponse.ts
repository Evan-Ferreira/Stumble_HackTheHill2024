import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI();

const addMessage = async (
    message: string,
    threadID: string,
    speakerType: 'user' | 'assistant'
) => {
    const threadMessages = await openai.beta.threads.messages.create(threadID, {
        role: speakerType,
        content: message,
    });
};

export default addMessage;
