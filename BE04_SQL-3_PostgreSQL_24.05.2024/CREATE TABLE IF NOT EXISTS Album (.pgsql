CREATE TABLE IF NOT EXISTS Album (
    AlbumId INT NOT NULL AUTO_INCREMENT,
    Title VARCHAR(160) NOT NULL, --not null: mutlaka veri girilmeli!
    CONSTRAINT Pk_Album PRIMARY KEY (AlbumId)
);

