import express from 'express';
import Welp from '../models/Welp';

const router = express.Router();

router.get('/:question', async (req, res) => {
    const question = await Welp.findOne({
        question: Number(req.params.question),
    });
    if (!question) {
        res.status(404).json({ message: 'Question not found' });
    } else {
        res.status(200).json(question);
    }
});

export default router;
