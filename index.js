const Express = require(('express'));

const app = Express()

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get('/health/live', (req, res) => {
    res.send("live");
});

app.get('/health/ready', (req, res) => {
    res.send('ready');
});

app.listen(8080, () => {
    console.log('ready on port 8080')
});
