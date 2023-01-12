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

--5 OG 6.  Summerer hva totalt folketall registrert i World databasen er, og kaller sum-kolonnen for 
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