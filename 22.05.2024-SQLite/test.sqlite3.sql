select * FROM Customer;
SELECT * FROM Customer WHERE CustomerId IN  (1,4,8,45) and (Country= 'Brazil' or Country='USA') or CustomerId=45;