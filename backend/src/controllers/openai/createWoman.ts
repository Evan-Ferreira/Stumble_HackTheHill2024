import OpenAI from 'openai';
import dotenv from 'dotenv';
import createThread from './createThread';

dotenv.config();

const openai = new OpenAI();

const createWoman = async (name: string, instructions: string) => {
    try {
        const assistant = await openai.beta.assistants.create({
            name: name,
            instructions: instructions,
            model: 'gpt-3.5-turbo-0125',
        });
        return assistant['id'];
    } catch (error) {
        console.log(error);
    }
};

export default createWoman;
