export const getCategoryData = (category) => {
  const db = {
    potions: [
      { name: 'Polyjuice Potion', description: 'A potion that allows the drinker to assume the form of someone else.' },
      { name: 'Felix Felicis', description: 'Also known as Liquid Luck, makes the drinker lucky.' }
    ],
    charms: [
      { name: 'Accio', description: 'Summoning Charm, brings an object to the caster.' },
      { name: 'Lumos', description: 'Creates light at the tip of the caster’s wand.' }
    ]
  };
  return db[category] || [];
};