                -- PSQL DATABASE
                    -- CRUD
-- DATABASE

--  CREATE 
    CREATE DATABASE databasename;
-- READ
    \l
-- UPDATE (or) RENAME THE DATABASE 
    ALTER DATABASE old_databaseName RENAME TO new_databaseName
-- DELETE DATABASE
    DROP DATABASE databaseName;
-- SHOW CURRENT DATABASE ;
    SELECT CURRENT_DATABASE();
-- SWITCH DATABASE ;
    \c databaseName;


-- TABLE

-- CREATE 
    CREATE TABLE tableName (name VARCHAR(30), rollNo INT)
-- READ 
    \dt ;
-- UPDATE TABLE (OR) RENAME TABLE
    ALTER TABLE tableName RENAME TO newName;
-- DELETE TABLE
    DROP TABLE tableName; 
    -- (or)
    TRUNCATE tableName


--- TABLE COLUMN

-- CREATE OR ADD COLUMN
    ALTER TABLE tableName ADD COLUMN columnName VARCHAR(30)
-- DESCRIBE TABLE (OR) READ
    \d tableName;
-- UPDATE COLUMN
    ALTER TABLE tableName RENAME oldColumnName TO newColumnName;
-- DROP COLUMN
    ALTER TABLE tableName DROP COLUMN columnName;

-- UPDATE DATATYPE
    ALTER TABLE tableName ALTER COLUMN columnName TYPE newType USING columnName :: newType;
    