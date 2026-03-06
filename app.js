const express = require('express');
const os = require('os');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello from Kubernetes</h1>
        <p>Hostname: ${os.hostname()}</p>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
	console.log("New change for testing Git");
});
