import OpenAI from '../../models/OpenAI';

const questionExists = async (question: Number) => {
    const openAI = await OpenAI.findOne({ question });
    return !!openAI;
};

export default questionExists;
