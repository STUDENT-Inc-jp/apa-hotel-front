import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function generateAIResponse(content: string, rating: number): Promise<string> {
  try {
    const response = await axios.post(`${API_URL}/webhook`, {
      user_input: content,
      user_name: 'フロントスタッフ', // デフォルト値
    });

    return response.data.reply;
  } catch (error) {
    console.error('AI Response Error:', error);
    throw new Error('AI回答の生成に失敗しました');
  }
}