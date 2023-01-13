-- Spørring 1

SELECT
    year, name, creator
FROM
    language
ORDER
    BY year ASC;

-- Spørring 2

SELECT
    *
FROM
    tool
WHERE
    name LIKE 'Visual Studio Code';

-- NIVÅ 2
-- Spørring 3

SELECT
    ID, COUNT(ID) AS NumberOfLanguages
FROM
    tool
WHERE
    ID IS NOT NULL
GROUP BY
    ID;

-- Spørring 4

SELECT
    language.name AS Language,
    COALESCE(tool.name, '-Not supported-') AS Toolname
FROM
    language
LEFT JOIN
    tool ON language.id = tool.language_ID

-- Spørring 5

