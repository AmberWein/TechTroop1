-- Create Ethnicity table
CREATE TABLE ethnicity (
    id INT PRIMARY KEY,
    name VARCHAR(20)
);

-- Create Gender table
CREATE TABLE gender (
    id INT PRIMARY KEY,
    name VARCHAR(20)
);

-- Create Symptoms table
CREATE TABLE symptoms (
    family INT PRIMARY KEY,
    fever BOOLEAN,
    blue_whelts BOOLEAN,
    low_bp BOOLEAN
);

-- Create Disease table
CREATE TABLE disease (
    name VARCHAR(20) PRIMARY KEY,
    survival_rate FLOAT
);

-- Create Patient table
CREATE TABLE patient (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ethnicity INT,
    gender INT,
    symptoms_family INT,
    disease VARCHAR(20),
    FOREIGN KEY (ethnicity) REFERENCES ethnicity(id),
    FOREIGN KEY (gender) REFERENCES gender(id),
    FOREIGN KEY (symptoms_family) REFERENCES symptoms(family),
    FOREIGN KEY (disease) REFERENCES disease(name)
);