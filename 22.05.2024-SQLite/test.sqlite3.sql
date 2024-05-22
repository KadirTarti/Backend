select * FROM Customer;
SELECT * FROM Customer WHERE CustomerId IN  (1,4,8,45) and (Country= 'Brazil' or Country='USA') or CustomerId=45;

-- daha kısa yazmaya çalışmak lazım (refactoring)
SELECT * FROM Customer 
WHERE Country 
IN  ('USA','Brazil','Denmark') 
and (CustomerId BETWEEN 24 and 30);

SELECT * from Customer WHERE Country like '%US%';  --ülkede US içerenler
SELECT * from Customer WHERE Country like 'U%'; --ülke U ile başlayanlar

--^* ORDER BY
-- desc tersten sıralatır
SELECT * from Customer ORDER BY CustomerId DESC;

-- Select * from Customer ORDER BY FirstName, LastName DESc WHERE CustomerID IN (14,55)   --HATA VERİR..HİYERARŞİ

Select * from Customer WHERE CustomerID IN (14,55) ORDER BY FirstName, LastName DESC;   -- Hiyerarşiyi doğru sıralamak gerekir. 

SELECT * FROM Customer LIMIT 15,10; --15'den başka 10 kayıt getir 

--& hiyerarşi between----> order by limit and where
Select * from Customer WHERE CustomerID IN (14,55) ORDER BY FirstName, LastName DESC LIMIT 0,2; -- burada 0'dan veya 1den başlatmak zorundayız limiti. çünkü 2 kişi var. başlatmasak hata verir. ikinci parametre çok önemli değil.Address

--^* SUM
select SUM(Total) as total from Invoice;