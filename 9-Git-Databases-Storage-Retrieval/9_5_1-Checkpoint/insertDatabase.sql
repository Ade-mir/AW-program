INSERT INTO Language (Name, Year, Creator)
VALUES
    ('JavaScript', 1997, 'Brendan Eich'),
    ('C#', 2002, 'Anders Hejlsberg'),
    ('Java', 1996, 'James Gosling'),
    ('Python', 1994, 'Guido van Rossum'),
    ('KOBOL', 1959, 'CODASYL');


-- Ikke så bra med tanke på redundance, men tror dette er riktig i forhold til oppgave.
INSERT INTO Tool (ID, Name, Developer, Language_ID)
VALUES
    ('JS', 'Visual Studio Code', 'Microsoft', 1),
    ('JS', 'Visual Studio Code', 'Microsoft', 2),
    ('IJ','IntelliJ', 'JetBrains', 3);

