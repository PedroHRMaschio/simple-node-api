require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Express Server is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});

app.use('/api', routes);
