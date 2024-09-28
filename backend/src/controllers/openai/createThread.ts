import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI();

const createThread = async () => {
    try {
        const thread = await openai.beta.threads.create();
        return thread['id'];
    } catch (error) {
        console.log(error);
    }
};

export default createThread;
