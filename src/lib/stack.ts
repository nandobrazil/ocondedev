const stackPalette = ['#6647f0', '#0091ff', '#00c07a', '#fa24ce', '#fd8461', '#16c0a4', '#bc3fda', '#4fb9fa'];

export const stackInitials = (name: string) => {
  const words = name.replace(/[^\p{L}\p{N}\s.]/gu, ' ').trim().split(/\s+/);
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
  const word = words[0].replace(/^\./, '');
  return (word[0] + (word.slice(1).match(/[A-Z0-9]/)?.[0] ?? word[1] ?? '')).toUpperCase();
};

export const stackColor = (name: string) => {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return stackPalette[hash % stackPalette.length];
};
