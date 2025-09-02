
-- Query to count patients by symptoms family for those with cabbage disease
SELECT 
    symptoms_family, 
    COUNT(*) AS patient_count
FROM 
    patient
WHERE 
    disease = 'cabbage'
GROUP BY 
    symptoms_family;