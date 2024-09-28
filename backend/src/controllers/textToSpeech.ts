import { ElevenLabsClient } from 'elevenlabs';
import dotenv from 'dotenv';
import { createWriteStream } from 'fs';

dotenv.config();

const client = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY,
});

const addDash = (text: string) => {
    return text.replace(/\.\s*/g, '. ----- ');
};

const textToSpeech = async (
    text: string,
    id: string,
    voice: string
): Promise<string> => {
    return new Promise<string>(async (resolve, reject) => {
        const input = addDash(text);
        try {
            const audio = await client.generate({
                voice: voice,
                model_id: 'eleven_turbo_v2',
                text: input,
            });
            const fileName = `${id}.mp3`;
            const fileStream = createWriteStream(fileName);

            audio.pipe(fileStream);
            fileStream.on('finish', () => {
                resolve(fileName), console.log(`File saved as ${fileName}`);
            });
            fileStream.on('error', reject);
        } catch (error) {
            reject(error);
        }
    });
};

export default textToSpeech;
