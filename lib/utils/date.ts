export function formatDate(date: Date | string): string {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return date.toISOString().split('T')[0];
}

export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}