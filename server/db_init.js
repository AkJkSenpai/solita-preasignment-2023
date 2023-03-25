const express = require('express');
const { Client } = require('pg');
const app = express()

const client = new Client({
  user: 'your-username',
  host: 'localhost',
  database: 'solita_preasignment',
  password: 'your-password',
  port: 5432,
});