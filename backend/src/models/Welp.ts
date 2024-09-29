import { Schema, model } from 'mongoose';

const welpSchema = new Schema({
    question: { type: Number, required: true },
    message: { type: [String], required: true },
});

const Welp = model('Welp', welpSchema);

export default Welp;
