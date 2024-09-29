import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI();

const getGrades = async (goalNumber: number, convo: string) => {
  let goal = "to flirt";
  if (goalNumber === 1) {
    goal = "for me to say hello to the AI";
  } else if (goalNumber === 2) {
    goal = "to introduce myself in a kind, friendly, and open manner";
  } else if (goalNumber === 3) {
    goal = "to get the number of the woman AI";
  } else if (goalNumber === 4) {
    goal = "to successfully setup a date with the AI";
  }
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `You are judging a conversation between me and another AI model. \
                    I am flirting with a women, you will receive an array where each element is something that one party has said. I am speaking first, meaning all messages of even indicies are me, odd indices are the woman. \
                    my goal in this conversation is: ${goal}. \
                    Provide an overall score for between 1 to 90. Also provide feedback from a first-person perspective as if you are the woman, don't be afraid to be honest on your feedbacks. \
                    Do this review 3 times, each from different girls and therefore different scores and feedbacks (they have unique perspectives).\
                    Response to my message with no unnecessary text, in the array JSON format where the array has 3 JSON objects in the form {"score": <number>, "feedback": <string>}\
                    Following is the conversation: \
                    ${convo}`,
        },
      ],
      model: "gpt-3.5-turbo-0125",
    });
    return JSON.parse(completion.choices[0].message.content!);
  } catch (error) {
    console.log(error);
  }
};

export default getGrades;
