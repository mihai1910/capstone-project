import express from 'express';
import 'dotenv/config'

const PORT = process.env.PORT;

const app = express();

app.use((req, res, next) => {
    console.log(`The page was accessed with ${req.method} on ${req.url}`)
    next();
})

app.get('/', (req, res) =>{
    res.send('This is the home page');
})

app.get('/about', (req, res) => {
    res.json({message: "you are on the About page"});
})

app.get('/contact', (req, res) => {
    res.json({message: "you are on the Contact page"});
})

app.use((req, res) => {
    res.status(404).json({error: `Error 404: Page ${req.url} not found`});
})

app.listen(PORT, (err) => {
    if (err) {
        console.error('500: Server Error', err);
    } else {
        console.log(`✅ The server is listening on port ${PORT}`);
    }
});