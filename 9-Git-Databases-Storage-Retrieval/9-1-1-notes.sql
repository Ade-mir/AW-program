-- 1.  Henter alle data fra city tabellen:
SELECT *
FROM city;

-- 2.  Plukker ut alle data for Norge (CountryCode = 'NOR') i city tabellen:
SELECT *
FROM city
WHERE countryCode = 'NOR';

-- 3.  Plukker ut bynavn og befolkning (Name, Population) for Norge i city tabellen.  

SELECT Name, Population
FROM city
WHERE countryCode = 'NOR';

--4. Teller opp hvor mange land som finnes i databasen. (Tips: Se funksjonene som er oppgitt på en slide mot slutten av forelesningen.) 

SELECT COUNT(*) code
FROM country;

--5.  Summerer hva totalt folketall registrert i World databasen er, og kaller sum-kolonnen for 
WorldPopulation:

SELECT SUM(population) AS WorldPopulation
FROM country
WHERE continent = 'Asia';

SELECT * -- This is a comment
FROM city;

-- To fnutt or double fnutt: Double i AS / alias.

SELECT *
FROM city
WHERE CountryCode = 'NOR'
ORDER BY Name ASC;

-- 8:
SELECT name, lifeexpectancy, population
FROM country
ORDER BY lifeexpectancy DESC, population ASC;

-- 2.1: Lager en rangert liste over land etter antall mennesker per kvadratkilometer.   Tips: Se etter tabell som inneholder befolkning og km2 for å komme i gang. Bruk matematiske  operatorer ( +, -, * eller / ) i spørringen. 

SELECT name, population / surfaceArea AS "countryDensity"
FROM country
ORDER BY population / surfaceArea DESC;


-- 2.2: Summerer hva totalt folketall per verdensdel er, sortert på folketall (synkende rekkefølge). 

SELECT continent, SUM(population)
FROM country
-- WHERE går på databasen vi bruker "fra".
-- WHERE name LIKE 'B%'
GROUP BY continent
HAVING SUM(population) > 0
-- HAVING går på resultatet vi "får".
ORDER BY SUM (population) DESC;

-- 2.3 Dobbeltsjekk svaret fra oppgaven over ved å manuelt:  
-- a.  Summere tallene i svaret over for hånd (for eksempel på en kalkulator).  6,078,749,450
-- b.  Så lage en ny spørring som henter ut summen for hele verdens befolkning. 
-- c.  Er de to tallene like? (NB: World er en litt gammel database, det finnes nå flere mennesker i verden enn tallene i får opp her.) 

SELECT SUM(population) AS "worldPopulation"
FROM country
HAVING SUM(population) > 0
ORDER BY SUM (population) DESC;

-- SVAR: 6078749450 STEMMER

SELECT region, continent, COUNT(*), MIN(surfaceArea), MIN(surfaceArea), MAX(indepYear), AVG(lifeExpectancy), SUM(population)
FROM country
GROUP BY region, continent
ORDER BY continent ASC;

-- 2.4 List ut landkode, navn og uavhengighetsår, sortert på år og deretter navn, for alle land som har oppgitt et uavhengighetsår. (Tips: Noe med NULL, se på SQL syntaks arket for å se om dere finner en måte å få med NULL i en where clause spørring på, eller google it!      ) 

SELECT code, name, indepYear
FROM country
GROUP BY name, code, indepYear
HAVING indepYear > -300000
ORDER BY indepYear, name ASC;

-- 3.1 Hent ut alle land som har 'W' som mellomste bokstav i landkoden sin.

SELECT code, name
FROM country
WHERE SUBSTRING(code, 2, 1) LIKE '%W%'
ORDER BY name ASC;

-- 3.2 Hent ut alle data for landene som begynner på 'N', 'O' eller 'P'. Sorter de alfabetisk på navn

SELECT name
FROM country
WHERE SUBSTRING(name, 1, 1) LIKE '%N%'
OR SUBSTRING(name, 1, 1) LIKE '%O%'
OR SUBSTRING(name, 1, 1) LIKE '%P%'
ORDER BY name ASC;

-- 3.3 Hent ut alle språkdata for landene som har et offisielt språk som snakkes av 99% eller mer av befolkningen i landet. Sorter etter synkende prosentverdi, deretter alfabetisk på språk.

SELECT countrycode, language, percentage
FROM countryLanguage
WHERE isOfficial = true
AND percentage >= 99
-- OR SUBSTRING(name, 1, 1) LIKE '%P%'
ORDER BY percentage DESC, language ASC;

-- 3.4 Hent ut landkode, navn og kontinent for alle land i Amerika (både Nord-Amerika og SørAmerika). Sorter alfabetisk på landkode.

SELECT code, name, continent
FROM country
WHERE continent = 'North America'
OR continent = 'South America'
ORDER BY code ASC;

-- 3.6

SELECT COUNT (*) AS "numberOfCountries", continent
FROM country
-- WHERE "numberOfCountries" >= 0
-- OR continent = 'South America'
GROUP BY continent
HAVING COUNT (*) > 30
ORDER BY "numberOfCountries" DESC;

-- 9_2_1 Oppgave DDL & CRUD. Oppgave - begreper & terminologi. Gå sammen to og to, forklar kort/enkelt følgende terminologi og databasebegreper for hverandre/sammen:
-- • Primærnøkkel ("Primary Key" – PK)
-- • Fremmednøkkel ("Foreign Key" – FK)
-- • Løpenummer, altså SERIAL

-- The PRIMARY KEY constraint uniquely identifies each record in a table.
-- Primary keys must contain UNIQUE values, and cannot contain NULL values.
-- A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields)."

-- https://www.w3schools.com/sql/sql_primarykey.ASP

-- "The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.

-- A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.

-- The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table."

-- https://www.w3schools.com/sql/sql_foreignkey.asp

-- 1: Opprett tabellen person. Tabellen skal inneholde:
-- ID, SERIAL.
--Personnummer, CHAR(11), skal ikke kunne være null og skal være unik.
-- Navn, TEXT, skal ha defaultverdi 'Ukjent'.
-- Epost, TEXT, skal være unik.
-- Som primærnøkkel skal kolonnen ID angis.
-- Sjekk at tabellen er opprettet, evt. ved å refresh'e DB-tabell oversikten først.

CREATE TABLE person
(
ID SERIAL,
Personnummer CHAR(11) NOT NULL UNIQUE,
Navn TEXT DEFAULT 'Ukjent',
Epost TEXT UNIQUE,
PRIMARY KEY (ID)
);

-- 2: Legg inn en rad i tabellen person. Spesifiser følgende data: (opprett gjerne en kvinne i stedet)

-- Personnummer: '12345678901'
-- Navn: 'Ola Nordmann'
-- EPost: 'ola@nordmann.no'
-- Skriv en passende spørring for å se at dataene ligger i tabellen.

INSERT INTO person (personnummer, Navn, Epost)
VALUES ('12345678901', 'Ola Nordmann', 'ola@nordmann.no'
)

--3: Du finner ut at det er kjekt å registrere fødselsdato også. Modifiser den eksisterende person tabellen, så den også inneholder kolonnen:
-- Foedselsdato, DATE.
--Sjekk at tabellen har fått med seg endringene. (Tilsvarende fremgangsmåte som i oppg 1.)

ALTER TABLE person
ADD Foedselsdato DATE;

-- 4: Legg inn en ny rad i tabellen person. Spesifiser følgende data:
-- personnummer: '98765432109'
-- Skriv en passende spørring for å se at data ligger i tabellen som forventet

INSERT INTO person(personnummer)
VALUES (98765432109);

-- 5: Oppdater raden med personnummeret '98765432109', slik at Foedselsdato til denne blir
-- 1. januar 1990. Merk: Datofelt formateres internt i databasen, en mulighet er å oppgi det
-- slik: 'yyyy-mm-dd'. (I dette tilfellet er y = år, m = måned d = dag.) Evt. google hvordan du kan
-- sette inn dette på ønsket format (hvordan du bruker en funksjon for å angi dato på et
-- selvvalgt format).

UPDATE person
SET foedselsdato = '1990-01-01'
WHERE personnummer = '98765432109';

-- 6: Legg inn deg selv i person tabellen! Fyll inn alle felter (trenger ikke bruke ekte info da).

INSERT INTO person(personnummer, navn, epost, foedselsdato)
VALUES (98765432198, 'Ademir', 'ademir@email.no', '1000-01-01');

-- 7: Vi innser at databaseløsningen vår er litt snevert designet: Hver person kan bare ha 1 epost
-- adresse. Opprett en egen tabell epost med følgende kriterier:
-- Adresse, TEXT, skal ikke kunne være null og skal være unik.
-- Type, TEXT.
-- Person_ID, INT, skal ikke kunne være null.
-- Som primærnøkkel skal kolonnen Adresse angis.
-- Som fremmednøkkel Person_ID som refererer tabellen person sin kolonne ID.
-- Skriv en passende spørring for å se at tabellen er opprettet som forventet

CREATE TABLE epost
(
Adresse TEXT NOT NULL UNIQUE,
Type TEXT,
Person_ID INT NOT NULL,
PRIMARY KEY (Adresse),
FOREIGN KEY (Person_ID) REFERENCES Person(ID)
);

-- 8: Lag en tabell tilsvarende den i punkt 1 som heter personCopy. (Du trenger ikke kopiere
-- data inn i den.) Sjekk at denne er opprettet, før du sletter den igjen. (Poenget er å få testet
-- kommandoen for å slette tabell, uten å ødelegge de to fine tabellene du har jobbet med en
-- stund nå.)
-- Sjekk at tabellen er slettet.

-- 8.1

CREATE TABLE personCopy
(
ID SERIAL,
Personnummer CHAR(11) NOT NULL UNIQUE,
Navn TEXT DEFAULT 'Ukjent',
Epost TEXT UNIQUE,
PRIMARY KEY (ID)
);

-- 8.2

DROP TABLE personCopy;

-- 9: VANSKELIG! Skriv en SQL som kopierer epostadresser og IDer fra person tabellen over til
-- Adresse og Person_ID i epost tabellen. (Google detaljene, her må vi bruke en SELECT
-- statement som del av vår INSERT INTO statement.)
-- Skriv en passende spørring for å se at data ligger i tabellen som forventet.

UPDATE person
SET navn = 'Jon Johnsen'
WHERE personnummer = '98765432109';

INSERT INTO epost (Adresse, Person_ID)
SELECT epost, ID
FROM person;

-- 10: (Hvis du har klart oppgaven over)
-- Nå som vi har flyttet epost ut i en egen tabell, så kan vi slette epostkolonnen fra persontabellen. Vi ønsker å fjerne hele kolonnen, ikke bare dataene som ligger der.

ALTER TABLE person
DROP COLUMN epost;

-- 11: Hvis vi henter ut navn og fødselsdato fra person tabellen, kommer dato på
-- databasen sitt format. Omformater output så dato har formatet:
-- 31.01.2001 (<-- Eksempel på dato med ønsket format.)
-- Tips: Google PostgreSQL sine funksjoner for å omformatere dato output. (NB: Navn på
-- funksjon er avhengig av database, her er det forskjell på PostgreSQL, SQL Server og MySQL.)
-- Legg også inn dato for Ola Nordmann. Han skal ha fødselsdatoen 20.02.1912 (gammel
-- mann!). Skriv den inn på dette formatet, bruk en funksjon som gjør at databasen skjønner
-- hvilket format datoen kommer på.

UPDATE person
SET foedselsdato = TO_DATE('20.02.1950', 'DD.MM.YYYY')
WHERE id = '3';

-- 5.1:

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


-- Registrer noen konsulenter ved en av eller begge studieretningene.

INSERT INTO konsulent (navn, adresse, telefon, kurs_id) VALUES
	('Roar Roarsen', 'Gamlegaten 19, Oslo', 33345678, 2);

-- Lag en spørring der man får hentet ut hvilke emner en konsulent følger, basert på navn.

SELECT konsulent.navn, kurs.navn
FROM konsulent
JOIN kurs ON konsulent.kurs_id = kurs.id;

-- 9-3-2 JOIN

-- OPPGAVE 1: Hent ut alle byer som begynner og slutter på 'o' (stor bokstav først, liten bakerst) og deres 
-- befolkningstall. Sorter de alfabetisk. (Trenger foreløpig ikke JOIN. Tips: Husker du wildcards 
-- fra tidligere?) 

SELECT name
FROM city
WHERE name LIKE 'O%o';

-- OPPGAVE 2: Oppgave 1 ga mange spenstige bynavn, men hvor i all verden befinner disse byene seg!? Vi 
-- ønsker å få med navnet på landet som byene ligger i. Landet skal listes ut som en ny, første 
-- kolonne. Kolonnene blir altså: landsnavn, bynavn og bybefolkning. Vi ønsker svaret sortert 
-- alfabetisk på land, deretter på by. 
-- Problem: Da må vi spørre mot 2 tabeller på en gang! Gjør om spørringen fra oppg. 1 til en 
-- join spørring, der vi også tar med country tabellen, og henter ut navnet på landet fra 
-- denne.  
-- Tips: Du må finne ut hva som er felles kolonne (foreign key til primary key kopling) for disse 
-- to tabellene.

SELECT country.name AS Country, city.name AS City, city.population
FROM city
JOIN country ON country.code = city.countryCode
WHERE city.name LIKE 'O%o'
ORDER BY Country, City;

-- OPPGAVE 3: Hent ut alle land og deres (eventuelle) hovedsteder. Sorter resultatet på kontinent, og 
-- deretter alfabetisk på landets navn.

SELECT country.continent, country.name AS Country, city.name AS City
FROM city
JOIN country ON country.capital = city.id
ORDER BY Country, City;

-- OPPGAVE 4 Hent ut en oversikt over alle land som har minst én by, hvor mange byer de har og  gjennomsnittlig innbyggertall i disse byene.

--SELECT  *
--FROM city;

SELECT 
    country.name AS country, 
    COUNT(city.id) AS num_cities, 
    ROUND(AVG(city.population),0) AS avg_population
FROM 
    city
JOIN 
    country ON city.countryCode = country.code
GROUP BY 
    country.name
HAVING 
    COUNT(city.id) > 0
ORDER BY
	-- Country.name;
	num_cities DESC;
	--avg_population DESC;

-- OPPGAVE 5: Vi ønsker å få opp alle land i verden, og alle deres byer, der innbyggertallet i landet er under  1000 mennesker.  Vi vil se navnet på landet, befolkningen i landet, hvilket kontinent landet tilhører, navnet på evt. byer der, befolkning i evt. byer der. Vi ønsker resultatet sortert alfabetisk etter landenes navn. (Hint: Mitt svar gir 10 rader ut, er det samme antall rader du får?)

SELECT
	country.name AS Country,
	country.population AS Country_Population,
	country.continent,
	city.name AS City_Name,
	city.population AS City_Population
FROM 
    country
LEFT JOIN 
    city ON city.countryCode = country.code
WHERE 
	country.population < 1000

-- OPPGAVE 6: Ranger byene i verden som ligger i et land med en eller annen form for monarkisk styresett etter folketall. Den mest folkerike byen først.

SELECT
	city.name,
	city.population
FROM
	city
JOIN
	country ON city.countryCode = country.code
WHERE
	country.governmentForm LIKE '%Monarchy%'
ORDER BY
	city.population DESC;

-- OPPGAVE 7: Hent ut en liste med byer i verden som har minst 8.000.000 innbyggere, og hvilket kontinent de tilhører. Sorter etter innbyggertall, største først. Altså: byens navn, byens innbyggere og hvilket kontinent de tilhører.

SELECT
	city.name,
	city.population,
	country.continent
FROM
	city
JOIN
	country ON city.countryCode = country.code
WHERE
	city.population >= 8000000
ORDER BY
	city.population;

-- OPPGAVE 8: Lag en spørring som henter ut en oversikt over de landene i Asia der det snakkes minst 10 forskjellige språk. Spørringen skal hente ut: Navn på land, antall språk og dette skal sorteres synkende på antall språk.

hEI