require('dotenv').config();
const sequelize = require('./db');

async function getTrainerPokemon(trainerName) {
  try {
    const [results] = await sequelize.query(
      `SELECT p.name
       FROM pokemon p
       JOIN pokemon_trainer pt ON p.id = pt.pokemon_id
       JOIN trainer t ON pt.trainer_id = t.id
       WHERE t.name = ?`,
      { replacements: [trainerName] }
    );

    return results.map(row => row.name);
  } catch (err) {
    console.error('Error querying database:', err);
    return [];
  } finally {
    await sequelize.close();
  }
}

getTrainerPokemon('Loga').then(pokemon => console.log(pokemon));