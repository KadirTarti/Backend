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

--^* Relation Database / İlişkisel veritabanı
-- aynı satırda farklı base'lerden album ismi ve şarkıcıyı listelemek
SELECT * from Album a JOIN Artist c ON a.ArtistId  = c.ArtistId;

-- üsttekinde 2 defa artistId görmüştük. Bu tablo daha temiz... bunda yıldız yerine istediğimiz kolonları görüyoruz
SELECT a.AlbumId, a.Title, c.Name from Album a JOIN Artist c ON a.ArtistId  = c.ArtistId;

SELECT * FROM Artist a JOIN Album l ON a.ArtistId = l.ArtistId;

-- soluna ekleme
SELECT * FROM Artist a LEFT JOIN Album l ON a.ArtistId = l.ArtistId;

--sağına ekleme
SELECT * FROM Artist a RIGHT JOIN Album l ON a.ArtistId = l.ArtistId;

-- *** functions ***
SELECT * FROM Invoice i JOIN InvoiceLine l ON i.InvoiceId = l.InvoiceId;

SELECT i.Total AS 'Toplam Tutar' FROM Invoice i JOIN InvoiceLine l ON i.InvoiceId = l.InvoiceId;


--zzzzzzzzzzzzzzzzzzzzzzzzzz--

SELECT count(i.InvoiceId) FROM Invoice i JOIN InvoiceLine l on i.InvoiceLineId = l.InvoiceLineId;

SELECT count(i.InvoiceId) FROM Invoice i;

SELECT count(l.InvoiceLineId) FROM InvoiceLine l;


SELECT SUM(i.Total) FROM Invoice i;
select * from Invoice;

SELECT SUM(i.Total)*2 FROM Invoice i;


SELECT i.InvoiceId, i.Total FROM Invoice i WHERE i.InvoiceId IN (1,4,6,22);
SELECT SUM(i.Total)*2 FROM Invoice i where i.InvoiceId IN (1,4,6,22);
SELECT avg(i.Total) from Invoice i where i.InvoiceId IN (1,4,6,22);

SELECT round(sum(i.Total), 2) from Invoice i where i.InvoiceId in (1,5,7,12); -- round yuvarlama... 2 de virgülden sonrasındaki iki basamak


SELECT min(i.Total) FROM Invoice i WHERE i.InvoiceId IN (1,4,6,22);

SELECT max(i.Total) FROM Invoice i WHERE i.InvoiceId IN (1,4,6,22);

SELECT a.AlbumId, a.Title, length(a.Title) as 'Title Uzunluk', a.ArtistId from Album a;


--^* GROUP BY

-- tüm bilgileri getir, başta country olsun
SELECT Country, * FROM Customer;

-- DISTINC komutu group by'a bvenzer ama count vermez. sadece listeler
SELECT DISTINCT(Country) FROM Customer;

-- bu ülkeden kaç kayıt var count altında listele :
SELECT count(*), Country FROM Customer GROUP BY Country;
