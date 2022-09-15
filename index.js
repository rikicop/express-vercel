const express = require("express");
const app = express();
//const product = require("./api/product");

require('dotenv').config()

app.use(express.json({ extended: false }));

app.get('/api/insectos', (req, res) => { res.status(200).json({ message: `App corre en puerto ${PORT}` }) })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
