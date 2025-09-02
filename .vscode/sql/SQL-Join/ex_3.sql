-- Query to count cabbage patients
SELECT COUNT(*) AS cabbage_patients
FROM patients
WHERE disease = 'Cabbage disease';