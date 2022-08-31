const express = require('express')
const app = express()

const port = process.env.port || 45
app.listen(port, () => console.log(`Escuchando desde del puerto ${port}...`))