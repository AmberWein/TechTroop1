const sequelize = require('../db');
const pokemonData = require('../poke_data.json');

async function migrate() {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');

    const typeMap = new Map();
    const townMap = new Map();
    const trainerMap = new Map();

    for (const p of pokemonData) {
      // 1. Insert type
      let typeId;
      if (!typeMap.has(p.type)) {
        const [result] = await sequelize.query(
          'INSERT INTO pokemon_type (name) VALUES (?)',
          { replacements: [p.type] }
        );
        typeId = result.insertId;
        typeMap.set(p.type, typeId);
      } else {
        typeId = typeMap.get(p.type);
      }

      // 2. Insert trainers & towns
      const trainerIds = [];
      for (const owner of p.ownedBy) {
        // Town
        let townId;
        if (!townMap.has(owner.town)) {
          const [result] = await sequelize.query(
            'INSERT INTO town (name) VALUES (?)',
            { replacements: [owner.town] }
          );
          townId = result.insertId;
          townMap.set(owner.town, townId);
        } else {
          townId = townMap.get(owner.town);
        }

        // Trainer
        let trainerId;
        if (!trainerMap.has(owner.name)) {
          const [result] = await sequelize.query(
            'INSERT INTO trainer (name, town_id) VALUES (?, ?)',
            { replacements: [owner.name, townId] }
          );
          trainerId = result.insertId;
          trainerMap.set(owner.name, trainerId);
        } else {
          trainerId = trainerMap.get(owner.name);
        }

        trainerIds.push(trainerId);
      }

      // 3. Insert pokemon
      await sequelize.query(
        'INSERT INTO pokemon (id, name, height, weight, type_id) VALUES (?, ?, ?, ?, ?)',
        { replacements: [p.id, p.name, p.height, p.weight, typeId] }
      );

      // 4. Insert pokemon_trainer
      for (const trainerId of trainerIds) {
        await sequelize.query(
          'INSERT INTO pokemon_trainer (pokemon_id, trainer_id) VALUES (?, ?)',
          { replacements: [p.id, trainerId] }
        );
      }
    }

    console.log('Migration complete!');
  } catch (err) {
    console.error(err);
  } finally {
    await sequelize.close();
  }
}

migrate();