select * FROM Customer;
SELECT * FROM Customer WHERE CustomerId IN  (1,4,8,45) and (Country= 'Brazil' or Country='USA') or CustomerId=45;

-- daha kısa yazmaya çalışmak lazım (refactoring)
SELECT * FROM Customer 
WHERE Country 
IN  ('USA','Brazil','Denmark') 
and (CustomerId BETWEEN 24 and 30);