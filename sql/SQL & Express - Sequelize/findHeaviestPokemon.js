const sequelize = require('./db');

async function findHeaviestPokemon() {
  try {
    const [results] = await sequelize.query(
      `SELECT name, weight
       FROM pokemon
       WHERE weight = (SELECT MAX(weight) FROM pokemon)`
    );

    if (results.length > 0) {
      console.log('Heaviest Pokémon:', results.map(p => p.name));
      return results.map(p => p.name);
    } else {
      console.log('No Pokémon found.');
      return [];
    }
  } catch (err) {
    console.error('Error querying database:', err);
    return [];
  }
}

findHeaviestPokemon();