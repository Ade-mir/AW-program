-- OPPGAVE 1-6: 

CREATE TABLE kurs
(
    ID SERIAL,
    Navn Text NOT NULL UNIQUE,
    By TEXT DEFAULT 'Oslo',
    Fradato DATE NOT NULL,
    Tildato DATE NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE Konsulent
(
	ID SERIAL PRIMARY KEY,
	Navn TEXT NOT NULL UNIQUE,
	Adresse TEXT NOT NULL,
	Telefon BIGINT NOT NULL,
	Kurs_ID INT NOT NULL,
	FOREIGN KEY (kurs_ID) REFERENCES kurs (ID)
);

CREATE TABLE Epost
(
	Adresse TEXT NOT NULL PRIMARY KEY,
	Konsulent_ID INT NOT NULL,
	FOREIGN KEY (konsulent_ID) REFERENCES konsulent (ID)
);

CREATE TABLE Modul
(
	ID INT NOT NULL PRIMARY KEY,
	Tittel TEXT NOT NULL UNIQUE
);

CREATE TABLE Kurs_Modul
(	
	Kurs_ID INT NOT NULL,
	Modul_ID INT NOT NULL,
	PRIMARY KEY (Kurs_ID, Modul_ID),
	FOREIGN KEY (Kurs_ID) REFERENCES Kurs (ID),
	FOREIGN KEY (Modul_ID) REFERENCES Modul (ID)
);

-- NEEDED to run this code because I had set the Kurs_Modul_Modul_ID and the Modul_ID as TYPE: INT when they need to be TYPE: TEXT, because of the formatting fo the modul codes. So I needed to remove the constraint between them, and then change their types to text and then remake the constraint. The code below does this.

ALTER TABLE Kurs_Modul
DROP CONSTRAINT kurs_modul_modul_id_fkey;

ALTER TABLE Kurs_Modul
ALTER COLUMN Modul_ID TYPE TEXT;

ALTER TABLE Modul
ALTER COLUMN ID TYPE TEXT;

ALTER TABLE Kurs_Modul
ADD FOREIGN KEY (Modul_ID) REFERENCES Modul (ID);

-- OPPGAVE 7: 

-- Adding the modules
-- Registrer følgende moduler - id / tittel: (legg gjerne til flere moduler selv!) 
-- JV-OSL-01 / Introduction to programming 
-- JV-OSL-02 / GitHub and Unit Testing 
-- JV-OSL-03 / Intermediate programming 
-- JV-OSL-04 / Relational databases 
-- JS-OSL-01 / UX og UI design 
-- JS-OSL-02 / JavaScript basics 
-- JS-OSL-03 / External JS tools 
-- JS-OSL-04 / React in-depth

INSERT INTO modul (ID, Tittel) VALUES 
	('JV-OSL-01', 'Introduction to programming'),
    ('JV-OSL-02', 'GitHub and Unit Testing'),
    ('JV-OSL-03', 'Intermediate programming'),
    ('JV-OSL-04', 'Relational databases'),
    ('JS-OSL-01', 'UX og UI design'),
    ('JS-OSL-02', 'JavaScript basics'),
    ('JS-OSL-03', 'External JS tools'),
    ('JS-OSL-04', 'React in-depth');

-- OPPGAVE 9:
-- Lag koplinger mellom moduler og kurs slik at resultatet blir: 
-- Ved "C# Oslo Sommer 2023" undervises alle moduler over unntatt JS-OSL-04.  
-- Ved "JavaScript Oslo Høst 2023" undervises alle JS-moduler pluss JV-OSL-02.

INSERT INTO kurs_modul (kurs_ID, modul_ID) VALUES
	(2, 'JV-OSL-01'),
	(2, 'JV-OSL-02'),
	(2, 'JV-OSL-03'),
	(2, 'JV-OSL-04'),
	(2, 'JS-OSL-01'),
	(2, 'JS-OSL-02'),
	(2, 'JS-OSL-03');

INSERT INTO kurs_modul (kurs_ID, modul_ID) VALUES
	(3, 'JS-OSL-01'),
	(3, 'JS-OSL-02'),
	(3, 'JS-OSL-03'),
	(3, 'JS-OSL-04'),
	(3, 'JV-OSL-02');


-- OPPGAVE 10: Registrer noen konsulenter ved en av eller begge studieretningene.

INSERT INTO konsulent (navn, adresse, telefon, kurs_id) VALUES
	('Roar Roarsen', 'Gamlegaten 19, Oslo', 33345678, 2);

-- OPPGAVE 11: Lag en spørring der man får hentet ut hvilke emner en konsulent følger, basert på navn.

SELECT konsulent.navn, kurs.navn
FROM konsulent
JOIN kurs ON konsulent.kurs_id = kurs.id;