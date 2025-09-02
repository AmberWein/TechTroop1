-- Drop tables if they exist
DROP TABLE IF EXISTS pokemon_trainer;
DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS trainer;
DROP TABLE IF EXISTS town;
DROP TABLE IF EXISTS pokemon_type;

-- Table: pokemon_type
CREATE TABLE pokemon_type (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);
-- Table: town
CREATE TABLE town (
     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Table: trainer
CREATE TABLE trainer (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    town_id INT UNSIGNED,
    FOREIGN KEY (town_id) REFERENCES town (id)
);
-- Table: pokemon
CREATE TABLE pokemon (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    height INT,
    weight INT,
    type_id INT UNSIGNED,
    FOREIGN KEY (type_id) REFERENCES pokemon_type(id)
);

-- Table: pokemon_trainer (join table)
CREATE TABLE pokemon_trainer (
    pokemon_id INT UNSIGNED,
    trainer_id INT UNSIGNED,
    PRIMARY KEY (pokemon_id, trainer_id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
    FOREIGN KEY (trainer_id) REFERENCES trainer(id)
);