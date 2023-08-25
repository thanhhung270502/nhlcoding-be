import { Pool } from 'pg';

export const pool = new Pool({
    user: 'kane',
    host: 'localhost',
    password: 'password',
    database: 'kane',
    port: 5432
});