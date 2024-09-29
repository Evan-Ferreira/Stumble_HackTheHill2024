import { Schema, model } from 'mongoose';

const openAISchema = new Schema({
    question: { type: Number, required: true },
    assistantID: { type: String, required: true },
    threadID: { type: String, required: true },
});

const OpenAI = model('OpenAI', openAISchema);

export default OpenAI;
