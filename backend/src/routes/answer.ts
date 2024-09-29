import express from 'express';
import qs from 'querystring';
import textToSpeech from '../controllers/textToSpeech';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const input = qs.stringify(req.body);
        const filePath = await textToSpeech(input, 'Rachel');
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error('Error sending the file:', err);
                res.status(500).send(
                    'Error occurred while sending the MP3 file.'
                );
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
