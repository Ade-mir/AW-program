CREATE TABLE Language
(
    ID SERIAL,
    Name TEXT NOT NULL,
    Year INT,
    Creator TEXT,
    PRIMARY KEY (ID)
);

CREATE TABLE Tool
(   
    ToolID SERIAL,
    ID CHAR(2) NOT NULL,
    Name TEXT NOT NULL,
    Developer TEXT,
    Language_ID INT REFERENCES Language(ID),
    PRIMARY KEY (ToolID)
);