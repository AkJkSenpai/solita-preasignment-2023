const express = require('express');
const { Pool } = require('pg');
const app = express()

const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'solita_preasignment',
  password: 'your-password',
  port: 5432,
});