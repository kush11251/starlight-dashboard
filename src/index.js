const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/celestial-events', (req, res) => {
    res.json([{"name": "Full Moon", "date": "2024-03-20"}, {"name": "Solar Eclipse", "date": "2024-04-08"}])
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});