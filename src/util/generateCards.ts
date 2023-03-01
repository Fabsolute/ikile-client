import shuffle from './shuffle';

const colors = [
  '#FF0000',
  '#00FFFF',
  '#0000FF',
  '#00008B',
  '#800080',
  '#00FF00',
  '#FF00FF',
  '#FFC0CB',
  '#FFA500',
  '#A52A2A',
  '#800000',
];

const types = [
  'adventurer',
  'adventurer-neutral',
  'avataaars',
  'avataaars-neutral',
  'big-ears',
  'big-ears-neutral',
  'big-smile',
  'bottts',
  'bottts-neutral',
  'croodles',
  'fun-emoji',
  'icons',
  'identicon',
  'lorelei',
  'lorelei-neutral',
  'micah',
  'miniavs',
  'open-peeps',
  'personas',
  'pixel-art',
  'thumbs',
];

export default function generateCards(primeNumber: number) {
  const decks = [];

  for (let i = 0; i < primeNumber + 1; i++) {
    decks.push([1]);
    for (let j = 0; j < primeNumber; j++) {
      decks[i].push((j + 1) + (i * primeNumber) + 1);
    }
  }

  for (let i = 0; i < primeNumber; i++) {
    for (let j = 0; j < primeNumber; j++) {
      decks.push([i + 2]);
      for (let k = 0; k < primeNumber; k++) {
        const val = (primeNumber + 1 + primeNumber * k + (i * k + j) % primeNumber) + 1;
        decks[decks.length - 1].push(val);
      }
    }
  }

  return shuffle(decks).map(deck => shuffle(deck).map(card => ({
    id: card,
    url: `https://api.dicebear.com/5.x/${types[(card - 1) % types.length]}/svg?seed=${card}`,
    color: colors[(card - 1) % colors.length],
  })));
}

