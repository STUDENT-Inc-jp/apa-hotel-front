export async function generateAIResponse(content: string, rating: number): Promise<string> {
  // TODO: 実際のAI APIと統合
  const responses = {
    high: 'お客様より高評価をいただき、誠にありがとうございます。スタッフ一同、さらなるサービス向上に努めてまいります。またのお越しを心よりお待ちしております。',
    medium: 'この度はご利用いただき、ありがとうございます。お客様のご意見を参考に、より良いサービスの提供に努めてまいります。',
    low: 'この度はご不便をおかけし、誠に申し訳ございませんでした。お客様のご指摘を真摯に受け止め、改善に取り組んでまいります。',
  };

  if (rating >= 4) return responses.high;
  if (rating <= 2) return responses.low;
  return responses.medium;
}