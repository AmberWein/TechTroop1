-- Query to get survival rates of sick patients, ordered by ID
SELECT p.id, d.survival_rate
FROM patient p
JOIN disease d
    ON p.disease = d.name
WHERE p.disease != 'healthy'
ORDER BY p.id ASC;