import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI();

const getGrades = async (goalNumber: number, message: string) => {
    let goal = 'to flirt';
    if (goalNumber === 1) {
        goal = 'for me to say hello to you';
    } else if (goalNumber === 2) {
        goal = 'to introduce myself in a kind, friendly, and open manner';
    } else if (goalNumber === 3) {
        goal = 'to get your number';
    } else if (goalNumber === 4) {
        goal = 'to successfully setup a date with you';
    }
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are juding a conversation between me and another AI model. \
I am learning how to flirt by practicing with this woman AI model. The woman AI is labelled "ai" while I am labelled "user". \
"user"'s goal in this conversation is: ${goal}. \
Judge this conversation very rigorously and strictly based upon these criteria: brevity, romance, and confidence. \
Provide an overall score for "user" based on these criteria between 1 to 90. Also provide feedback. \
Response to my message with no unnecessary text, in this format { score: <number>, feedback: <feedback> }.`,
                },
                { role: 'user', content: message },
            ],
            model: 'gpt-3.5-turbo-0125',
        });
        console.log(completion.choices[0].message.content);
    } catch (error) {
        console.log(error);
    }
};

export default getGrades;
