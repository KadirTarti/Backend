SELECT Name, Composer FROM tracks;
SELECT * from tracks;
SELECT DISTINCT Composer FROM tracks;
SELECT DISTINCT AlbumId, MediaTypeId from tracks;
SELECT Name from tracks WHERE Composer='Jorge Ben';
SELECT * from invoices where Total > 25;
SELECT * from invoices WHERE Total < 15 LIMIT 5; 
SELECT * from invoices where Total > 10 ORDER BY Total DESC LIMIT 2;
SELECT * FROM invoices WHERE BillingCountry <>"Canada" ORDER BY Total LIMIT 10;
SELECT InvoiceId, CustomerId, Total FROM invoices ORDER BY CustomerId, Total DESC;
SELECT Name FROM tracks where Name LIKE 'B%S';
SELECT InvoiceDate FROM invoices where InvoiceDate BETWEEN "2008-01-01" AND "2011-01-01" ORDER BY InvoiceDate DESC LIMIT 1;
SELECT FirstName, LastName FROM customers WHERE Country IN ('Belgium', 'Norway');
SELECT Name FROM tracks WHERE Composer LIKE '%Zappa';
SELECT COUNT(*) FROM tracks;
SELECT COUNT(*) FROM invoices;
SELECT COUNT(DISTINCT Composer) from tracks;
SELECT AlbumId, COUNT(*) AS number_of_tracks FROM tracks GROUP BY AlbumId ORDER BY number_of_tracks DESC;
SELECT Name, MIN(Milliseconds) as Min, MAX(Milliseconds) as Max FROM tracks;
SELECT AVG(Milliseconds) FROM tracks;
SELECT * FROM tracks WHERE Milliseconds < (SELECT AVG(Milliseconds) FROM tracks);
SELECT Composer, COUNT(*) FROM tracks WHERE Composer IS NOT NULL GROUP BY Composer;
SELECT Composer, COUNT(*) FROM tracks GROUP BY Composer;
SELECT tracks.Name, genres.Name FROM tracks JOIN genres ON tracks.GenreId = genres.GenreId;
SELECT albums.Title, artists.Name from artists LEFT JOIN albums ON albums.ArtistId = artists.ArtistId;

--! from ve join yerleri değişse de veri aynı
SELECT tracks.AlbumId, albums.Title, MIN(tracks.Milliseconds) AS min_duration FROM tracks JOIN albums ON tracks.AlbumId = albums.AlbumId GROUP BY albums.AlbumId ORDER BY  min_duration DESC;

SELECT tracks.AlbumId, albums.Title, MIN(tracks.Milliseconds) AS min_duration FROM albums JOIN tracks ON tracks.AlbumId = albums.AlbumId GROUP BY albums.AlbumId ORDER BY  min_duration DESC;

SELECT albums.Title, SUM(tracks.Milliseconds) AS total_duration FROM tracks JOIN albums ON tracks.AlbumId = albums.AlbumId GROUP BY tracks.AlbumId HAVING  total_duration > 3600000 ORDER BY total_duration DESC;


--! and veya or'u in içerisine eklersek sağ ve solundakileri ignore ediyor. IN içinde ararken or veya and kullanmıyoruz!!
SELECT TrackId, Name, AlbumId 
FROM tracks WHERE AlbumId 
IN (SELECT AlbumId FROM albums WHERE Title 
IN('Prenda Minha', 'Heart of the Night' OR 'Out of Exile'));

--& üstteki ile aynı çözüm:
SELECT tracks.TrackId, tracks.Name, albums.AlbumId 
FROM tracks JOIN albums 
ON tracks.AlbumId = albums.AlbumId WHERE albums.Title 
IN ('Prenda Minha', 'Heart of the Night', 'Out of Exile');