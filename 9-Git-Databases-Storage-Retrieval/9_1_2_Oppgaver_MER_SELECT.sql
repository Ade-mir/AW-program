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