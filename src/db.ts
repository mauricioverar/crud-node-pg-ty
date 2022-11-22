import { createPool } from 'mysql2/promise'
// pool es como async/await
// y evita usar createConnection, ya q usaría funciones

import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} from './config.js'

// info bd mysql
export const pool = createPool({ // pool = multiples conecciones
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  port: DB_PORT
});

// pool.query // metodo