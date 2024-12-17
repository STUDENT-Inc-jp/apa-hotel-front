export function isValidRating(rating: number): boolean {
  return rating >= 1 && rating <= 5;
}

export function isValidContent(content: string): boolean {
  return content.length > 0 && content.length <= 1000;
}

export function isValidRespondentName(name: string): boolean {
  return name.length > 0 && name.length <= 50;
}