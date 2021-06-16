const express = require("express")
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        name: "Sample",
        email: "Sample@gmail.com",
        phone: "000-000-0000",
        unique: 1
    }
];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/../html/home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '/../html/reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '/../html/tables.html')));

app.get('/api/tables', (req, res) => res.json(tables));

app.post('/api/tables', (req, res) => {
    
    const newTable = req.body;
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));