import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

async function generarHaiku() {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "user", content: "write a haiku about AI" },
    ],
  });

  console.log("Haiku generado:");
  console.log(completion.choices[0].message.content);
}

generarHaiku();
