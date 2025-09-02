-- Query to count sick patients
SELECT COUNT(*) AS sick_patients
FROM patient
WHERE disease IN ('Lettuce disease', 'Cabbage disease');