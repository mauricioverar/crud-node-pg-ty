CREATE DATABASE firstapi;

\l

\c firstapi;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT
);

\dt
\d users

INSERT INTO users (name, email)
  VALUES ('joe', 'joe@ibm.com'),
  ('ryan', 'ryan@faztweb.com');

select * from users;

************************************

mysql con mariadb xampp phpmyadmin

mysql -u root

create database usersdb;

use usersdb;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email TEXT
);

INSERT INTO users (name, email)
  VALUES ('joe', 'joe@ibm.com'),
  ('ryan', 'ryan@faztweb.com');

select * from users;