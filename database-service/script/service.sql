DROP DATABASE IF EXISTS bookapi_db;

CREATE DATABASE bookapi_db;

USE bookapi_db;

CREATE TABLE users
(
    id       int,
    username varchar(128),
    email    varchar(128),
    password varchar(128)
);

CREATE TABLE books
(
    book_id    int,
    title      varchar(128),
    desciption varchar(128)
);

-- INSERT INTO users(username, email, password) VALUES('testing', 'testing email', 'test test');