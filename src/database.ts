import { Pool } from 'pg' // npm i @types/pg -D

// info bd
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Universo1',
    database: 'firstapi',
    port: 5432
});