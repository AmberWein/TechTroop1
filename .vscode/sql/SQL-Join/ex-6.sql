-- Query to count the number of patients with the "lettuce" disease, grouped by ethnicity
SELECT 
    e.name AS ethnicity,
    COUNT(*) AS patient_count
FROM 
    patient p
JOIN 
    ethnicity e ON p.ethnicity = e.id
WHERE 
    p.disease = 'lettuce'
GROUP BY 
    e.name;