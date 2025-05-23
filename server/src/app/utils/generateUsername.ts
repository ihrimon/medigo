export function generateUsername(fullName: string): string {
  const firstName = fullName.split(' ')[0].toLowerCase();
  const randomNumber = Math.floor(100 + Math.random() * 900); // 100-999 পর্যন্ত র‍্যান্ডম সংখ্যা
  return `${firstName}${randomNumber}`;
}
