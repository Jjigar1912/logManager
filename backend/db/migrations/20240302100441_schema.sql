-- migrate:up

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  

CREATE TYPE industryType AS ENUM('PRODUCT BASED COMPANY','SERVICE BASED COMPANY');

CREATE TABLE IF NOT EXISTS "users"
(
    "id" SERIAL NOT NULL PRIMARY KEY , 
    "name" VARCHAR NOT NULL , 
    "email" VARCHAR NOT NULL ,
    "contactNo" VARCHAR(12) , 
    "password" VARCHAR(20) NOT NULL , 
    "industryType" industryType , 
    "username" VARCHAR(10) NOT NULL , 
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    "updatedAt" TIMESTAMP , 
    "profile" TEXT DEFAULT 'user.jpeg'
);

CREATE TABLE IF NOT EXISTS "project"
(
    "id" uuid DEFAULT uuid_generate_v4() PRIMARY KEY , 
    "name" TEXT NOT NULL , 
    "code" uuid DEFAULT uuid_generate_v4() , 
    "description" TEXT NOT NULL ,
    "apiKey" TEXT NOT NULL  ,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP , 
    "updatedAt" TIMESTAMP 
);


CREATE TABLE IF NOT EXISTS "module"
(
    "id" SERIAL NOT NULL PRIMARY KEY , 
    "name" TEXT NOT NULL , 
    "projectId" uuid REFERENCES "project"("id") , 
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP , 
    "updatedAt" TIMESTAMP 
);


CREATE TABLE IF NOT EXISTS "log"
(
    "id" uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    "moduleId" INTEGER NOT NULL REFERENCES "module"("id") ,
    "projectId" uuid NOT NULL REFERENCES "project"("id"),
    "details" JSONB NOT NULL ,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);

-- migrate:down


DROP TABLE IF EXISTS "log" ;

DROP TABLE IF EXISTS "module"; 

DROP TABLE IF EXISTS "project" ; 

DROP TABLE IF EXISTS "users" ; 

DROP TYPE IF EXISTS industryType ;

DROP EXTENSION IF EXISTS "uuid" ;