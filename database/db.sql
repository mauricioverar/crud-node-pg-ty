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