app.get('/my-other-thing', (req, res, next) => {
    next(new Error('error!'));
});

app.use((err, req, res, next) => {
    console.log(err);
    if (!res.headersSent) {
        res.status(500).send(err.message);
    }
});