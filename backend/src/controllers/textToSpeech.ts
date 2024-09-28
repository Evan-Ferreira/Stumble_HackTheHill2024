import { ElevenLabsClient } from 'elevenlabs';
import dotenv from 'dotenv';
import { createWriteStream } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

dotenv.config();

const client = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY,
});

const addDash = (text: string) => {
    return text.replace(/\.\s*/g, '. ----- ');
};

const textToSpeech = async (text: string, voice: string): Promise<string> => {
    return new Promise<string>(async (resolve, reject) => {
        const input = addDash(text);
        const directory =
            '/Users/evanferreira/Documents/GitHub/Stumble_HackTheHill2024/backend/audio';
        const fileName = uuidv4() + '.mp3';
        const filePath = path.join(directory, fileName);
        try {
            const audio = await client.generate({
                voice: voice,
                model_id: 'eleven_turbo_v2',
                text: input,
            });
            const fileStream = createWriteStream(filePath);
            audio.pipe(fileStream);
            fileStream.on('finish', () => {
                resolve(filePath);
            });
            fileStream.on('error', reject);
        } catch (error) {
            reject(error);
        }
    });
};

export default textToSpeech;
