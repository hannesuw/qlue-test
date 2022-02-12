-- Number 1

SELECT p.name, sum(i.price::integer * t.total) AS total_price FROM TRANSACTIONS T 
JOIN PERSONS P 
ON t.person_id = p.id
JOIN ITEMS I 
ON t.item_id = i.id
GROUP BY p.name;

-- Number 2

SELECT p.name, i.name, t.date FROM TRANSACTIONS T 
JOIN PERSONS P 
ON t.person_id = p.id
JOIN ITEMS I 
ON t.item_id = i.id
WHERE t.date BETWEEN '2020-01-01' AND '2020-06-25';

-- Number 3

SELECT  p.name, COUNT(DISTINCT i.name) AS variety_items FROM TRANSACTIONS T 
JOIN PERSONS P 
ON t.person_id = p.id
JOIN ITEMS I 
ON t.item_id = i.id
GROUP BY p.name
ORDER BY variety_items DESC;