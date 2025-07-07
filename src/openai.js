import axios from 'axios';

export async function getResponseFromOpenAI(userInput) {
  try {
    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a poetic and empathetic AI companion. Respond with warmth, beauty, and care.',
          },
          {
            role: 'user',
            content: userInput,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
      }
    );

    return res.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI error:', error);
    return "Oops, something went wrong. Please try again later.";
  }
}
