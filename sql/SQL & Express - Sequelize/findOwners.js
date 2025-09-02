require('dotenv').config();
const sequelize = require('./db');

async function findOwners(pokemonName) {
  try {
    const [results] = await sequelize.query(
      `SELECT t.name
       FROM trainer t
       JOIN pokemon_trainer pt ON t.id = pt.trainer_id
       JOIN pokemon p ON pt.pokemon_id = p.id
       WHERE p.name = ?`,
      { replacements: [pokemonName] }
    );

    // map results to just trainer names
    return results.map(row => row.name);
  } catch (err) {
    console.error('Error querying database:', err);
    return [];
  } finally {
    await sequelize.close();
  }
}

// example usage:
findOwners('gengar').then(trainers => console.log(trainers));