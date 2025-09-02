require('dotenv').config();
const sequelize = require('./db');

async function findByType(typeName) {
  try {
    const [results] = await sequelize.query(
      `SELECT p.name
       FROM pokemon p
       JOIN pokemon_type pt ON p.type_id = pt.id
       WHERE pt.name = ?`,
      { replacements: [typeName] }
    );

    return results.map(row => row.name);
  } catch (err) {
    console.error('Error querying database:', err);
    return [];
  } finally {
    await sequelize.close();
  }
}

-- Example usage:
findByType('grass').then(names => console.log(names));