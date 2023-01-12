SELECT *
FROM person;

SELECT *
FROM epost;

INSERT INTO epost (Adresse, Person_ID)
SELECT epost, ID
FROM person;

UPDATE person
SET navn = 'Jon Johnsen'
WHERE personnummer = '98765432109';

ALTER TABLE person
DROP COLUMN epost;

SELECT navn, TO_CHAR(foedselsdato,
'DD.MM.YYYY') as foedselsdato
FROM person;

--UPDATE person
--SET TO_CHAR(foedselsdato, 'DD.MM.YYYY') = '20.02.1912'
--WHERE personnummer = '12345678901';

UPDATE person
SET foedselsdato = TO_DATE('20.02.1950', 'DD.MM.YYYY')
WHERE id = '3';