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

SELECT
	country.name,
	COUNT(countryLanguage.language)
FROM
	country
JOIN
	countryLanguage ON country.code = countryLanguage.countryCode
GROUP BY
	country.name
HAVING
	COUNT(countryLanguage.language) >= 10
ORDER BY
	COUNT(countryLanguage.language) DESC;

-- OPPGAVE 9: Lag en spørring som henter ut land (representert med navn), hovedstad (representert med navn) og hvor mange språk som snakkes i landet. Sorter svaret synkende på antall språk, deretter alfabetisk (stigende) på land. Tips: Vi kan joine mer enn 2 tabeller, det er bare å gjenta «JOIN .. ON» flere ganger.

SELECT
    country.name AS country,
    city.name AS city,
    COUNT(countryLanguage.language) AS country_languages
FROM
    country
LEFT JOIN
    city ON country.code = city.countrycode
LEFT JOIN
    countryLanguage ON country.code = countryLanguage.countryCode
WHERE
    country.capital = city.id OR city.id IS NULL
GROUP BY
    country.name, city.name
ORDER BY
    country_languages DESC, country.name ASC;


-- OPPGAVE 10: GOOGLE IT! Svaret på 9, over, inneholder en del «NULL». Vi ønsker ikke å se null, vi vil i stedet at det skal stå «--» (to bindestreker) i disse cellene. Tips: Google SQL-kommandoen COALESCE.

SELECT
    country.name AS country,
    COALESCE(city.name, '--') AS city,
    COUNT(COALESCE(countryLanguage.language, '--')) AS country_languages
FROM
    country
LEFT JOIN
    city ON country.code = city.countrycode
LEFT JOIN
    countryLanguage ON country.code = countryLanguage.countryCode
WHERE
    country.capital = city.id or city.id is null
GROUP BY
    country.name, city.name
ORDER BY
    country_languages DESC, country.name ASC;
