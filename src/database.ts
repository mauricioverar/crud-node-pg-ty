import { Pool } from 'pg' // npm i @types/pg -D

import {
    DBHOST,
    DBNAME,
    DBPASSWORD,
    DBUSER,
    DBPORT
  } from './config.js'

// info bd postgres
export const pool = new Pool({
    user: DBUSER,
    host: DBHOST,
    password: DBPASSWORD,
    database: DBNAME,
    port: DBPORT
});
