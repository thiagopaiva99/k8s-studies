const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();

const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});
client.set('visits', 0);

app.get('/throw-error', (req, res) => {
  process.exit(0);
});

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is: ${visits}`);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(9001, () => {
  console.log('Up and running!');
});
