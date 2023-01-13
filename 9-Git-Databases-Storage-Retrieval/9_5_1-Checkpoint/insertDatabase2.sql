CREATE TABLE
Language (
	ID SERIAL PRIMARY KEY,
    Name TEXT NOT NULL,
    Year INT,
    Creator TEXT
);

CREATE TABLE Tool
(   
    ID SERIAL PRIMARY KEY,
    Code CHAR(2) NOT NULL UNIQUE,
    Name TEXT NOT NULL,
    Developer TEXT
);

CREATE TABLE Language_Tool
(   
    ID SERIAL PRIMARY KEY,
	Language_ID INT,
	Tool_ID INT,
    FOREIGN KEY (Language_ID) REFERENCES Language(ID),
    FOREIGN KEY (Tool_ID) REFERENCES Tool(ID)
);

INSERT INTO Language (Name, Year, Creator)
VALUES
    ('JavaScript', 1997, 'Brendan Eich'),
    ('C#', 2002, 'Anders Hejlsberg'),
    ('Java', 1996, 'James Gosling'),
    ('Python', 1994, 'Guido van Rossum'),
    ('KOBOL', 1959, 'CODASYL');

INSERT INTO Tool (Code, Name, Developer)
VALUES
    ('JS', 'Visual Studio Code', 'Microsoft'),
    ('IJ','IntelliJ', 'JetBrains');

INSERT INTO Language_Tool (Tool_ID, Language_ID)
VALUES
    (1, 4),
    (1, 2),
    (1, 1),
    (2, 4),
    (2, 1),
    (2, 3),
    (NULL, 5),

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



SELECT
	language.name AS "Language",
    COALESCE(tool.name, '-Not supported-') AS "Tool Name"
FROM
    language
LEFT JOIN
    language_tool ON language_tool.id = tool.language_ID