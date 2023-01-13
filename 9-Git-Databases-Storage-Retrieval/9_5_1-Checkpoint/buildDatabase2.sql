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
    Code CHAR(2) NOT NULL,
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

