const app = require('./app/app')
const port = process.env.PORT || 8020;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});